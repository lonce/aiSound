import {audioCtx} from '../aisCore/baseSoundModel.js';


export default function (attackDur=.01, decayDur=.05, context=audioCtx, options={}) {

   // var attackDur = options.hasOwnProperty('attackDur') ? options.attackDur :  .01;
    //var decayDur=options.hasOwnProperty('decayDur') ? options.decayDur :  .05;

    var graph = null,

    waveType=['sine', 'square', 'sawtooth', 'triangle'],

    // internal params
    m_freq=0, //modulation frequency
    m_modIndex=0,
    m_carFreq=440,
    m_carType=0,

    // common ADSR and Gain stuff
    m_attackDur = attackDur || 0.01, // avoid clicks
    m_decayDur = decayDur || .05,

    decayTimeout=null, //setTimeOut id
    stopTimeout=null, //setTimeOut id



    // nodes requiring rebuilding on ach play
    oscModNode = null,
    m_CarrierNode = null,

    // persistent nodes
    modIndexNode = context.createGain(),   //mod index
   
    envGainNode = context.createGain(),
  
    overallGain = context.createGain(),
    m_Gain=.5;


    //initialization
    envGainNode.value=.75;

    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: overallGain});
    myInterface.setAboutText("Simple FM synth");
    myInterface.setName("fm")


    myInterface.registerParam(
        "Modulation Frequency", "range",
        {"min": 0, "max": 400, "val": m_freq},

        function (i_val) {
          m_freq = i_val;
          if (oscModNode != undefined) {
              oscModNode.frequency.setValueAtTime(m_freq,context.currentTime);
            }
        }
    );

    myInterface.registerParam(
        "Carrier Frequency", "range",
        {"min": 0, "max": 2000, "val": m_carFreq},

        function (i_val) {
              m_carFreq = i_val;
              if (m_CarrierNode != undefined) {
              m_CarrierNode.frequency.setValueAtTime(m_carFreq,context.currentTime);
            }
        }
    );

    myInterface.registerParam(
        "Modulation Index", "range",
        {"min": 0, "max": 400, "val": m_modIndex},

        function (i_val) {
          m_modIndex = i_val;
          if (modIndexNode != undefined) {
              modIndexNode.gain.setValueAtTime(m_modIndex,context.currentTime)
            }
        }
    );

    myInterface.registerParam(
        "Gain", "range",
        {"min": 0, "max": 1, "val": m_Gain},

        function (i_val) {
          m_Gain = i_val;
          overallGain.gain.setValueAtTime(m_Gain,context.currentTime);

        }
    );

    // PUBLIC INTERFACE METHOD
    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
      //console.log("FM - on play ----------------")
      if(myInterface.isPlaying(startVal)){
        console.log("FM - play wihile playing!!!!!!!!!!")

        if (decayTimeout) {
          clearTimeout(decayTimeout)
          decayTimeout=null;
        }
        if (stopTimeout) {
          clearTimeout(stopTimeout)
          this.stopTimeout=null;
        }
        //envGainNode.gain.cancelScheduledValues(startVal);
        envGainNode.gain.cancelAndHoldAtTime(startVal);
        envGainNode.gain.linearRampToValueAtTime(1, startVal + m_attackDur);     

        myInterface.release(releaseVal); 
        return; // don't build another graph
      }


      buildGraph().then(()=>{
        oscModNode.frequency.setValueAtTime(m_freq, startVal); 

        modIndexNode.gain.setValueAtTime(m_modIndex,startVal),

        m_CarrierNode.type=waveType[m_carType]; 
        m_CarrierNode.frequency.setValueAtTime(m_carFreq,startVal);


        envGainNode.gain.setValueAtTime(0, startVal );
        envGainNode.gain.linearRampToValueAtTime(1, startVal + m_attackDur);      


        oscModNode.start(startVal);
        m_CarrierNode.start(startVal);

        if (releaseVal != null){
            myInterface.release(releaseVal);
        }
        
      })
    };

    // private helper, decay now
    var decay = function (dur=m_decayDur){
      envGainNode.gain.cancelAndHoldAtTime(0);
      envGainNode.gain.linearRampToValueAtTime(0, context.currentTime + dur);      
      if (dur>0){
        stopTimeout=setTimeout(function(){myInterface.stop(0)},1000*dur)
      } else{
        myInterface.stop(0);
      }
      
    };

    myCB.onRelease = function (when=context.currentTime, dur=m_decayDur){
      if (when > context.currentTime){
        decayTimeout=setTimeout(function(){decay(dur)}, 1000*(when-context.currentTime))
      } else{
        decay(dur)
      }
    };

    myCB.onStop = function(val=0){

      //console.log("OK ::::: FM stopping")
      oscModNode.stop(val);
      m_CarrierNode.stop(val)
      if (decayTimeout) {
        clearTimeout(decayTimeout)
        decayTimeout=null;
      }
      if (stopTimeout) {
        clearTimeout(stopTimeout)
        this.stopTimeout=null;
      }

    };

    var buildGraph = function(){
      //Promise is only necessary if we are loading files as part of the model
      return new Promise((resolve, reject) => {
        
        oscModNode = context.createOscillator();
        oscModNode.connect(modIndexNode);

        m_CarrierNode = context.createOscillator();
        modIndexNode.connect(m_CarrierNode.frequency);  //modIndex node is the frequency input to the carrier
        

        m_CarrierNode.connect(envGainNode);
        envGainNode.connect(overallGain);
        //overallGain.connect(context.destination);

        resolve();
      });
    }; // buildGraph


  //sndModel.init();
  //return myInterface; 
  return new Promise((resolve, reject) => { resolve(myInterface);});
}
