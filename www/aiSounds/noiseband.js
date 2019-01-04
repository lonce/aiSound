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

    // internal params
    m_cf=200, //modulation frequency

    // common ADSR and Gain stuff
    m_attackDur = 1, // avoid clicks
    m_decayDur = 1,

    // nodes requiring rebuilding on each play
    noiseGeneratorNode = null,

    // persistent nodes  
    envGainNode = envGain(m_attackDur, m_decayDur, function(val=0){
      cleanUp();
    });


    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: envGainNode});
    myInterface.setAboutText("Audio Worklet for noise");
    myInterface.setName("noise band")


    myInterface.registerParam(
        "Center Frequency", "range",
        {"min": 40, "max": 2000, "val": m_cf},

        function (i_val) {
              m_cf = i_val;
            }
    );

    // expose the envGainNode parameter directly
    myInterface.registerChildParam(envGainNode, "Gain");

    var buildGraph = function(){
      //Promise is only necessary if we are loading files or worklet modules as part of the model
      return new Promise((resolve, reject) => {
        // Loads module script via AudioWorklet.
        Promise.all([audioCtx.audioWorklet.addModule('../aisComponents/NoiseGeneratorW.js')]).then(() => {

            noiseGeneratorNode = new AudioWorkletNode(audioCtx, 'noise-generator');
            noiseGeneratorNode.connect(envGainNode);

          }).then(resolve);
        });
    }; 
    
    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
        envGainNode.play(startVal, releaseVal);  
        if (myInterface.isPlaying()){
          return; // don't build another graph
        }  

        // (re)build throwaway nodes *and* initialize their value*
        buildGraph().then(()=>{
          //noiseGeneratorNode.start(startVal);

          if (releaseVal != null){
              myInterface.release(releaseVal);
              console.log("Stretched: calling release("+releaseVal+")");
          }
          
        })
    };


    myCB.onRelease = function (when=context.currentTime, dur=m_decayDur){
      envGainNode.release(when);
    };

    myCB.onStop = function(val=0){
      if (myInterface.isPlaying()){
            envGainNode.stop(val);
      }
    };

    var cleanUp=function(val){
        //noiseGeneratorNode.stop(val);
        noiseGeneratorNode.disconnect()
    }


  //return myInterface; 
  return new Promise((resolve, reject) => { resolve(myInterface);});
}
