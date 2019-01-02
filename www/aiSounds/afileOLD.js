/* ---------------------------------------------------------------------------------------
This jsaSound Code is distributed under LGPL 3
Copyright (C) 2012 National University of Singapore
Inquiries: director@anclab.org

This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation; either version 3 of the License, or any later version.
This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNULesser General Public License for more details.
You should have received a copy of the GNU General Public License and GNU Lesser General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>
------------------------------------------------------------------------------------------*/

//PARA: config
//		-audioContext
//		bigNum
import {audioCtx} from '../aisCore/baseSoundModel.js';

export default function (context=audioCtx) {

    var graph = null,

	sm={
		buffLoaded : false,
		soundBuff : context.createBuffer(2,2,44100),
		//m_soundUrl : "https://animatedsoundworks.com/jsaResources/sounds/BeingRural22k.mp3"
		//m_soundUrl : "https://freesound.org/people/YleArkisto/sounds/368673/"
		m_soundUrl : "audioResources/BeingRural22k.mp3"
	}


	var m_gain=.75;
	var m_attackDur = 0.01; // avoid clicks
    var m_releaseDur = .25;

    var decayTimeout=null; //setTimeOut id
    var stopTimeout=null; //setTimeOut id


	var envGainNode = context.createGain();
    var overallGain = context.createGain();
    var graphPlayingP = false;

	var sourceNode=null;

    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: overallGain});
	myInterface.setAboutText("Simple audio file player.");
    myInterface.setName("afile")

	// permanent connections
	envGainNode.connect(overallGain);

	var buildGraph = function(){
		sourceNode = context.createBufferSource();
		sourceNode.buffer = sm.soundBuff;
		sourceNode.loop = true;

        envGainNode.value=1.0;
        // connect newly-created nodes
		sourceNode.connect(envGainNode);
        //envGainNode.connect(overallGain);

        //restablish connection to desitnation which was disconnected on stop()
        //overallGain.connect(context.destination);

	};

	function onLoadAudioResource(b){
		sm.soundBuff = b;
		sm.buffLoaded = true;
		console.log("Buffer Loaded!");
	}
	myInterface.loadAudioResource(sm.m_soundUrl, onLoadAudioResource);

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
          //console.log("Now: ${context.currentTime}, ramping to ${startVal + m_attackDur}")
          return; // don't build another graph
        }


		if (sm.buffLoaded) {

			sourceNode && sourceNode.disconnect(0); // in case it wasn't stop()ed, we still want to get rid of it before rebuilding.
			sourceNode=null;

			buildGraph();

			// Set any parameters for the new node(s)
			// then
			sourceNode.start(startVal);

			envGainNode.gain.setValueAtTime(0, startVal );
			envGainNode.gain.linearRampToValueAtTime(1, startVal + m_attackDur);      

			overallGain.gain.setValueAtTime(m_gain, startVal );

			graphPlayingP = true;
			if (releaseVal != null){
			  myInterface.release(releaseVal);
			}

		} else {
			console.log("Buffer NOT loaded yet!");
			//CREATE EXTERNAL CALLBACK HERE!!!
			alert("Press load and wait!");
		}
	};

	myInterface.registerParam(
		"Gain",
		"range",
		{
			"min": 0,
			"max": 2,
			"val": m_gain
		},
		function (i_val) {
			m_gain = i_val;
			overallGain.gain.setValueAtTime(m_gain, context.currentTime );
		}
	);

	myInterface.registerParam(
		"Attack Time",
		"range",
		{
			"min": 0,
			"max": 1,
			"val": m_attackDur
		},
		function (i_val) {
			m_attackDur = parseFloat(i_val);
		}
	);

	myInterface.registerParam(
		"Release Time",
		"range",
		{
			"min": 0,
			"max": 3,
			"val": m_releaseDur
		},
		function (i_val) {
			m_releaseDur = parseFloat(i_val);
		}
	);

	myInterface.registerParam(
		"Sound URL",
		"url",
		{
			"val": sm.m_soundUrl
		},
		function (i_val) {
			sm.m_soundUrl = i_val;
			sm.buffLoaded = false;
			myInterface.loadAudioResource(sm.m_soundUrl, onLoadAudioResource);
		}
	);

    // private helper, decay now
    var decay = function (dur=m_releaseDur){
      envGainNode.gain.linearRampToValueAtTime(0, context.currentTime + dur);      
      if (dur>0){

        stopTimeout=setTimeout(function(){myInterface.stop(0)},1000*dur)
      } else{
        myInterface.stop();
      }
      
    };

    myCB.onRelease = function (when=context.currentTime, dur=m_releaseDur){
      if (when > context.currentTime){
        decayTimeout=setTimeout(function(){decay(dur)}, 1000*(when-context.currentTime))
      } else{
        decay(dur)
      }
    };

    myCB.onStop = function(val=0){
      //console.log("stop")
      if (graphPlayingP){
            console.log("stop")
            sourceNode.stop(val)
            graphPlayingP=false;
            //overallGain.disconnect();
          }
    };


	//all sound factories must return a promise
	// put the asynchronous stuff in here
	//return new Promise((resolve, reject) => { resolve(myInterface);});
	return new Promise((resolve, reject) => {
		myInterface.loadAudioResource(sm.m_soundUrl, onLoadAudioResource).then(()=>{
			console.log("afile resolving with " + myInterface);
			resolve(myInterface);
		});
	});

};
