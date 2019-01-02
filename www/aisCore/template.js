import '../aisCore/baseSoundModel.js';


export default function (context) {


    var graph = null,
    graphPlayingP = false,
    // common ADSR and Gain stuff
    m_attackDur = 0.01, // avoid clicks
    m_decayDur = .05,
    decayTimeout=null, //setTimeOut id
    stopTimeout=null, //setTimeOut id


    // persistent nodes
    envGainNode = context.createGain(),
    overallGain = context.createGain(),
    m_Gain=.75;

    //initialization
    envGainNode.value=1.0;


    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: overallGain});

    // This is the "output" for sounds that build on this template
    myInterface.getEnvGainNode=function(){
      return envGainNode;
    }

//----------------------------------------------------------------------------

// Replace this code to use this template
  // nodes requiring rebuilding on ach play
    //var oscNode = null
    //var m_Freq=440;

    myInterface.myPlay=function(startVal=context.currentTime, releaseVal=null){
      console.log("Overide myPlay=function(startVal=context.currentTime, releaseVal=null){}")
      //oscNode.frequency.setValueAtTime(m_Freq, startVal); 
      //oscNode.start(startVal);
    };

    myInterface.myStop=function(val){
      console.log("Overide myStop=function(val){}")
      //oscNode.stop(val);
    };
    
    myInterface.myREBuild=function(){
      console.log("Overide myREBuild=function(){}")
      //oscNode = context.createOscillator();
      //oscNode.connect(envGainNode);
    };

    // add any parameter you need.
    /*
    myInterface.registerParam(
        "Frequency", "range",
        {"min": 220, "max": 880, "val": m_Freq},

        function (i_val) {

          m_Freq = i_val;
          // mitigate zipper noise
          if (oscNode != undefined) {
            //oscNode.frequency.setValueAtTime(m_Freq, context.currentTime);
            oscNode.frequency.cancelScheduledValues(0);
            oscNode.frequency.linearRampToValueAtTime(m_Freq,context.currentTime+.01);
          }
        }

    );
    */

//----------------------------------------------------------------------------

    myInterface.registerParam(
        "Gain", "range",
        {"min": 0, "max": 1, "val": m_Gain},

        function (i_val) {
          m_Gain = i_val;
          // mitigate zipper noise
          overallGain.gain.cancelScheduledValues(0);
          overallGain.gain.linearRampToValueAtTime(m_Gain,context.currentTime+.01);
        }
    );


    // PUBLIC INTERFACE METHOD
    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
        if (graphPlayingP==true){
          if (decayTimeout) {
            clearTimeout(decayTimeout)
            decayTimeout=null;
          }
          if (stopTimeout) {
            clearTimeout(stopTimeout)
            this.stopTimeout=null;
          }
          envGainNode.gain.cancelScheduledValues(startVal);
          envGainNode.gain.linearRampToValueAtTime(1, startVal + m_attackDur);      
          return; // don't build another graph
        }

        buildGraph().then(()=>{

          envGainNode.gain.setValueAtTime(0, startVal );
          envGainNode.gain.linearRampToValueAtTime(1, startVal + m_attackDur);      

          myInterface.myPlay(startVal, releaseVal)

          graphPlayingP = true;
          if (releaseVal != null){
              myInterface.release(releaseVal);
          }
          
        })
    };

    // private helper, decay now
    var decay = function (dur=m_decayDur){
      envGainNode.gain.linearRampToValueAtTime(0, context.currentTime + dur);      
      if (dur>0){

        stopTimeout=setTimeout(function(){myInterface.stop(0)},1000*dur)
      } else{
        myInterface.stop();
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
      //console.log("stop")
      if (graphPlayingP){

          myInterface.myStop(val);

          graphPlayingP=false;
          overallGain.disconnect();
        }
    };

    var buildGraph = function(){
      //Promise is only necessary if we are loading files as part of the model
      return new Promise((resolve, reject) => {
        
        myInterface.myREBuild();

        envGainNode.connect(overallGain);
        overallGain.connect(context.destination);

        resolve();
      });
    }; // buildGraph


  return myInterface; 
}
