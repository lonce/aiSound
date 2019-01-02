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
    m_attackDur = .1, // avoid clicks
    m_decayDur = .5,

    stopTimeout=null, //setTimeOut id

    // nodes requiring rebuilding on each play
    m_OscNode = null,
   
    // persistent
    envGainNode = context.createGain(),
    overallGain = context.createGain(),
    m_Gain=.75,      

    graphPlayingP = false;

    //initialization
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

        if(graphPlayingP == true){

          console.log("Kick restart")
          if (stopTimeout != null){
            clearTimeout(stopTimeout);
          }

          m_OscNode.frequency.cancelAndHoldAtTime(startVal);
          m_OscNode.frequency.exponentialRampToValueAtTime(m_freq, startVal + m_attackDur);
          m_OscNode.frequency.exponentialRampToValueAtTime(.001, startVal + m_attackDur + m_decayDur);

          envGainNode.gain.cancelAndHoldAtTime(startVal );  
          envGainNode.gain.exponentialRampToValueAtTime(1, startVal + m_attackDur);  
          envGainNode.gain.exponentialRampToValueAtTime(.001, startVal + m_attackDur + m_decayDur);

          //m_OscNode.stop(startVal + m_attackDur + m_decayDur);
          myInterface.stop(startVal + m_attackDur + m_decayDur);


        } else{

          graphPlayingP = true;
          // (re)build throwaway nodes *and* initialize their value*
          buildGraph().then(()=>{

            m_OscNode.type=waveType[m_wavType]; 

            m_OscNode.frequency.setValueAtTime(m_freq, startVal);
            m_OscNode.frequency.exponentialRampToValueAtTime(.001, startVal + m_attackDur + m_decayDur);
            m_OscNode.start(startVal);

            //envGainNode.gain.setValueAtTime(0, startVal );  
            //envGainNode.gain.exponentialRampToValueAtTime(1, startVal + m_attackDur);
            envGainNode.gain.setValueAtTime(1, startVal );  
            envGainNode.gain.exponentialRampToValueAtTime(.001, startVal + m_attackDur + m_decayDur);
            
            //m_OscNode.stop(startVal + m_attackDur + m_decayDur);
            myInterface.stop(startVal + m_attackDur + m_decayDur);
          })
        }
    };


    myCB.onRelease = function (when=context.currentTime, dur=m_decayDur){

    };

    myCB.onStop = function(when=0){
      console.log("kick onStop")
      if (when > context.currentTime){
        stopTimeout=setTimeout(function(){
          graphPlayingP = false;
          cleanUp();
          stopTimeout=null
        },1000*(when-context.currentTime))
      }

    };


    var cleanUp=function(val=context.currentTime){
      console.log("Kick cleanup");
      m_OscNode.stop(val);
    }


  //return myInterface; 
  return new Promise((resolve, reject) => { resolve(myInterface);});
}
