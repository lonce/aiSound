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
    m_freq=150, //modulation frequency
    m_wavType=0,

    // common ADSR and Gain stuff
    m_attackDur = .005, // avoid clicks
    m_decayDur = .5,
    m_attackWhilePlayingDur = m_attackDur, //.005,

    decayTimeout=null, //setTimeOut id
    stopTimeout=null, //setTimeOut id

    // nodes requiring rebuilding on each play
    m_OscNode = null,
   
    envGainNode = envGain(m_attackDur, m_decayDur, function(val=0){
      //cleanUp();
    }),

    graphPlayingP = false;

    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: envGainNode});
    myInterface.setAboutText("Kick Drum based on https://dev.opera.com/articles/drum-sounds-webaudio/");
    myInterface.setName("Kick Drum")

    // expose the envGainNode parameter directly
    myInterface.registerChildParam(envGainNode, "Gain");


    var buildGraph = function(){
      //Promise is only necessary if we are loading files as part of the model
      return new Promise((resolve, reject) => {
        
        m_OscNode = context.createOscillator();        
        m_OscNode.connect(envGainNode);

        resolve();
      });
    }; 


    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
      console.log("Kick ++++++++++++++++++++")
        envGainNode.play(startVal, releaseVal);  

        if (decayTimeout != null) {
          console.log("clear decay timeout")
          clearTimeout(decayTimeout)
          decayTimeout=null;
        }
        if (stopTimeout!= null) {
          console.log("clear stop timeout")
          clearTimeout(stopTimeout)
          stopTimeout=null;
        }

        // If your playing, start again without rebuilding graph
        if (graphPlayingP==true){
          // and just carry on from here
          console.log("Kick - continue from playing at " + startVal)
          m_OscNode.frequency.cancelAndHoldAtTime(startVal);
          m_OscNode.frequency.linearRampToValueAtTime(m_freq, startVal + m_attackWhilePlayingDur);
          myInterface.release(context.currentTime+m_attackDur);

          return; // don't build another graph
        }
   

        // (re)build throwaway nodes *and* initialize their value*
        buildGraph().then(()=>{
          console.log("Kick - built new graph ")
          m_OscNode.type=waveType[m_wavType]; 
          console.log("set freq to " + m_freq)
          m_OscNode.frequency.setValueAtTime(m_freq,startVal);
          m_OscNode.start(startVal);

          graphPlayingP = true;
          if (releaseVal != null){
            myInterface.release(releaseVal);
            //envGainNode.release(releaseVal);
          } else {
            // impulse sound, release immediately following attach
            myInterface.release(context.currentTime+m_attackDur);
            //envGainNode.release(context.currentTime+m_attackDur);
          }
          
        })
    };

    // private helper, decay now
    var decay = function (dur=m_decayDur){
      console.log("Kick decay");
      
      m_OscNode.frequency.cancelAndHoldAtTime(0);
      m_OscNode.frequency.exponentialRampToValueAtTime(.001, context.currentTime + dur);
     
      if (dur>0){
        stopTimeout=setTimeout(function(){myInterface.stop(0)},1000*dur)
      } else{
        myInterface.stop();
      }
      
    };

    myCB.onRelease = function (when=context.currentTime, dur=m_decayDur){
      envGainNode.release(when);
      // clean up any scheduled timeouts
      if (decayTimeout!= null) {
        console.log("clear decay timeout")
        clearTimeout(decayTimeout)
        decayTimeout=null;
      }
      if (stopTimeout!= null) {
        console.log("clear stop timeout")
        clearTimeout(stopTimeout)
        stopTimeout=null;
      }


      if (graphPlayingP==true){
        console.log("Kick - onRelease at " + when)

        if (when > context.currentTime){
          decayTimeout=setTimeout(function(){decay(dur)}, 1000*(when-context.currentTime))
        } else{
          decay(dur)
        }
      }
      
    };

    myCB.onStop = function(val=0){
      console.log("Kick - onStop ")
      if (decayTimeout!= null) {
        console.log("clear decay timeout")
        clearTimeout(decayTimeout)
        decayTimeout=null;
      }
      if (stopTimeout!= null) {
        console.log("clear stop timeout")
        clearTimeout(stopTimeout)
        stopTimeout=null;
      }
      if (graphPlayingP==true){
          cleanUp();
          envGainNode.stop(val);
          graphPlayingP=false;
      }
    };

    var cleanUp=function(val){
      console.log("Kick cleanup");
      m_OscNode.stop(val);
    }


  //return myInterface; 
  return new Promise((resolve, reject) => { resolve(myInterface);});
}
