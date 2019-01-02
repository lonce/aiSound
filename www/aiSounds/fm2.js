/*
  Pretty much classic FM, although we put an envelope on the modulation index. 
  That's what all the decay(), release() and timer machinery is for. 
  (The amplitude envelope is computered entirely separatey in EnvGain - we do need a callback 
  from envGain in order to know when we can clean up our throwaway nodes.)
  */
import {audioCtx} from '../aisCore/baseSoundModel.js';
import envGain from '../aisComponents/EnvGain2.js';


export default function (context=audioCtx) {

    var graph = null,

    waveType=['sine', 'square', 'sawtooth', 'triangle'],

    // internal params
    m_freq=200, //modulation frequency
    m_modIndex=200,
    m_carFreq=440,
    m_carType=0,

    // common ADSR and Gain stuff
    m_attackDur = 1, // avoid clicks
    m_decayDur = 1,
    m_attackWhilePlayingDur = m_attackDur,//1,

    decayTimeout=null, //setTimeOut id
    stopTimeout=null, //setTimeOut id

    // nodes requiring rebuilding on each play
    oscModNode = null,
    m_CarrierNode = null,

    // persistent nodes
    modIndexNode = context.createGain(),   
   
    envGainNode = envGain(m_attackDur, m_decayDur, function(val=0){
      cleanUp();
    }),

    graphPlayingP = false;

    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: envGainNode});
    myInterface.setAboutText("trying a compositional as EnvGain");
    myInterface.setName("fm2")

    myInterface.registerParam(
        "Modulation Frequency", "range",
        {"min": 0, "max": 400, "val": m_freq},

        function (i_val) {
          m_freq = i_val;
          if (oscModNode != undefined) {
              oscModNode.frequency.setValueAtTime(m_freq,context.currentTime);
            }
        }
    );

    myInterface.registerParam(
        "Carrier Frequency", "range",
        {"min": 0, "max": 2000, "val": m_carFreq},

        function (i_val) {
              m_carFreq = i_val;
              if (m_CarrierNode != undefined) {
              m_CarrierNode.frequency.setValueAtTime(m_carFreq,context.currentTime);
            }
        }
    );

    myInterface.registerParam(
        "Modulation Index", "range",
        {"min": 0, "max": 400, "val": m_modIndex},

        function (i_val) {
          m_modIndex = i_val;
          if (modIndexNode != undefined) {
            if (stopTimeout == null) {  // Only set modIndex if it is not in decay mode (and thus changing "autonomously")
              modIndexNode.gain.setValueAtTime(m_modIndex,context.currentTime)
            }
          }
        }
    );

    // expose the envGainNode parameter directly
    myInterface.registerChildParam(envGainNode, "Gain");

    var buildGraph = function(){
      //Promise is only necessary if we are loading files as part of the model
      return new Promise((resolve, reject) => {
        
        oscModNode = context.createOscillator();
        oscModNode.connect(modIndexNode);

        m_CarrierNode = context.createOscillator();
        modIndexNode.connect(m_CarrierNode.frequency);  //modIndex node is the frequency input to the carrier
        
        m_CarrierNode.connect(envGainNode);

        resolve();
      });
    }; 
    
    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
        envGainNode.play(startVal, releaseVal);  

        // If already releasing, cancel release
        if (graphPlayingP==true){
          if (decayTimeout) {
            clearTimeout(decayTimeout)
            decayTimeout=null;
          }
          if (stopTimeout) {
            clearTimeout(stopTimeout)
            stopTimeout=null;
          }

          // and just carry on from here
          modIndexNode.gain.cancelAndHoldAtTime(startVal);
          modIndexNode.gain.linearRampToValueAtTime(m_modIndex, startVal + m_attackWhilePlayingDur);

          return; // don't build another graph
        }
        // start afresh
        modIndexNode.gain.cancelScheduledValues(startVal);
        modIndexNode.gain.linearRampToValueAtTime(m_modIndex, startVal + m_attackDur);      

        // (re)build throwaway nodes *and* initialize their value*
        buildGraph().then(()=>{

          oscModNode.frequency.setValueAtTime(m_freq, startVal); 

          m_CarrierNode.type=waveType[m_carType]; 
          m_CarrierNode.frequency.setValueAtTime(m_carFreq,startVal);
     
          oscModNode.start(startVal);
          m_CarrierNode.start(startVal);

          graphPlayingP = true;
          if (releaseVal != null){
              myInterface.release(releaseVal);
          }
          
        })
    };

    // private helper, decay now
    var decay = function (dur=m_decayDur){
      //envGainNode.gain.linearRampToValueAtTime(0, context.currentTime + dur); 
      modIndexNode.gain.cancelAndHoldAtTime(0);
      modIndexNode.gain.linearRampToValueAtTime(0, context.currentTime + dur);     
      if (dur>0){
        stopTimeout=setTimeout(function(){myInterface.stop(0)},1000*dur)
      } else{
        myInterface.stop();
      }
      
    };

    myCB.onRelease = function (when=context.currentTime, dur=m_decayDur){
      envGainNode.release(when);
      
      if (when > context.currentTime){
        decayTimeout=setTimeout(function(){decay(dur)}, 1000*(when-context.currentTime))
      } else{
        decay(dur)
      }
      
    };

    myCB.onStop = function(val=0){
      if (graphPlayingP){
            envGainNode.stop(val);
            graphPlayingP=false;
            //overallGain.disconnect();
            if (decayTimeout) {
              clearTimeout(decayTimeout)
              decayTimeout=null;
            }
            if (stopTimeout) {
              clearTimeout(stopTimeout)
              stopTimeout=null;
            }
      }
    };

    var cleanUp=function(val){
        oscModNode.stop(val);
        m_CarrierNode.stop(val);
    }




  //return myInterface; 
  return new Promise((resolve, reject) => { resolve(myInterface);});
}
