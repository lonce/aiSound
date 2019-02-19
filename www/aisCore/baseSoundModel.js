import CompositeAudioNode from '../aisCore/Compositional.js';
import * as utils from '../aisCore/utils.js';
import resourceManager from '../aisCore/audioResourceManager.js'

//**********  nonsense for different browsers **********************************
var audioCtx; // the same, just one, for all sounds
var AudioContext = window.AudioContext // Default
    || window.webkitAudioContext // Safari and old versions of Chrome
    || false; 

var OfflineAudioContext = window.OfflineAudioContext
    || window.webkitOfflineAudioContext
    || false;

var BaseAudioContext = window.BaseAudioContext
    || window.webkitBaseAudioContext
    || false;
    
if (AudioContext) {
    // Do whatever you want using the Web Audio API
    var audioCtx = new AudioContext();
    console.log("CONSTRUCTED AUDIO CONTEXT")
    // ...
} else {
    // Web Audio API is not supported
    // Alert the user
    alert("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox");
}

// - - -
/*
// Safari and Firefox don't support candAndHoldAtTime, so give them a cheap substitute
if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        console.log('Opera');
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        console.log('Chrome');
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
       console.log('Safari');
       let that=this;
       let gn = audioCtx.createGain().gain;
       if (Object.getPrototypeOf(gn).cancelAndHoldAtTime){
        console.log("Hey, Safari supports cancelAndHoldAtTime now!!!!!")
       } else{
            let gn = audioCtx.createGain().gain;
            Object.getPrototypeOf(gn).cancelAndHoldAtTime = function (t) {
            this.cancelScheduledValues(t);
            this.setValueAtTime(this.value, t);  
          };
         }
      
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        console.log('Firefox');
       let that=this;
       let gn = audioCtx.createGain().gain;
       if (Object.getPrototypeOf(gn).cancelAndHoldAtTime){
        console.log("Hey, Firefox supports cancelAndHoldAtTime now!!!!!")
       } else{
            let gn = audioCtx.createGain().gain;
            Object.getPrototypeOf(gn).cancelAndHoldAtTime = function (t) {
            this.cancelScheduledValues(t);
            this.setValueAtTime(this.value, t);  
          };
         }

    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
      alert("IE doesn't support WebAudio (yet?)"); 
    }  
    else 
    {
       alert('unknown browser');
    }
    */
//********************************************************************


let BIGNUM = 999999999999999999999999; // need something at least 1000 times smaller than Number.MAX_VALUE!
export {audioCtx, BIGNUM};

class baseSound extends CompositeAudioNode {
	constructor (context=audioCtx, options={}) {  // could pass in your own, but we got one for all sounds all ready 
    	super(context, options);
    	if (options && options.node){
    		this.node=options.node;

    	}
    	else {
    		this.node={};
        //override these in your model
    		this.node.onPlay=function(){};
        this.node.onRelease=function(){this.stop()};
        this.node.onStop=function(){this.stop()};
    	}
      this.node.BIGNUM=BIGNUM; // give this to all sounds for their enjoyment

      // baseSound Variables 
      this.context=context;


      this.params={};
      this.paramname=[];
      this.pSets=[];
      this.pSet={};

      this.startTime=BIGNUM;
      this.stopTime=BIGNUM;

      this.stopTimeout=null;

      this.m_name="name_"+Math.round(10000*(Math.random()))
      this.aboutText=""

      // for recording
      this.isRecording=false;
      this.audioRecorder=null;
      this.recIndex=0;

      /*
      var that=this;
      this.registerParam(
        "play", "range",
        { "min": 0, "max": 1.9999, "val": 0 },
        function (i_val) {
          if (i_val>=1){
            that.play(context.currentTime);
          }
          else{
            if (that.isPlaying()){
              that.release(context.currentTime);
            }
          }
        }
      );
      */

  	}

  /** PRIVATE
  * test a parameter number for existence
  * @method testPName 
  * @param {Number} i_ind index of parameter
  * @return  either the parmaeter name (if it exists) or undefined
  */
  testPName(i_ind){ 

    if (utils.isInteger(i_ind)) {  // "overload" function to accept integer indexes in to parameter list, too.
      i_ind=this.getParamNames()[i_ind];
    } 

    if (!this.params[i_ind]) {
      //throw "set: Parameter " + i_ind + " does not exist";
      console.log("set: Parameter " + i_ind + " does not exist");
      i_ind=undefined;
    }
    return i_ind;  // it has passed the existence test and been converted to the proper string name.
  }

  // -----------------  loading samples --------------

 loadAudioResource(i_url, i_onload){
    return new Promise((resolve, reject) => {
      resourceManager(i_url, i_onload, this.context, function(){
        //bsmInterface.fire({"type": "resourceLoaded", "snd": this});
        resolve();
      });

    });
  };

  getContext(){
    return this.context
  }



  /** SOUNDMODELS
  * test a sound model to see if it is playing at time t (or currently)
  * @method isPlaying
  * @param t 
  */
  isPlaying(t=this.context.currentTime){
    //console.log(`isPlaying with startTime=${this.startTime}, t=${t}, and stopTime=${this.stopTime}`)
    if (this.startTime<=t && t<this.stopTime){
      return true;
    } else {
      return false;
    }
  }

  /**
  * @method setAboutText
  * @param {String} i_text text descritption of model, hints, etc
  */
  setAboutText(i_text){
    this.aboutText=i_text;
  };

  /**
  * @method getAboutText
  * @return {String} text descritption of model, hints, created with setAboutText 
  */
  getAboutText() { return this.aboutText;};


  /**
  * @method setName
  * @param {String} i_name name for this model
  */
  setName(i_name){
    this.m_name=i_name;
  };

  getName(){
    return this.m_name;
  }

  /** SOUNDMODELS
  * Creates a parameter that will be used to control the model and provide information 
  * @method registerParam
  * @param {String} i_name name to expose to the world for this param
  * @param {String} i_type type ["range", "URL"]
  * @param {String} i_val  initial value
  * @param {String} i_f function to execute when setParam(name, val) is called. 
  */
  registerParam(i_name, i_type, i_val, i_f, i_int=false) {
    if (this.params.hasOwnProperty(i_name)) {
      console.log("Can not register 2 parameters with the same name");
      return;
    }
    var paramObject = {
      "type": i_type,
      "value": i_val,
      "f": i_f,
      "int" : i_int
    };
    this.params[i_name] = paramObject;
    this.paramname.push(i_name);
    //i_f(i_val); // can't do this because objects and noted used in the functions may not have been defined yet. 
  };

  /** 
  * Grabs a parameter from a child model, registers it on this model, and just reflects all calls to the child
  * @method registerChildParam
  * @param {SoundModel} childModel 
  * @param {String} childPname name of the child parameter to expose 
  * @param {String} [parentPname=childPname] name to use for the parameter 
  */
  registerChildParam(childModel, childPname, parentPname){
    var parentPname=parentPname || childPname;
    //params[parentPname] = childModel.system.getRawParamObject(childPname);
    this.params[parentPname] = childModel.params[childPname];
    this.paramname.push(parentPname);
  };

  /** 
  * @method getNumParams
  * @return {Number} the number of paramters the model exposes
  */
  getNumParams(){
    return this.paramname.length;
  };

  /** 
  * @method getParamNames
  * @return {Array of Strings} array of model parameter names
  */
  getParamNames(){
    return this.paramname;
  };

  /** 
  * @method getParamNames
  * @param index index of the parameter whose name you want
  * @return {String} the name of the parameter with the secified index
  */
  getParamName(index) {
    if (index < this.paramname.length){
      return this.paramname[index];
    } else {
      return "";
    }
  };


  /** PUBLIC INTERFACE
  * set the parameter using values using its own units in [min,max] 
  * @method setParam 
  * @param {String} i_name the name of the param you want to set 
  * @param {Number} i_val the value to set the parameter
  */
  /*
  setParam(i_name) {
    i_name=this.testPName(i_name);
    if (! i_name) return null;

    var args = [], i;
    for (i = 1; i < arguments.length; i += 1) {
      if (this.params[i_name].int){
        args.push(Math.round(arguments[i]));
      } else{
        args.push(arguments[i]);
      }
    }

    this.params[i_name].value.val=arguments[1];
    this.params[i_name].f.apply(this, args);
  };
*/
  setParam(i_name, ival, i_prop="val") {
    i_name=this.testPName(i_name);
    if (! i_name) return null;

    var p = this.params[i_name];

    switch (i_prop){
      case "val":
        var args = [], i;
        for (i = 1; i < arguments.length; i += 1) {
          if (this.params[i_name].int){
            args.push(Math.round(arguments[i]));
          } else{
            args.push(arguments[i]);
          }
        }
        this.params[i_name].value.val=arguments[1];
        this.params[i_name].f.apply(this, args);
        break;
      case "name":
        console.log("setParam: Sorry, you can not change the parameter names")
        throw "setParam: Sorry, you can not change the parameter names";
      case "type":
        p.type=ival;
        break;
      case "normval":
        console.log("setParam: Use setParamNorm to set param with a normalized value")
        throw "setParam: Use setParamNorm to set param with a normalized value";
      case "min":
        p.value.min=ival;
        break;
      case "max":
        p.value.max=ival;
        break;
      default:
        console.log("setParam: Parameter property " + i_prop + " not recognized")
        throw "setParam: Parameter property " + i_prop + " not recognized";
    }
    
  };


  /** 
  * Set the parameter using values in [0,1]
  * @method setParamNorm   
  * @param {String} i_name the name of the param you want to set 
  * @param {Number} i_val the value to set the parameter
  */
  setParamNorm(i_name, i_val) {
    i_name=this.testPName(i_name);
    if (! i_name) return null;
    var p = this.params[i_name];
    p.value.val=p.value.min + i_val * (p.value.max - p.value.min);

    if (this.params[i_name].int){
      p.value.val=Math.round(p.value.val);
    } 

    p.f(p.value.val);

  };


  /** 
  * Get specified information about a parameter
  * @method getParam
  * @param {String} i_name the name of the param you want info about 
  * @param {String} i_prop on of ["name", "type", "val", "normval", "min" or "max"]
  * @return the value of the property you requested
  */
  getParam(i_name, i_prop="val"){
    i_name=this.testPName(i_name);
    if (! i_name) return null;

    var p = this.params[i_name];

    switch (i_prop){
      case "name":
        return i_name;
      case "type":
        return p.type;
      case "val":
        return p.value.val;
      case "normval":
        return (p.value.val - p.value.min)/(p.value.max - p.value.min);
      case "min":
        return p.value.min;
      case "max":
        return p.value.max;
      default:
        return null;
    }
  }



  play(startVal=this.context.currentTime, releaseVal=null){
    //console.log("----")
    startVal = (startVal==0 ? this.context.currentTime : startVal);
    // clear stopTimeout before calling onPlay which may include a call to stop.
    if (this.stopTimeout != null){
      //console.log("BaseSound: ----------- clear timeout")
      clearTimeout(this.stopTimeout);
      this.stopTimeout=null;
    }

    //console.log(`call onPlay with startVal = ${startVal}, and currentTime = ${this.context.currentTime}`)
  	this.node.onPlay(startVal, releaseVal)
    this.startTime=startVal;
    this.stopTime=BIGNUM;
            
    //console.log("baseSound connecting to destination")
    this.connect(this.context.destination);

  } 

  stop(i_time=this.context.currentTime) {
    i_time = (i_time==0 ? this.context.currentTime : i_time);
    //console.log(`basesound stop for ${this.m_name} with this.startTime = ${this.startTime}, i_time=${i_time}, and this.stopTime = ${this.stopTime}`);
    if (! this.isPlaying(i_time)) {
      return; 
    }

      this.stopTime=i_time;
      // Note: it doesn't make sense to check isPlying inside onStop - it will return false because stopTime has already been set, but isPlaying was true when stop() was called
      this.node.onStop(i_time);    //onStop doesn't get called unless isPlaying was true when stop was called  
      

      if (i_time > this.context.currentTime){
        let that=this;
        this.stopTimeout=setTimeout(function(){
          if (that.stopTimeout==null){ // hey, its been cleared! Seems to happen when clearTimeout happens immediately before timer fires
            //console.log("time out fired, but its null!!");
            // so don't disconnect!
          } else{
            //console.log("BaseSound: FIRE DISCONNECT timeout")

            if (! that.isRecording){
              //console.log("basesound disconnect on time-out stop, name = " + this.m_name)
              //console.log("      that.isRecording should be false, and in face, = " + that.isRecording)
              console.log(" ...baseSound stop disconnect")
              that.disconnect();
            }
            that.stopTimeout=null;
          }
        }, 1000*(i_time-this.context.currentTime));
      } else{ // immediate stop
         //console.log("BaseSound: DISCONNECT immediate")
         if (! this.isRecording){
              //console.log("basesound disconnect on stop, name = " + this.m_name)
              //console.log("      that.isRecording should be false, and in face, = " + this.isRecording)
              this.disconnect();
          }
      }

      //if ((this.node.getNumOutConnections() != 0) && (! isRecording)){
      //console.log("baseSound disconnecting output on stop");

    };


  release(i_time=this.context.currentTime) {
    //console.log(`baseSound release, now=${this.context.currentTime}, this.startTime=${this.startTime}, and this.stopTime=${this.stopTime}`)
    this.node.onRelease(i_time);

        //if (i_time === undefined) i_time=0;
        //bsmInterface.fire({"type": "release", "ptime": i_time, "snd": this});
    };



  //=======================================================================================
  // RECORDING
  //=======================================================================================

  /** 
  * Start recording audio output from the model 
  * @method startRecording 
  */
  startRecording(){
    if (this.audioRecorder===null){
      console.log("create new recorder with graph node interface");
      this.audioRecorder = new Recorder( this);
    }
    this.audioRecorder.clear();
    this.audioRecorder.record();
    this.isRecording=true;
    console.log("OK, recording!");
  }

  /** 
  * Stop recording audio output from the model 
  * @method stopRecording 
  */
  stopRecording(cb,sampleLength){//, blobCB){
    this.isRecording=false;
    this.audioRecorder.stop();
    // return audio buffer if requested
    if (cb){ // pass the blob back to the app
      //audioRecorder.getBuffer(cb);
      this.audioRecorder.exportWAV( cb, {"sampleLength" : sampleLength});
    }
    else { // bring up a dialog box to save file locally
      var that=this;
      this.audioRecorder.exportWAV( function(blob){
        
        var filename = "myRecording" + ((that.recIndex<10)?"0":"") + that.recIndex + ".wav";
        var url = (window.URL || window.webkitURL).createObjectURL(blob);
        var link = window.document.createElement('a');
        link.href = url;
        link.download = filename || 'output.wav';

        var evt = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
          clientX: 20,
        });
        link.dispatchEvent(evt);

         that.recIndex++;      

      });
    }
    console.log("Done recording!");
  }
  //=======================================================================================


} // class



AudioContext.prototype.createBaseSound =
OfflineAudioContext.prototype.createBaseSound = function (context, options={}) {
  return new baseSound(context, options);
};