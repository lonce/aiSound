/*
  Pretty much classic FM, although we put an envelope on the modulation index. 
  That's what all the decay(), release() and timer machinery is for. 
  (The amplitude envelope is computered entirely separatey in EnvGain - we do need a callback 
  from envGain in order to know when we can clean up our throwaway nodes.)
  */
import {audioCtx} from '../aisCore/baseSoundModel.js';
import envGain from '../aisComponents/EnvGain2.js';

var faux2realQ=function(fq){ // maps [0,2] -> [0,40]
  return 20*Math.pow(fq,2)
}

export default function (context=audioCtx) {

    var graph = null,

    // internal params
    m_cf=200, // filter band params
    m_fauxQ=.5,
    m_realQ = faux2realQ(m_fauxQ),

    // common ADSR and Gain stuff
    m_attackDur = .2, // avoid clicks
    m_decayDur = 2,

    // nodes requiring rebuilding on each play
    // [NONE .... yeah!]

    // persistent nodes  
    envGainNode = envGain(m_attackDur, m_decayDur, function(val=0){
      cleanUp();
    }),
    noiseGeneratorNode = null,
    m_filterNode = audioCtx.createBiquadFilter();

    // do the one-time initialization of creation and connections
    var init=function(){
      console.log("about to call audioWorklet.addModle ")
      // Strangely, this relative path works when serving from aisound.cloud, but not when serving locally with node or http-server
      //audioCtx.audioWorklet.addModule('../aisComponents/NoiseGeneratorW.js').then(() => {
      audioCtx.audioWorklet.addModule('https://aisound.cloud/aisComponents/NoiseGeneratorW.js').then(() => {
        console.log("audioWorklet.addModle promise returned")
        noiseGeneratorNode = new AudioWorkletNode(audioCtx, 'noise-generator');

        m_filterNode.type="bandpass";
        m_filterNode.frequency.value = m_cf;
        m_filterNode.Q.value = m_realQ;

        noiseGeneratorNode.connect(m_filterNode);
        m_filterNode.connect(envGainNode);

      }).catch(e=>{console.log('noisebandPersistent init error: ' + e);});
    }();


    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: envGainNode});
    myInterface.setAboutText("Audio Worklet for noise");
    myInterface.setName("noise band")


    // ----------------------------------------
    // expose the parameters
    //-----------------------------------------
      myInterface.setCenterFreq = myInterface.registerParam(
        "Center Frequency", "range",{"min": 100,"max": 2000,"val": m_cf},
        function (i_val) {
          m_cf = i_val;
          m_filterNode.frequency.value = m_cf;
        }
      );

      myInterface.setFilterQ = myInterface.registerParam(
        "Filter Q","range", {"min": 0,"max": 1,"val": m_fauxQ},
        function (i_val) {
          m_fauxQ=i_val;
          m_realQ = faux2realQ(i_val);
          m_filterNode.Q.value = m_realQ;
        }
      );

    myInterface.registerChildParam(envGainNode, "Gain");
    // ----------------------------------------

    var buildGraph = function(){
      //Promise is only necessary if we are loading files or worklet modules as part of the model
      return new Promise((resolve, reject) => {
        // Loads module script via AudioWorklet.
        resolve()
        });
    }; 
    
    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
        envGainNode.play(startVal, releaseVal);  
        if (myInterface.isPlaying(startVal)){
          //console.log("noiseband: got onPlay while already playing");
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
      envGainNode.stop(val);
    };

    var cleanUp=function(val){
        myInterface.stop() // we are relying on EnvGain to let us know when to stop ourselves 
    }


  //return myInterface; 
  return new Promise((resolve, reject) => { resolve(myInterface);});
}
