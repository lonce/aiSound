import aiSlider from './aiSlider.js'

var makesBox=function(snd,appearanceString="",sfpath) {

	var myWindow = {};
	//myWindow = window.open('', snd.getName(), "width = 400,height="+500+",resizable=yes,");
	var sname = snd.getName();
	var astr="width = 400,height="+500+appearanceString+",location=no";
	//myWindow = window.open('aiSound.html', '', astr);
	myWindow = window.open('', '', astr);
	/*
	// Hmmmm this isn't working for styling, event thoughthe eleents of the modal dialog look right.
	var csslink=myWindow.document.createElement("link");
	csslink.setAttribute('rel', "stylesheet");
	csslink.setAttribute('href', "css/sliderBox.css");
	csslink.setAttribute('type', "text/css");
	myWindow.document.head.appendChild(csslink);
	*/
	myWindow.document.write('<html><head><title>Popup</title>');
  	myWindow.document.write('<link rel="stylesheet" href="css/sliderBox.css">');
  	myWindow.document.write('</head><body>');
	myWindow.document.write('</body></html>');
	

	myWindow.document.title=sname;
	myWindow.document.about="foo";
	myWindow.document.body.id="sliderBox"

	myWindow.addEventListener('beforeunload', function(event) {
  		snd.stop(0);
	}, false);


	//myWindow.document.title("aiSound");
	var sliderdiv = myWindow.document.createElement("div")
	sliderdiv.setAttribute('class', "sliderBox");
	myWindow.document.body.appendChild(sliderdiv);

	//var sliderdiv = document.getElementById("imgDiv");

	var playBtn = myWindow.document.createElement("input")//, { type : 'button', value:'play' });
	playBtn.setAttribute('type', 'button');
	playBtn.style.width= '80px';
	playBtn.style.borderWidth= '2px'; 
	playBtn.setAttribute('value', 'play');
	playBtn.setAttribute('class', 'basicButton');
	playBtn.pushed=false; 

	playBtn.addEventListener("mousedown",function(e){
		if (! playBtn.pushed){
			snd.setParamNorm("play", 1);
			playBtn.pushed=true;
			playBtn.setAttribute('value', 'release');
		} else {
			snd.setParamNorm("play", 0);
			playBtn.pushed=false;
			playBtn.setAttribute('value', 'play');
		}
	});
	sliderdiv.appendChild(playBtn); 

	var recBtn = myWindow.document.createElement("input")//, { type : 'button', value:'play' });
	recBtn.setAttribute('type', 'button');
	recBtn.style.width= '80px';
	recBtn.style.borderWidth= '2px'; 
	recBtn.setAttribute('value', 'record');
	recBtn.setAttribute('class', 'basicButton');
	recBtn.pushed=false; 

	recBtn.addEventListener("mousedown",function(e){
		if (! recBtn.pushed){
			recBtn.pushed=true;
			recBtn.setAttribute('value', 'stop rec');
			snd.startRecording();
		} else {
			recBtn.pushed=false;
			recBtn.setAttribute('value', 'record');
			snd.stopRecording();
		}
	});
	sliderdiv.appendChild(recBtn); 



	var slider=[];
	var ptextbox=[];
	var numptbox=0
	// Parameter names or indexes are used for setting values and getting info.
	// You can also see the parameter names in the sliderBox browser app that comes with jsaSound for playing sounds.
	console.log("The sound has " + snd.getNumParams() + " parameters :");
	for(var i=0;i<snd.getNumParams();i++){
		console.log("snd param[" + i + "] is " + snd.getParam(i,"name") + " of type " + snd.getParam(i,"type")
			+ " with min " + snd.getParam(i,"min") + ", and max " + snd.getParam(i,"max"));

		sliderdiv.appendChild(myWindow.document.createElement("br"));
		if ( ! (snd.getParam(i,"name")=='play') ) {
			slider[i]=aiSlider(snd, i, myWindow);				
			sliderdiv.appendChild(slider[i]);
		}
		
	}


	if (snd.getAboutText()) {
		sliderdiv.appendChild(myWindow.document.createElement("br"));
		sliderdiv.appendChild(myWindow.document.createElement("hr"));
		var tbox=myWindow.document.createTextNode("About: " + snd.getAboutText())
		sliderdiv.appendChild(tbox);
	}


	// Now add the extra functionality ===========================================
	sliderdiv.appendChild(myWindow.document.createElement("br"));
	sliderdiv.appendChild(myWindow.document.createElement("hr"));

	var queryStringButt = myWindow.document.createElement("input");
	queryStringButt.setAttribute('type', 'button');
	queryStringButt.style.width= '80px';
	queryStringButt.style.borderWidth= '2px'; 
	queryStringButt.setAttribute('value', 'QString');

	queryStringButt.addEventListener("mousedown",function(e){
		var urlWindow = window.open('', '', "width = 625,height = " + 40);
		var pstring="";
		//pstring+=config.resourcesPath; //"http://animatedsoundworks.com:8001/";
		console.log("window.location.href is " + window.location.href)
		pstring+=window.location.href
		pstring+="?modelname=" + sfpath;

		for (i = 0; i < snd.getNumParams(); i++) {
			if (i!=0) {
				pstring += "&" +  snd.getParam(i, "name") +  "=";
				pstring +=  snd.getParam(i, "val") ;
			}
		}
		urlWindow.document.write(pstring);
	});

	sliderdiv.appendChild(queryStringButt); 





}

export {makesBox as default}