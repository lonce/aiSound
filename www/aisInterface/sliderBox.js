import aiSlider from './aiSlider.js'


//var makesBox=function(snd,appearanceString="",sfpath) {
var makesBox=function(snd,swin,sfpath) {

	//////var swin = window.open('', '', astr);
	console.log(`swin.document is ${swin.document}`)
	//swin = window.open('', snd.getName(), "width = 400,height="+500+",resizable=yes,");
	var sname = snd.getName();
	////var astr="width = 400,height="+500+appearanceString+",location=no";
	////console.log("sliderbox astr = " + astr)


	//swin = window.open('aiSound.html', '', astr);
	//swin = window.open('', '', astr);

/*	
	// Hmmmm this isn't working for styling, event thoughthe eleents of the modal dialog look right.
	var csslink=swin.document.createElement("link");
	csslink.setAttribute('rel', "stylesheet");
	csslink.setAttribute('href', "ai_css/sliderBox.css");
	//csslink.setAttribute('type', "text/css");
	swin.document.head.appendChild(csslink);
	*/


	swin.document.write('<html><head><title>Popup</title>');
	// causes "waiting for local host" on firfox
  	swin.document.write('<link rel="stylesheet" href="ai_css/sliderBox.css">');
  	swin.document.write('</head><body>');
	swin.document.write('</body></html>');


	swin.document.title=sname;
	swin.document.about="foo";
	swin.document.body.id="sliderWindow"
	
	swin.addEventListener('beforeunload', function(event) {
  		snd.stop(0);
	}, false);


	//swin.document.title("aiSound");
	var sliderdiv = swin.document.createElement("div")
	sliderdiv.setAttribute('class', "sliderBox");
	swin.document.body.appendChild(sliderdiv);

	//var sliderdiv = document.getElementById("imgDiv");

	var playBtn = swin.document.createElement("input")//, { type : 'button', value:'play' });
	playBtn.setAttribute('type', 'button');
	playBtn.style.width= '80px';
	playBtn.style.borderWidth= '2px'; 
	playBtn.setAttribute('value', 'play');
	playBtn.setAttribute('class', 'basicButton');
	playBtn.pushed=false; 

	playBtn.addEventListener("mousedown",function(e){
		console.log("sliderbox: play button pushed")
		//Safari doesn't resume() for sounds that don't respond immediately to user interaciton 
		if (snd.getContext().state === 'suspended'){
			let ctx=snd.getContext();
			ctx.resume();
		}

		if (! playBtn.pushed){
			console.log("sliderbox: play ")
			snd.play();
			//.setParamNorm("play", 1);
			playBtn.pushed=true;
			playBtn.setAttribute('value', 'release');
		} else {
			console.log("sliderbox: release ")
			snd.release();
			//snd.setParamNorm("play", 0);
			playBtn.pushed=false;
			playBtn.setAttribute('value', 'play');
		}
	});
	sliderdiv.appendChild(playBtn); 

	var recBtn = swin.document.createElement("input")//, { type : 'button', value:'play' });
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

		sliderdiv.appendChild(swin.document.createElement("br"));
		if ( ! (snd.getParam(i,"name")=='play') ) {
			slider[i]=aiSlider(snd, i, swin);				
			sliderdiv.appendChild(slider[i]);
		}
		
	}


	if (snd.getAboutText()) {
		sliderdiv.appendChild(swin.document.createElement("br"));
		sliderdiv.appendChild(swin.document.createElement("hr"));
		//var tbox=swin.document.createTextNode("About: " + snd.getAboutText())
		var tbox=swin.document.createElement("div")
		tbox.innerHTML="About : "
		tbox.innerHTML+=snd.getAboutText();
		tbox.innerHTML+="<br><hr><i><font size='2'>To use an aiSound.cloud model in your own app, see this <a href='https://sonicthings.org/FMMouse/' target='_blank'>example</a></font></i>."
		sliderdiv.appendChild(tbox);
	}


	// Now add the extra functionality ===========================================
	//sliderdiv.appendChild(swin.document.createElement("br"));
	sliderdiv.appendChild(swin.document.createElement("br"));

	var queryStringButt = swin.document.createElement("input");
	queryStringButt.setAttribute('type', 'button');
	queryStringButt.style.width= '80px';
	queryStringButt.style.borderWidth= '2px'; 
	queryStringButt.setAttribute('value', 'Query String');

	queryStringButt.addEventListener("mousedown",function(e){
		var urlWindow = window.open('', '', "width = 625,height = " + 40);
		var pstring="";
		//pstring+=config.resourcesPath; //"http://animatedsoundworks.com:8001/";
		console.log("window.location.href is " + window.location.href)
		pstring+=window.location.href
		pstring+="?modelname=" + sfpath;

		for (i = 0; i < snd.getNumParams(); i++) {
			//if (i!=0) {
				pstring += "&" +  snd.getParam(i, "name") +  "=";
				pstring +=  snd.getParam(i, "val") ;
			//}
		}
		urlWindow.document.write(pstring);
	});

	sliderdiv.appendChild(queryStringButt); 
	let qbuttLabel= swin.document.createElement("label")
	sliderdiv.appendChild(qbuttLabel);
	qbuttLabel.innerHTML= "  - a URL you can use to share this sound in this sliderbox with these parameters.".fontsize(1);
 


}

export {makesBox as default}