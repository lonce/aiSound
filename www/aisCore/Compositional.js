console.log("executing compositional--------------")
// name mangle to prevent changing the prototype if loading this module from multiple locations
var connectoldmangle="_connect_"+ Math.floor(Math.random() * 10000);
AudioNode.prototype[connectoldmangle] = AudioNode.prototype.connect;

AudioNode.prototype.connect = function () {
  var args = Array.prototype.slice.call(arguments);
  if (args[0]._isCompositeAudioNode) {
    //console.log("arg[0] is composite")
    args[0] = args[0]._input;
  }
  //console.log("now apply to args: " + args)
  this[connectoldmangle].apply(this, args);
};

export default class CompositeAudioNode {  

  get _isCompositeAudioNode () {
    return true;
  }
  
  constructor (context, options) {
    this.context = context;

    if (options && options.input){
      this._input=options.input;
      this.numberOfInputs     = options.input.numberOfInputs;
      //console.log("in CompositeAudioNode, setting this.numberOfInputs = "+ this.numberOfInputs)
    } else{
      this.numberOfInputs = 0;
    }
    if (options && options.output){
      this._output=options.output;
      this.numberOfOutputs     = options.output.numberOfOutputs;
      //console.log("in CompositeAudioNode, setting this.numberOfOutputs = "+ this.numberOfOutputs)
    } else {
      this.numberOfOutputs =0;
    }

  }


  connect () {
    //console.log("CompositeAudioNode.connect");
    if (this.numberOfOutputs > 0){
      this._output.connect.apply(this._output, arguments);
    }
    //this.numOutConnections+=1;
    //console.log("Applied " + this._output + " to " + arguments);
  }
  
  disconnect () {
    //console.log("CompositeAudioNode.disconnect");
    if (this.numberOfOutputs > 0){
      this._output.disconnect.apply(this._output, arguments);
    }
    //this.numOutConnections-=1;
  }
}
