/*
  Pretty much classic FM, although we put an envelope on the modulation index. 
  That's what all the decay(), release() and timer machinery is for. 
  (The amplitude envelope is computered entirely separatey in EnvGain - we do need a callback 
  from envGain in order to know when we can clean up our throwaway nodes.)
  */
import {audioCtx} from '../aisCore/baseSoundModel.js';


export default function (context=audioCtx) {

    var graph = null,

    waveType=['sine', 'square', 'sawtooth', 'triangle'],

    // internal params
    m_freq=150, //modulation frequency
    m_wavType=0,

    // common ADSR and Gain stuff
    m_attackDur = .002, // avoid clicks
    m_decayDur = .5,


    decayTimeout=null, //setTimeOut id
    stopTimeout=null, //setTimeOut id

    // nodes requiring rebuilding on each play
    m_OscNode = null,
   
    // persistent
    envGainNode = context.createGain(),
    overallGain = context.createGain(),
    m_Gain=.75,      


    graphPlayingP = false;

    //initialization
    //envGainNode.value=m_Gain;
    envGainNode.connect(overallGain);

    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: overallGain});
    myInterface.setAboutText("Kick Drum based on https://dev.opera.com/articles/drum-sounds-webaudio/");
    myInterface.setName("Kick Drum")


    myInterface.registerParam(
        "Gain", "range",
        {"min": 0, "max": 1, "val": m_Gain},

        function (i_val) {
          m_Gain = i_val;
          overallGain.gain.setValueAtTime(m_Gain,context.currentTime);

        }
    );

    var buildGraph = function(){
      //Promise is only necessary if we are loading files as part of the model
      return new Promise((resolve, reject) => {
        
        m_OscNode = context.createOscillator();        
        m_OscNode.connect(envGainNode);

        resolve();
      });
    }; 


    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
      //console.log("Kick ++++++++++++++++++++")

        if (decayTimeout != null) {
          //console.log("clear decay timeout")
          clearTimeout(decayTimeout)
          decayTimeout=null;
        }
        if (stopTimeout!= null) {
          //console.log("clear stop timeout")
          clearTimeout(stopTimeout)
          stopTimeout=null;
        }

        // If your playing, start again without rebuilding graph
        if (graphPlayingP==true){
          // and just carry on from here
          //console.log("Kick - continue from playing at " + startVal)
          m_OscNode.frequency.cancelAndHoldAtTime(startVal);
          //m_OscNode.frequency.linearRampToValueAtTime(m_freq, startVal + m_attackWhilePlayingDur);
          m_OscNode.frequency.setValueAtTime(m_freq, startVal);

          envGainNode.gain.cancelAndHoldAtTime(startVal);
          //envGainNode.gain.linearRampToValueAtTime(1, startVal + m_attackWhilePlayingDur); 
          envGainNode.gain.exponentialRampToValueAtTime(1, startVal + m_attackDur); 

          myInterface.release(startVal+m_attackDur);

          return; // don't build another graph
        }
   

        graphPlayingP = true;
        // (re)build throwaway nodes *and* initialize their value*
        buildGraph().then(()=>{

          m_OscNode.type=waveType[m_wavType]; 

          m_OscNode.frequency.setValueAtTime(m_freq, startVal);
          m_OscNode.start(startVal);
          //console.log("---Kick start at " + startVal)

          envGainNode.gain.cancelScheduledValues(startVal);
          envGainNode.gain.setValueAtTime(0, startVal );  
          envGainNode.gain.exponentialRampToValueAtTime(1, startVal + m_attackDur);

          if (releaseVal != null){
            myInterface.release(releaseVal);
            //envGainNode.release(releaseVal);
          } else {
            // impulse sound, release immediately following attach
            myInterface.release(startVal+m_attackDur);
            //envGainNode.release(context.currentTime+m_attackDur);
          }
          
        })
    };

    // private helper, decay now
    var decay = function (dur=m_decayDur){
      //console.log("Kick decay");
      
      m_OscNode.frequency.cancelAndHoldAtTime(0);
      m_OscNode.frequency.exponentialRampToValueAtTime(.001, context.currentTime + dur);


      envGainNode.gain.cancelAndHoldAtTime(0);
      //envGainNode.gain.linearRampToValueAtTime(0, context.currentTime + dur); 
      envGainNode.gain.exponentialRampToValueAtTime(.001, context.currentTime + dur); 
     
      if (dur>0){
        stopTimeout=setTimeout(function(){myInterface.stop(0)},1000*dur)
      } else{
        myInterface.stop();
      }
      
    };

    myCB.onRelease = function (when=context.currentTime, dur=m_decayDur){

      if ((graphPlayingP==true) && (decayTimeout==null) && (stopTimeout==null)){
        //console.log(" - Kick - onRelease at " + when)

        if (when > context.currentTime){
          decayTimeout=setTimeout(function(){decay(dur)}, 1000*(when-context.currentTime))
        } else{
          decay(dur)
        }
      }
    };

    myCB.onStop = function(val=0){
      //console.log("Kick - onStop ")
      if (decayTimeout!= null) {
        //console.log("clear decay timeout")
        clearTimeout(decayTimeout)
        decayTimeout=null;
      }
      if (stopTimeout!= null) {
        //console.log("clear stop timeout")
        clearTimeout(stopTimeout)
        stopTimeout=null;
      }
      if (graphPlayingP==true){
          cleanUp();
          graphPlayingP=false;
      }
    };

    var cleanUp=function(val){
      //console.log("Kick cleanup");
      m_OscNode.stop(val);
    }


  //return myInterface; 
  return new Promise((resolve, reject) => { resolve(myInterface);});
}
