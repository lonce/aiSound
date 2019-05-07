/*
  Pretty much classic FM, although we put an envelope on the modulation index. 
  That's what all the decay(), release() and timer machinery is for. 
  (The amplitude envelope is computered entirely separatey in EnvGain - we do need a callback 
  from envGain in order to know when we can clean up our throwaway nodes.)
  */
import {audioCtx, resourceHost} from '../aisCore/baseSoundModel.js';
import FaustFactory from "./faust.karplus/karplus_exfaust97.js";
import parse_faust_ui from '../aisCore/fausthelper.js';


export default function (context=audioCtx) {

    const gainNode = audioCtx.createGain(); 
    var m_Gain=.5;

    // directory of faust object
    var ffact = new FaustFactory(audioCtx, resourceHost+'./aiSounds/faust.karplus');
    var faustNode;


    //graphPlayingP = false;
    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: gainNode});
    myInterface.setAboutText("<a href='https://faust.grame.fr/' target='_blank'>Faust</a> karplus (exfaust97) demo synth exported as wasmjs-worklet node, then wrapped snuggly for aiSound.cloud usage.")
    myInterface.setName("faust.karplus")


    // This model just needs a one-time graph creation
    var buildGraph = function(){
      //Promise is only necessary if we are loading files as part of the model
      return new Promise((resolve, reject) => {
        
        ffact.load().then(foo=>{
          faustNode = foo;
          var pui = parse_faust_ui(faustNode.descriptor);
          console.log("created  faust node = " + faustNode)

          // register all the faust object parameters
          for(let i=0;i<pui.length;i++){
              console.log(`param ${i} is ${JSON.stringify(pui[i])}`)
              if (pui[i].label != "gate" && pui[i].label != "gain"){
                myInterface.registerParam(
                  pui[i].label, "range",
                  {"min" : pui[i].min, "max" : pui[i].max, "val" : pui[i].value},
                     function(ival){
                        //console.log(`setting ${pui[i].address} to ${ival}`)
                        faustNode.setParamValue(pui[i].address, ival);
                     }
                ); // registerParam
              } 
          }

          faustNode.connect(gainNode);

          myInterface.registerParam(
              "Gain", "range",
              {"min": 0, "max": 1, "val": m_Gain},
              function (i_val) {
                m_Gain = i_val;
                gainNode.gain.setValueAtTime(m_Gain,context.currentTime);

              }
          );

          resolve(); // resolve buildGraph
        });
        //--------------------------------------
        
      });
    }; 
    
    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
          //faustNode.setParamValue("/untitled/gate", 0)
          faustNode.setParamValue("/karplus/gate", 1);
          //graphPlayingP = true;

          // These sounds need to have gate set to zero to be replayed
          setTimeout(function(){
            faustNode.setParamValue("/karplus/gate", 0)
          },50);

          
    };



    myCB.onRelease = function (when=context.currentTime){
      faustNode.setParamValue("/karplus/gate", 0)
    };

    myCB.onStop = function(val=0){
      faustNode.setParamValue("/karplus/gate", 0)
    };

    var cleanUp=function(val){
    }


  //return myInterface; 
  return new Promise((resolve, reject) => { buildGraph().then(()=>{
      resolve(myInterface);
    });
  });
}
