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
    m_fundamentalFrequency=261,
    m_noteNumber=60,
    m_numComponents=10,
    m_harmStretch=1, // octaves
    m_noteStretch=1,
    k_refFreq=261,
    k_refNoteNumber=60,

    k_maxStretch=1/12,


    // common ADSR and Gain stuff
    m_attackDur = .02, // avoid clicks
    m_decayDur = .3,

    decayTimeout=null, //setTimeOut id
    stopTimeout=null, //setTimeOut id

    // nodes requiring rebuilding on each play
    m_ComponentNodes = [],
    m_ComponentFreqs = [],
    m_ComponentAmps = [],

    m_oscgain = context.createGain(),


    // persistent nodes  
    envGainNode = envGain(m_attackDur, m_decayDur, function(val=0){
      cleanUp();
    });
    m_oscgain.gain.value = .05;
    m_oscgain.connect(envGainNode);

    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: envGainNode});
    myInterface.setAboutText("trying a compositional as EnvGain");
    myInterface.setName("Stretched Harmonics")

    var setComponents=function(){  // uses global param values 
       let fundamental = k_refFreq*Math.pow(2, m_noteStretch*(m_noteNumber-k_refNoteNumber)/12)
        m_ComponentNodes[0].frequency.setValueAtTime(fundamental, context.currentTime);
        for(let i=1;i<m_numComponents;i++){
          let freq = fundamental*Math.pow(2, m_harmStretch*Math.log2(i))
          m_ComponentNodes[i].frequency.setValueAtTime(freq, context.currentTime);
        }
    }

    myInterface.registerParam(
        "Note Number", "range",
        {"min": 48, "max": 72, "val": m_noteNumber},

        function (i_val) {
          m_noteNumber = i_val;
          //console.log("note num is " + m_noteNumber)
          if (m_ComponentNodes[0] != undefined) {
            setComponents()
          }
        }, true // integer parameter - rounds floats to nearest. Need to make this a type or something
    );

    myInterface.registerParam(
        "Note Stretch", "range",
        {"min": 1-k_maxStretch, "max": 1+k_maxStretch, "val": m_noteStretch},

        function (i_val) {
          m_noteStretch = i_val;
          if (m_ComponentNodes[0] != undefined) {
           setComponents()
          }
        }
    );

    myInterface.registerParam(
        "Harmonic Stretch", "range",
        {"min": 1-k_maxStretch, "max": 1+k_maxStretch, "val": m_harmStretch},

        function (i_val) {
          m_harmStretch = i_val;
          if (m_ComponentNodes[0] != undefined) {
           setComponents()
          }
        }
    );

    // expose the envGainNode parameter directly
    myInterface.registerChildParam(envGainNode, "Gain");

    var buildGraph = function(){
      //Promise is only necessary if we are loading files as part of the model
      return new Promise((resolve, reject) => {
        
        for(let i=0;i<m_numComponents;i++){
          m_ComponentNodes[i] = context.createOscillator();       
          m_ComponentNodes[i].connect(m_oscgain);
        }

        resolve();
      });
    }; 
    
    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
        envGainNode.play(startVal, releaseVal);  

        // If already releasing, cancel release
        if (myInterface.isPlaying()){
          console.log("Stretched: cancel timeouts")
          if (decayTimeout) {
            console.log("Stretched: cancel decayTimeout")
            clearTimeout(decayTimeout)
            decayTimeout=null;
          }
          if (stopTimeout) {
            console.log("Stretched: cancel stopTimeout")
            clearTimeout(stopTimeout)
            stopTimeout=null;
          }

          return; // don't build another graph
        }  

        // (re)build throwaway nodes *and* initialize their value*
        buildGraph().then(()=>{

         let fundamental = k_refFreq*Math.pow(2, m_noteStretch*(m_noteNumber-k_refNoteNumber)/12)
          m_ComponentNodes[0].frequency.setValueAtTime(fundamental, context.currentTime);
          for(let i=1;i<m_numComponents;i++){
            let freq = fundamental*Math.pow(2, m_harmStretch*Math.log2(i))
            m_ComponentNodes[i].frequency.setValueAtTime(freq, context.currentTime);
          }
     
          for(let i=0;i<m_numComponents;i++){
            m_ComponentNodes[i].start(startVal);
          }

          if (releaseVal != null){
              myInterface.release(releaseVal);
              console.log("Stretched: calling release("+releaseVal+")");
          }
          
        })
    };

    // private helper, decay now
    var decay = function (dur=m_decayDur){
      //envGainNode.gain.linearRampToValueAtTime(0, context.currentTime + dur);   
      if (dur>0){
        stopTimeout=setTimeout(function(){
          if (stopTimeout != null){
             
            myInterface.stop(0);
          }
        },1000*dur)
      } else{
        myInterface.stop();
      }
      
    };

    myCB.onRelease = function (when=context.currentTime, dur=m_decayDur){
      console.log("stretched: call envgain reselease")
      envGainNode.release(when);
      
      if (when > context.currentTime){
        decayTimeout=setTimeout(function(){
          if (decayTimeout !=null){
            decay(dur)
          }
        }, 1000*(when-context.currentTime))
      } else{
        decay(dur)
      }
      
    };

    myCB.onStop = function(val=0){
      
      if (myInterface.isPlaying()){
            console.log("stretched onStop: call envgain stop")
            envGainNode.stop(val);

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
        for(let i=0;i<m_numComponents;i++){
            m_ComponentNodes[i].stop(val);
          }
    }



  //return myInterface; 
  return new Promise((resolve, reject) => { resolve(myInterface);});
}
