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
    m_freq=200, //modulation frequency
    m_wavType=0,

    m_Gain=.75;      

    // The buffer for the source node
    var sm={
      buffLoaded : false,
      soundBuff : context.createBuffer(2,2,44100),
      m_soundUrl : "../audioResources/hihat.wav",
      loadedCB: function onLoadAudioResource(b){
        sm.soundBuff = b;
        sm.buffLoaded = true;
        console.log("Buffer Loaded!");
      }
    };


    // persistent nodes
    var pn_overallGain = context.createGain();
    
    // permanent parts of the graph
    let initBuild=function(){      
    }();

    // nodes requiring rebuilding on each play
    var fn_NoiseBufferSourceNode = null;

    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: pn_overallGain});
    myInterface.setAboutText("HiHat based on https://dev.opera.com/articles/drum-sounds-webaudio/ from Chris Lowis");
    myInterface.setName("HiHat ")


    myInterface.registerParam(
        "Gain", "range",
        {"min": 0, "max": 1, "val": m_Gain},

        function (i_val) {
          m_Gain = i_val;
          pn_overallGain.gain.setValueAtTime(m_Gain,context.currentTime);

        }
    );

    var buildGraph = function(){
      //Promise is only necessary if we are loading files as part of the model
      return new Promise((resolve, reject) => {
        
        fn_NoiseBufferSourceNode = context.createBufferSource();
        fn_NoiseBufferSourceNode.buffer = sm.soundBuff;
        fn_NoiseBufferSourceNode.connect(pn_overallGain);

        resolve();
      });
    }; 

    var trigger=function(time){
      fn_NoiseBufferSourceNode.start(time)
      fn_NoiseBufferSourceNode.stop(time + 0.2);
      myInterface.stop(time + 0.2);
    }


    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
        // (re)build throwaway nodes *and* initialize their value*

        if(myInterface.isPlaying(startVal)){ // short sound - just bag the too-quick play
          console.log(" HIHAT Playing already, get out of town!")
          return;
        }

        if (sm.buffLoaded) {
          buildGraph().then(()=>{  
              trigger(startVal)
          })
        }
    };


    myCB.onRelease = function (when=context.currentTime, dur){

    };

    myCB.onStop = function(val=0){

    };

    var cleanUp=function(val){

    }


  //all sound factories must return a promise
  // put the asynchronous stuff in here
  //return new Promise((resolve, reject) => { resolve(myInterface);});
  return new Promise((resolve, reject) => {
    myInterface.loadAudioResource(sm.m_soundUrl, sm.loadedCB).then(()=>{
      resolve(myInterface);
    });
  });
}
