/*
  Pretty much classic FM, although we put an envelope on the modulation index. 
  That's what all the decay(), release() and timer machinery is for. 
  (The amplitude envelope is computered entirely separatey in EnvGain - we do need a callback 
  from envGain in order to know when we can clean up our throwaway nodes.)
  */
import {audioCtx} from '../aisCore/baseSoundModel.js';
import childSndFactory from '../aiSounds/noisebandPersistent.js';


export default function (context=audioCtx) {

    var graph = null;

    // internal params
    var m_Position=0;
    var m_Gain=.5;


    // common ADSR and Gain stuff

    // nodes requiring rebuilding on each play

    // persistent nodes  
    var overallGain = context.createGain();

    var childNode;
    
    childSndFactory().then((newsnd) => {
      
      childNode=newsnd;

      childNode.connect(overallGain);
      setChildParams(0);
      console.log('childfactory resolution')
    }).catch(e =>{
      console.log('child factory error')
    });


    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: overallGain});
    myInterface.setAboutText("Audio Worklet for noise");
    myInterface.setName("noise band")

    var setChildParams = function(interpval){
        childNode.setParam("Center Frequency", 2000*(1-interpval));
        childNode.setParamNorm("Filter Q", Math.abs(.5-interpval));
        childNode.setParamNorm("Gain", 1-2*Math.abs(.5-interpval));
    };
  
    myInterface.setPosition = myInterface.registerParam(
      "Position", "range", {  "min": 0, "max": 1, "val": m_Position},
      function (i_val) {
        m_Position=i_val;
        setChildParams(m_Position);
      }
    );

    myInterface.setGain = myInterface.registerParam(
      "Gain", "range", {"min": 0, "max": 1, "val":m_Gain },
      function (i_val) {
        m_Gain = i_val;
        overallGain.gain.setValueAtTime(m_Gain,context.currentTime);
      }
    );


    var buildGraph = function(){
      //Promise is only necessary if we are loading files or worklet modules as part of the model
      return new Promise((resolve, reject) => {
        // Loads module script via AudioWorklet.
        resolve()
        });
    }; 
    
    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
        childNode.play();  
    };


    myCB.onRelease = function (when=context.currentTime, dur=0){
      childNode.release();
    };

    myCB.onStop = function(val=0){
      childNode.stop(val);
    };



  //return myInterface; 
  return new Promise((resolve, reject) => { 
    console.log('resolve myInterface');
    resolve(myInterface);});
}
