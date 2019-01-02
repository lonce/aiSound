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
import envGain from '../aisComponents/EnvGain2.js'

export default function (context=audioCtx) {

    var graph = null,

	sm={
		buffLoaded : false,
		soundBuff : context.createBuffer(2,2,44100),
		//m_soundUrl : "https://animatedsoundworks.com/jsaResources/sounds/BeingRural22k.mp3"
		//m_soundUrl : "https://freesound.org/people/YleArkisto/sounds/368673/"
		m_soundUrl : "audioResources/BeingRural22k.mp3"
	}

	var m_attackDur = 0.01; // avoid clicks
    var m_releaseDur = .25;

	var envGainNode = envGain(m_attackDur, m_releaseDur, function(val=0){
      cleanUp();
    });

    var graphPlayingP = false;

	var sourceNode=null;

    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: envGainNode});
	myInterface.setAboutText("Simple audio file player.");
    myInterface.setName("afile")

	var buildGraph = function(){
		sourceNode = context.createBufferSource();
		sourceNode.buffer = sm.soundBuff;
		sourceNode.loop = true;
        // connect newly-created nodes
		sourceNode.connect(envGainNode);
	};

	function onLoadAudioResource(b){
		sm.soundBuff = b;
		sm.buffLoaded = true;
		console.log("Buffer Loaded!");
	}


	myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
		envGainNode.play(startVal, releaseVal);  

		// If already releasing, cancel release
        if (graphPlayingP==true){
          return; // don't build another graph
        }

		if (sm.buffLoaded) {

			sourceNode && sourceNode.disconnect(0); // in case it wasn't stop()ed, we still want to get rid of it before rebuilding.
			sourceNode=null;

			buildGraph();

			// Set any parameters for the new node(s)
			// then
			sourceNode.start(startVal);

			graphPlayingP = true;
			if (releaseVal != null){
			  myInterface.release(releaseVal);
			}

		} else {
			console.log("Buffer NOT loaded yet!");
			alert("Press load and wait!");
		}
	};


    myCB.onRelease = function (when=context.currentTime, dur=m_releaseDur){
      	envGainNode.release(when);
    };

    // called when this model gets a stop(), but not if EnvGainNode release-decays to stop.
 	myCB.onStop = function(val=0){
 		envGainNode.stop(val);
 		cleanUp(val);
    };


    var cleanUp=function(val){
        sourceNode.stop(val);
        graphPlayingP=false;
    }

	// expose the envGainNode parameter directly
    myInterface.registerChildParam(envGainNode, "Gain");


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
