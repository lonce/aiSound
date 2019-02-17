import {audioCtx} from '../aisCore/baseSoundModel.js';

export default function (attackDur=null, decayDur=null, finishedCB=null, context=audioCtx) {

    var graph = null,

    // common ADSR and Gain stuff
    m_attackDur = attackDur || 0.01, // avoid clicks
    m_releaseDur = decayDur || .05,
    m_attackWhilePlayingDur = m_attackDur,// .01,

    decayTimeout=null, //setTimeOut id
    stopTimeout=null, //setTimeOut id

    asrStage=0, // 0: not playing, 1: attacking or sustaining, no plans for decay, 2: sustain, planned decay, 4: in decay (planned stop)

    // persistent
    inputGain=context.createGain(),
    envGainNode = context.createGain(),
    overallGain = context.createGain(),
    m_Gain=.5;


    //initialization
    //envGainNode.value=m_Gain;
    inputGain.connect(envGainNode)
    envGainNode.connect(overallGain);

    var myCB = {};
    var myModel = context.createBaseSound(context, {node: myCB,  input: inputGain, output: overallGain});
    myModel.setAboutText("EnvGain for exploitation");
    myModel.setName("EnvGain");

    myModel.registerParam(
            "Attack", "range",
            {"min": 0, "max": 1, "val": m_attackDur},

            function (i_val) {
              m_attackDur = i_val;
            }
        );

    myModel.registerParam(
            "Release", "range",
            {"min": 0, "max": 2.5, "val": m_releaseDur},

            function (i_val) {
              m_releaseDur = i_val;

            }
        );


    myModel.registerParam(
        "Gain", "range",
        {"min": 0, "max": 1, "val": m_Gain},

        function (i_val) {
          m_Gain = i_val;
          //console.log("seetting overall gain to " + m_Gain)
          overallGain.gain.setValueAtTime(m_Gain,context.currentTime);

        }
    );

    var buildGraph = function(){
      //Promise is only necessary if we are loading files as part of the model
      return new Promise((resolve, reject) => {
        
        /*Fuckin hell. I have to create a new envGainNode each time because 
        envGainNode.gain.value=0;
        envGainNode.gain.linearRampToValueAtTime(1, startVal + m_attackDur);  
        doesn't work on the old one.
        */         

          if (envGainNode) {
            inputGain.disconnect(envGainNode);
            envGainNode.disconnect();
          }
          
          envGainNode = context.createGain(),
          inputGain.connect(envGainNode)
          envGainNode.connect(overallGain);
        


        resolve();
      });
    }; // buildGraph


    // PUBLIC INTERFACE METHOD
    myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
        //console.log("EnvGain ++++++++++++++++++++")
        
        // clean up any scheduled timeouts
        if (decayTimeout) {
          console.log(`envGain onPlay, clear decay timeout`)
          clearTimeout(decayTimeout)
          decayTimeout=null;
        }
        if (stopTimeout) {
          console.log(`envGain onPlay, clear stop timeout`)
          clearTimeout(stopTimeout)
          stopTimeout=null;
        }

        overallGain.gain.setValueAtTime(m_Gain,context.currentTime);

        // If your playing, start again without rebuilding graph
        if (myModel.isPlaying(startVal)==true){
          //console.log("EnvGain - continue from playing at " + startVal)
          envGainNode.gain.cancelAndHoldAtTime(startVal);
          envGainNode.gain.linearRampToValueAtTime(1, startVal + m_attackWhilePlayingDur);   

          asrStage=1;   
          return; // don't build another graph
        }

        // Not playing already, so start from scratch by rebuilding the graph and initializing the values
        buildGraph().then(()=>{
          //console.log("EnvGain - built new graph")

          //envGainNode.gain.cancelScheduledValues(startVal);
          envGainNode.gain.setValueAtTime(0,startVal );
          envGainNode.gain.linearRampToValueAtTime(1, startVal + m_attackDur);      

          //graphPlayingP = true;
          asrStage=1;

          if (releaseVal != null){
              myModel.release(releaseVal);
          }

        })
    };

    // private helper, decay *now* over this duration provided 
    var decay = function (dur=m_releaseDur){
      //console.log("EnvGain decay at time " + context.currentTime);
      // ramp
      envGainNode.gain.cancelAndHoldAtTime(0);
      envGainNode.gain.linearRampToValueAtTime(0, context.currentTime + dur);  
      asrStage=3;
      // stop at end of ramp    
      if (dur>0){
        stopTimeout=setTimeout(function(){
          //console.log(`<----- envgain decay stop at ${context.currentTime}`)
          myModel.stop(0)},1000*dur)
      } else{
        console.log("env gain call top from decay")
        console.log("EnvGain decay call stop IMMEdiately")
        myModel.stop();
      }

      asrStage=3;
      
    };



    myCB.onRelease = function (when=context.currentTime, dur=m_releaseDur){
      //console.log(`envGain onRelease,  dur=${dur}`)

      // clean up any scheduled timeouts
      if (decayTimeout) {
        clearTimeout(decayTimeout)
        decayTimeout=null;
      }
      if (stopTimeout) {
        //console.log(`envGain onRelease, clear stop timeout`)
        clearTimeout(stopTimeout)
        stopTimeout=null;
      }

      if (myModel.isPlaying(when)==true){

       if (when > context.currentTime){
          asrStage=2;
          if (typeof when == 'undefined') {
            console.log(`EnvGain onRelease, sumpthin went wrong with when = ${when}`)
          } 
          //console.log(`envGain onRelease, now=${context.currentTime}, will start decay at ${when}`)
          decayTimeout=setTimeout(function(){
            //console.log(`envGain time is now=${context.currentTime}, and will call decay`)
            if (decayTimeout !=null){
              decay(dur);
            }
          }, 1000*(when-context.currentTime))
        } else{
          //console.log(`envGain onRelease, call decay NOW`)
          decay(dur)
        }
      }
    };

    myCB.onStop = function(val=0){
        asrStage=0;

        if (decayTimeout) {
          clearTimeout(decayTimeout)
          decayTimeout=null;
        }
        if (stopTimeout) {
          clearTimeout(stopTimeout)
          stopTimeout=null;
        }

        finishedCB && finishedCB(val);

  }



  //sndModel.init();
  return myModel; 
}
