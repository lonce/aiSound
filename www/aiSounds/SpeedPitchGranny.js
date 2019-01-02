/* ---------------------------------------------------------------------------------------
This aisSound Code is distributed under LGPL 3
Copyright (C) 2018 National University of Singapore
Inquiries: director@anclab.org

This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation; either version 3 of the License, or any later version.
This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNULesser General Public License for more details.
You should have received a copy of the GNU General Public License and GNU Lesser General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>
------------------------------------------------------------------------------------------*/

import {audioCtx} from '../aisCore/baseSoundModel.js';
import envGain from '../aisComponents/EnvGain2.js'
import makePhasor from '../aisOps/eventPhasor.js'
import {raisedCosine} from '../aisCore/utils.js'

export default function (context=audioCtx) {

    var graph = null;
    var ephasor = makePhasor(audioCtx, .05, .15); // triggers grains

    var m_grainRate=200; // frequency of grain generation
    var m_grainStep=1/m_grainRate;  // seconds
    var m_grainDuration=2*m_grainStep;  // seconds
    

    var m_pitch=0; // devaiation from normal rate, in octaves

    var m_pitchVariation=0; // random spreadd on eaither sie of center, units are octaves
    var m_stepVariation=0; // random spread on eaither sie of center, units are % of file (or loop) length
   
    var grainPosition=0; // seconds

    //var m_loopPosition=0; // loop start, in seconds 
    //var m_loopLength; // will initialize to file length whenever it is set. 

    var raisedCos=raisedCosine(2,20); // for grain envelopes; 50% overlap gives original sound

	var sm={
		buffLoaded : false,
		soundBuff : context.createBuffer(2,2,44100),
		//m_soundUrl : "https://animatedsoundworks.com/jsaResources/sounds/BeingRural22k.mp3"
		//m_soundUrl : "https://freesound.org/people/YleArkisto/sounds/368673/"
		m_soundUrl : "audioResources/BeingRural22k.mp3"
	};

	// for overall sound model (not grains)
	var m_attackDur = 0.05; // avoid clicks
    var m_releaseDur = .5;
	var envGainNode = envGain(m_attackDur, m_releaseDur, function(val=0){
		// wait for envelope to end before cleaning up nodes
      	cleanUp();
    });

    var graphPlayingP = false;

    var myCB = {};
    var myInterface = context.createBaseSound(context, {node: myCB,  output: envGainNode});
	myInterface.setAboutText("Granularize an audiofile");
    myInterface.setName("Granularize")

	var buildGraph = function(){
		// noting to do for granny
	};

	function onLoadAudioResource(b){
		sm.soundBuff = b;
		sm.buffLoaded = true;
		console.log("Buffer Loaded!");
	}


	myCB.onPlay = function(startVal=context.currentTime, releaseVal=null){
		envGainNode.play(startVal, releaseVal);  
		ephasor.setFreq(m_grainRate)

		// If already releasing, cancel release
        if (graphPlayingP==true){
          return; // don't build another graph
        }

		if (sm.buffLoaded) {
			let pbrate;

			buildGraph();

			// let her rip -----------------------------------------------
			let gcounter=0;
			grainPosition=0;
			let grainPositionPerturbed; // computed based on grainPosition & m_setpVariation

			ephasor.start(function(t){
  				gcounter=(gcounter+1)

  				// create new grain
				const gsource = context.createBufferSource();
    			gsource.buffer = sm.soundBuff;
    			//pitchRate = Math.pow(2.0, m_pitch+m_rpitch*(2*Math.random()-1));
    			pbrate=Math.pow(2.0, m_pitch);
    			//console.log("rate factor is " + pbrate)
				gsource.playbackRate.value = Math.pow(2.0, m_pitch+m_pitchVariation*(2*Math.random()-1));
   				
   				// update position and calcuate offset
    			grainPosition = (grainPosition+m_grainStep);
    			if  (grainPosition > sm.soundBuff.duration){ grainPosition = grainPosition-sm.soundBuff.duration;}
    			if  (grainPosition < 0){ grainPosition = grainPosition+sm.soundBuff.duration;}

    			grainPositionPerturbed = grainPosition+m_stepVariation*(2*Math.random()-1)
    			if  (grainPositionPerturbed > sm.soundBuff.duration){ grainPositionPerturbed = grainPositionPerturbed-sm.soundBuff.duration;}
    			if  (grainPositionPerturbed < 0){ grainPositionPerturbed = grainPositionPerturbed+sm.soundBuff.duration;}

    			gsource.start(t, grainPositionPerturbed, pbrate*m_grainDuration);  // duration is *for source at rate 1*!! - so compensate here to get full length grain

    			// create the envelope 
    			const ggain = context.createGain();
    			gsource.connect(ggain);
    			ggain.connect(envGainNode);
    			ggain.gain.setValueCurveAtTime(raisedCos, t, m_grainDuration);
    			//ggain.gain.setValueAtTime(1, t);


    			// disconnect the gain node for g-collection
    			setTimeout(() => {
      				ggain.disconnect();
    			}, 1000*(t-context.currentTime+m_grainDuration));

  			});

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
        ephasor.stop();
        graphPlayingP=false;
    }



	myInterface.registerParam(
		"Sound URL","url", {"val": sm.m_soundUrl},
		function (i_val) {
			sm.m_soundUrl = i_val;
			sm.buffLoaded = false;
			myInterface.loadAudioResource(sm.m_soundUrl, onLoadAudioResource);
		}
	);


	myInterface.registerParam(
		"Pitch",
		"range",
		{
			"min": -2.0,
			"max": 2.0,
			"val": m_pitch
		},
		function (i_val) {
			m_pitch = i_val;
			//pitchRate = Math.pow(2.0, m_pitch+m_rpitch*(2*Math.random()-1));
		}
	);



		myInterface.registerParam(
		"Step",
		"range",
		{
			"min": -1.0,
			"max": 1.0,
			"val": m_grainStep
		},
		function (i_val) {
			m_grainStep = i_val;
			m_grainDuration=2*m_grainStep;
			//pitchRate = Math.pow(2.0, m_pitch+m_rpitch*(2*Math.random()-1));
		}
	);


	// expose the envGainNode parameter directly
    myInterface.registerChildParam(envGainNode, "Gain");



	//all sound factories must return a promise
	// put the asynchronous stuff in here
	//return new Promise((resolve, reject) => { resolve(myInterface);});
	return new Promise((resolve, reject) => {
		myInterface.loadAudioResource(sm.m_soundUrl, onLoadAudioResource).then(()=>{
			resolve(myInterface);
		});
	});

};
