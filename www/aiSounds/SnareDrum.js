/*
  Pretty much classic FM, although we put an envelope on the modulation index. 
  That's what all the decay(), release() and timer machinery is for. 
  (The amplitude envelope is computered entirely separatey in EnvGain - we do need a callback 
  from envGain in order to know when we can clean up our throwaway nodes.)
  */
import {audioCtx} from '../aisCore/baseSoundModel.js';
//import ResonanceAudio from  '../aisCore/libs/resonance-audio.js'
import '../aisCore/libs/resonance-audio.js'

export default function (context=audioCtx) {

    console.log(`audioCtx is ${audioCtx}`)

    var graph = null,

    waveType=['sine', 'square', 'sawtooth', 'triangle'],

    // internal params
    m_freq=200, //modulation frequency
    m_wavType=0,

    m_Gain=.75,      
    //graphPlayingP = false;

    m_xpos=-.7,
    m_ypos=-.7;


    var makeNoiseBuffer=function(){
      var bufferSize = context.sampleRate;
      var buffer = context.createBuffer(1, bufferSize, context.sampleRate);
      var output = buffer.getChannelData(0);

      for (var i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      return buffer;
    }; 

    var m_buffer=makeNoiseBuffer();

    // persistent nodes
    var pn_noiseFilterNode = context.createBiquadFilter();
    var pn_noiseEnvelope = context.createGain();

    var pn_snapEnvelope = context.createGain();

    var pn_overallGain = context.createGain();

    // RESONANCE AUDIO
    let resonanceAudioScene = new ResonanceAudio(audioCtx);
    let source = resonanceAudioScene.createSource();

    
    // permanent parts of the graph
    let initBuild=function(){
      pn_noiseFilterNode.type = 'highpass';
      pn_noiseFilterNode.frequency.value = 1000;

      pn_noiseFilterNode.connect(pn_noiseEnvelope);
      pn_noiseEnvelope.connect(pn_overallGain);

      pn_snapEnvelope.connect(pn_overallGain);
      pn_overallGain.connect(source.input);

      // RESONANCE AUDIO
      // Define room dimensions.
      // By default, room dimensions are undefined (0m x 0m x 0m).
      let roomDimensions = {
        width: 13.1,
        height: 12.5,
        depth: 13.4,
      };

      // Define materials for each of the room’s six surfaces.
      // Room materials have different acoustic reflectivity.
      let materials=['transparent','curtain-heavy','grass', 'brick-bare', 'glass-thin', 'marble']
      let mat=materials[2];
      let roomMaterials = {
        // Room wall materials
        left: mat, //'brick-bare',
        right: mat, //'curtain-heavy',
        front: mat,
        back: mat, //'glass-thin',
        // Room floor
        down: mat, //'grass',
        // Room ceiling
        up: mat //'transparent',
      };

      resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);

      source.setPosition(m_xpos, m_ypos, 0);
      
    }();

    // nodes requiring rebuilding on each play
    var fn_NoiseBufferSourceNode = null;
    var fn_snapNode = null; 


    var myCB = {};
    //var myInterface = context.createBaseSound(context, {node: myCB,  output: pn_overallGain});
    var myInterface = context.createBaseSound(context, {node: myCB,  output: resonanceAudioScene.output});
    myInterface.setAboutText("Snare Drum based on https://dev.opera.com/articles/drum-sounds-webaudio/ from Chris Lowis");
    myInterface.setName("Snare Drum")


    myInterface.registerParam(
        "x-position", "range",
        {"min": -10, "max": 10, "val": -.7},
        function (i_val) {
          m_xpos=i_val;
          source.setPosition(m_xpos, m_ypos, 0);
        }
    );

    myInterface.registerParam(
        "y-position", "range",
        {"min": -10, "max": 10, "val": -.7},
        function (i_val) {
          m_ypos=i_val
          source.setPosition(m_xpos, m_ypos, 0);
        }
    );

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
        fn_NoiseBufferSourceNode.buffer = m_buffer;
        fn_NoiseBufferSourceNode.connect(pn_noiseFilterNode);

        fn_snapNode = context.createOscillator();
        fn_snapNode.type = 'triangle';
        fn_snapNode.connect(pn_snapEnvelope);

        resolve();
      });
    }; 

    var trigger=function(time){
      //console.log("snare trigger - sending starts for time " + (time))
      pn_noiseEnvelope.gain.setValueAtTime(1, time);
      pn_noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
      fn_NoiseBufferSourceNode.start(time)

      fn_snapNode.frequency.setValueAtTime(100, time);
      pn_snapEnvelope.gain.setValueAtTime(0.7, time);
      pn_snapEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
      fn_snapNode.start(time)

      fn_NoiseBufferSourceNode.stop(time + 0.2);
      fn_snapNode.stop(time + 0.2);
      myInterface.stop(time + 0.2);
      //console.log("snare trigger - sending stops for time " + (time+.02))
    }


    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
        // (re)build throwaway nodes *and* initialize their value*
        if(myInterface.isPlaying(startVal)){ // short sound - just bag the too-quick play
          return;
        }

        //graphPlayingP = true;
        buildGraph().then(()=>{         
          trigger(startVal)
        })
    };


    myCB.onRelease = function (when=context.currentTime, dur){

    };

    myCB.onStop = function(when=0){
      //console.log("snare onStop")


    };

    var cleanUp=function(val){

    }


  //return myInterface; 
  return new Promise((resolve, reject) => { resolve(myInterface);});
}
