import makeFM from '../aiSounds/fm.js';
import {audioCtx} from '../aisCore/baseSoundModel.js';
//This sound CONTROLS others (each connected to the conext.destination)

export default function (context=audioCtx) {
	var myFM;
  makeFM().then(s=>{myFM=s;});
  
  var m_baseFreq=330;
  var m_Ratio=.01;
  var m_modIndex=10;
  var m_gain=.75;

  var m_branchString="010101"

  var myCB = {};
  var myInterface = context.createBaseSound(context, {node: myCB});
  myInterface.setAboutText("Tree structured FM carrier/modulator ration navigation");
  myInterface.setName("RationalFM")

  myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
    myFM.play(startVal, releaseVal)
  }

  myCB.onRelease = function (when=context.currentTime){
    myFM.release(when)
  }

  myCB.onStop = function(val=0){
    myFM.stop(val);
  }

    
  myInterface.registerParam(
      "Carrier Frequency", "range",
      {"min": 220, "max": 880, "val": m_baseFreq},
      function (i_val) {
        m_baseFreq = i_val;
        // mitigate zipper noise
        myFM.setParam("Carrier Frequency",m_baseFreq)
        myFM.setParam("Modulation Frequency", m_baseFreq*m_Ratio)
      }
  );

  var str2rat=function(s){
    var num=1;
    var den=1;
    for(let i=0;i<s.length;i++){
      if (s[i]==0){
        den=num+den;
      }else{
        num=num+den;
      }
    }
    console.log("num = " + num + ", den = " + den)
    return num/den;
  }

  myInterface.registerParam(
      "Branch Stiring", "string",
      {"val": m_branchString},
      function (i_val) {
        m_branchString = i_val;
        // mitigate zipper noise
        m_Ratio=str2rat(m_branchString);

        myFM.setParam("Carrier Frequency",m_baseFreq)
        myFM.setParam("Modulation Frequency", m_baseFreq*m_Ratio)
      }
  );

  myInterface.registerParam(
      "Modulation Index", "range",
      {"min": 0, "max": 400, "val": m_modIndex},
      function (i_val) {
        m_modIndex = i_val;
        // mitigate zipper noise
        myFM.setParam("Modulation Index",m_modIndex)

      }
  );

  myInterface.registerParam(
      "Gain", "range",
      {"min": 0, "max": 1, "val": m_gain},
      function (i_val) {
        m_gain = i_val;
        // mitigate zipper noise
        myFM.setParam("Gain", m_gain)

      }
  );

  //return myInterface;
  return new Promise((resolve, reject) => { resolve(myInterface);});
}