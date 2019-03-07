/*
This jsaSound Code is distributed under LGPL 3
Copyright (C) 2012 National University of Singapore
Inquiries: director@anclab.org

This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation; either version 3 of the License, or any later version.
This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNULesser General Public License for more details.
You should have received a copy of the GNU General Public License and GNU Lesser General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>
*/
import makeSBox from './sliderBox.js'
import {getParameterByName, QueryStringToJSON} from '../aisCore/utils.js'
import { importModule } from "https://uupaa.github.io/dynamic-import-polyfill/importModule.js"
import sndFactory from 'https://aisound.cloud/aiSounds/HiHat.js'


var soundSelector = document.getElementById("soundSelector");
var openButt = document.getElementById("openButt");

var clickSnd;
sndFactory().then((newsnd) => {
  clickSnd=newsnd; 
  clickSnd.setParam("Gain", .5);
});

var slist=[]

var winlocation={x: 50, y: 50, update: function(){
	//winlocation.x=(winlocation.x+80)%(screen.width-500) ;
	//winlocation.y=(winlocation.y+50)%(screen.height-600);
	console.log(`new window location: [${winlocation.x},${winlocation.y}]`)
}}

//------------------------------------------------------------
//$.getJSON("/soundList/aisDescriptors", function(data){
function makeRequest (method, url, doneCB) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/soundList/aisDescriptors');
	xhr.onload = function() {
	    if (xhr.status === 200) {
	        //alert('User\'s name is ' + xhr.responseText);
	        doneCB(JSON.parse(xhr.response));
	    }
	    else {
	        alert('Request failed.  Returned status of ' + xhr.status);
	    }
	};
	xhr.send();
}
//------------------------------------------------------------

makeRequest('GET', "/soundList/aisDescriptors", function(data){
	// Create the list of models with desired modelKeys
    for (let i=0; i<data.jsonItems.length;i++){
    	if (window.location.href.includes("local")){
    		// if running locally, get all the sounds
    		slist.push(data.jsonItems[i]);
    	} else{
    		// otherwise, get only the ones ready for prime time
	    	if (data.jsonItems[i].modelKeys.includes("aiSoundDemo")){
	    		slist.push(data.jsonItems[i]);
	    		console.log("got: " + data.jsonItems[i].displayName)
	    	} else{
	    		console.log("not indluding " + data.jsonItems[i].displayName)
	    	}
	    }
    }

    // add display names to selector
	for(let i=0; i<slist.length;i++) {
		var option = document.createElement("option");
		option.text=slist[i].displayName;
		soundSelector.add(option)
	}
	soundSelector.selectedIndex=0;

	soundSelector.addEventListener("input", function(e){
		console.log("selected sound is " + e.target.selectedIndex)
		// Some browsers don't consider this a uwer-initiated event, so window.open gets blocked!
		//loadSoundFromPath(slist[e.target.selectedIndex].fileName);  // open slider box for sound when they are selected
	});

	//import sounds when (and only when) they are chosen
	openButt.addEventListener("mousedown", function(e){
		clickSnd.play();
		console.log(`currentTime is ${clickSnd.getContext().currentTime}`)
		var idx = soundSelector.selectedIndex;
		console.log("selected sound is " + idx)
		loadSoundFromPath(slist[idx].fileName) // open slider box for sound when 'open' is pushed (so you can open again without reselecting)
	});
});

function loadSoundFromPath(sndFactoryPath, params=[]) {
	/* Dynamic imports:
		http://2ality.com/2017/01/import-operator.html
		https://developers.google.com/web/updates/2017/11/dynamic-import
	*/
	let wfeat="left="+winlocation.x+",top="+winlocation.y+ ",width=400,height="+500+",status=1"
	console.log("popup woindow features = " + wfeat)
	let myWindow = window.open('', '', wfeat);


/*
	var csslink=myWindow.document.createElement("link");
	csslink.setAttribute('rel', "stylesheet");
	csslink.setAttribute('href', "ai_css/sliderBox.css");
	//csslink.setAttribute('type', "text/css");
	myWindow.document.head.appendChild(csslink);
*/

	console.log(`in loadSoundFromPath, got new window = ${myWindow}`)
	importModule("../" + sndFactoryPath)
	.then(factory => {
		//console.log("ok, imported " + factory.default)
		//makeSBox(factory.default(), ",left="+winlocation.x+",top="+winlocation.y)
		factory.default().then((snd) => {
			console.log("factory.default produced " + snd);
			for (var pname in params){
				console.log("param " + pname + "= " + params[pname])
				if (snd.getParam(pname,"type")=="range"){
					snd.setParam(pname, Number(params[pname]))
				} else{
					snd.setParam(pname, params[pname])
				}
			}

			//makeSBox(snd, ",left="+winlocation.x+",top="+winlocation.y, sndFactoryPath)
			makeSBox(snd, myWindow, sndFactoryPath)
			
		})
		winlocation.update();
	});
}

// If we landed here with a querystring, go ahead and open the requested model
if (getParameterByName("modelname")) {
	var params=QueryStringToJSON();
	delete params["modelname"]  // that part of the query string won't be used anymore
	loadSoundFromPath(getParameterByName("modelname"), params);
	var foo = 3;
}







