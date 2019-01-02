/**
* Creates a phasor that can be used to time period events even period is changing 
* 
* 
*
* @module jsaEvenPhasor.js
* @main jsaEvenPhasor.js
*
* @param audioCtx
* @param clockInterval - the rate at which check for upcoming events
* @param genAheadInterval - how far beyond the next tick we look for and report events 
*     (if this is too short, then soundmodels may not have suffient time to build their graphs and play at their desired time)
*/

import {audioCtx, BIGNUM} from '../aisCore/baseSoundModel.js';
import linkedList from './linkedList.js';

// fix the mode to be mathematical : always been 0 and n
const mod = (x, n) => (x % n + n) % n
const epsilon=.0000001

console.log("audioCtx is " + audioCtx)
export default function (context=audioCtx, clockInterval=.05, genAheadInterval=.08) {

	var m_freq = 1; // seconds
	var m_currentPhase = 0; //[0,1]
	var m_currentTime=0; 
	var m_runningP=false;

	var m_pausedPhase=null; 

	var m_clockIntervalMS = clockInterval*1000;
	var m_genAheadInterval = genAheadInterval

	var myInterface = {};

	var iList= new linkedList;
	var m_currentItemNode=null;


	myInterface.addEvent = function(phase, cb, info={}){
		var newItem = {
			phase: phase,
			cb:cb,
			info: info
		}
		if (m_currentItemNode==null) {
			m_currentItemNode= iList.insertPhase(newItem);
		}
		else{
			iList.insertPhase(newItem);
		}
	}

	myInterface.clearEvents = function(){
		iList= new linkedList;
		m_currentItemNode=null;
	}

	myInterface.printEvents=function(){
		console.log("iList  : ")
		var count=0;
		iList.each(function(data){ console.log("count " + count + ", phase = " + data.phase); count++; })
	}
	/**
	* Sets the phaser to a specific phase
	* @method setPhase
	* @param {Number} phase in [0,1] 
	*/
	myInterface.setPhase = function (i_p) {
		m_currentPhase = i_p;
	};

	/**
	* Get the current phse
	* @method getPhase
	* @param {Number} phase in [0,1] 
	*/
	myInterface.getPhase = function () {
		return m_currentPhase;
	};

	/**
	* Sets the frequency that the phase will move (revolutions per second)
	* @method {Number} setFreq
	*/
	myInterface.setFreq = function (i_f) {
		m_freq = i_f;
		/* This pausing prevents the "build up" of events when the phasor isn't moving,
			while not forgetting the phase for proper timing of the next event */
		if (m_pausedPhase!=null){ // we've been pause, and now were moving
			console.log("unpause");
			myInterface.advanceToTime(audioCtx.currentTime);
			myInterface.setPhase(m_pausedPhase);
			m_pausedPhase=null;
		}
		if (i_f==0){ // pause
			console.log("pause")
			m_pausedPhase=m_currentPhase;
		}
	};

	/**
	* Advance the time rotating the phasor accorording to its frequency.
	* @method advance
	* @param {Number} interval of time to advance 
	* @return {Number} current phase
	*/
	myInterface.advance = function (i_t) {
		m_currentPhase = (m_currentPhase + i_t * m_freq) % 1;
		return m_currentPhase;
	};

	/**
	* Set the time of the phasor rotating if from its current position as necessary
	* @method advanceToTime
	* @param {Number} The time to advance the phasor to. 
	* @return {Number} current phase
	*/
	myInterface.advanceToTime = function (i_t) {
		var advance = i_t - m_currentTime;
		m_currentPhase = (m_currentPhase + advance * m_freq) % 1;
		m_currentTime = i_t;
		return m_currentPhase;
	};

	/**
	* Advances the time to that of next zero phase (which is when it "ticks")
	* @method advanceToTick
	*/
	myInterface.advanceToTick = function () {
		m_currentTime += (1 - m_currentPhase) / m_freq;
		m_currentPhase = 0//0.00000000000000001;	// Don't want 0 as a nextTickTime
	};

	/**
	* Advances the time to that of next zero phase (which is when it "ticks")
	* @method nextTickTime
	* @return {Number} time in sseconds
	*/
	myInterface.nextTickTime = function () {
		if (m_freq === 0) {
			return BIGNUM;
		}
		return m_currentTime + (1 - m_currentPhase) / m_freq;
	};

	/**
	* Get the time between now and the next tick
	* @method timeToTick
	* @return {Number} the amount of time until next tick
	*/
	myInterface.timeToTick = function () {
		if (m_freq === 0) {
			return BIGNUM;
		}
		return m_currentTime + (1 - m_currentPhase) / m_freq;
	};

	myInterface.eventNextTime = function(ev){
		if (m_freq === 0) {
			return BIGNUM;
		}
		// want wrap in (0, 1]
		let wrap=mod(ev.phase-m_currentPhase, 1)
		return (wrap<epsilon) ? m_currentTime + 1/m_freq : m_currentTime + wrap/m_freq
	}


	var bugLastTime=0
	var bugPhase=0
	var tickCount=0

	myInterface.run = function () {
		tickCount++;
		if (! m_runningP) {return} // stop scheduling timer callbacks

		let lastPlayTime=null;

		if (m_currentItemNode != null) {
			let nextEVENTTime=myInterface.eventNextTime(m_currentItemNode.data);
			let now = audioCtx.currentTime;

			let n=iList.length;
			while (n-- && (nextEVENTTime < now+m_genAheadInterval)){
				//console.log("**" + "Tickcount " + tickCount + " and n= " + n + ":    phasor calls for event at time " + nextEVENTTime)
				m_currentItemNode.data.cb(nextEVENTTime, m_currentItemNode.data.info)
				lastPlayTime=nextEVENTTime;

				if (bugLastTime==nextEVENTTime){
					//console.log(": !!!!   two events same time (" + bugLastTime + ") !!!!!!!!!")
				}
				bugLastTime=lastPlayTime;

			    m_currentItemNode=m_currentItemNode.next;
			    nextEVENTTime=myInterface.eventNextTime(m_currentItemNode.data);
			}
			if (lastPlayTime != null){
				bugPhase=myInterface.advanceToTime(lastPlayTime);  // the time of the event you just played
				//console.log("advance time to " + m_currentTime + ", and phase to " + bugPhase)

			} else{
				//myInterface.advanceToTime(audioCtx.currentTime); dont do this!
				//console.log("..")
			}
		}

		setTimeout(function(){myInterface.run()}, 
			m_clockIntervalMS);

	};



	myInterface.start = function (freq=null, ph=null){
		if (! m_runningP){
			m_currentTime= audioCtx.currentTime;
			m_freq = freq || m_freq; // seconds
			m_currentPhase = ph || m_currentPhase; //[0,1]
			m_runningP=true;
			myInterface.run();
		}
	}

	myInterface.stop = function(){
		m_runningP=false;
	}

	return myInterface;
};