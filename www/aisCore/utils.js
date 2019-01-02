import freesound from '../aisCore/freesound.js';;

var isInteger = function(n){
	return n===+n && n===(n|0);
};

// See also: https://github.com/g-roma/freesound.js

var freesoundfix=function(i_url, cb){
	if (i_url.match(/freesound.org/) != null){
		var sid = i_url.match("sounds/(.*)/"); // array containing match and target substring
		if (sid && sid.length>1){

			freesound.setToken("563bc5df64f8d4d9cc83f2b0409501ae4b441b01");
			freesound.getSound(sid[1],
        		function(sound){
        			console.log("freesound url is " + sound.previews['preview-hq-mp3']);
        			cb(sound.previews['preview-hq-mp3']);
        	});

		} 
	} else{ // not a freesound url
			cb(i_url);
		}
}

// used to decode the quesrystring in the URL
var getParameterByName = function (name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var QueryStringToJSON = function() {            
    var pairs = location.search.slice(1).split('&');
    
    var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
}



/* Raised cos window 
	p = 0 : square window
	p = 1 : MLT sine
	p = 2 : Hanning
	p = 4 : Alternative Blackman
*/
var raisedCosine=function(p=2, len=100){
	let vals=[]
	for (let i=0;i<len;i++){
		vals[i]=Math.pow((1-Math.cos(2*i*Math.PI/len))/2, p);
	}
	return vals;
}

export{isInteger, freesoundfix, raisedCosine, getParameterByName, QueryStringToJSON}