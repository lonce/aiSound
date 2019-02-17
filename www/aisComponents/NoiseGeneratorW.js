class NoiseGenerator extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    // Declare class member variables 

    // This keeps the value of the param at its last set value
    this.aindexingP=0;

    return [{name: 'amplitude', defaultValue: .85, minValue: 0, maxValue: 1}];
  }

  constructor(options) {
    super(options);
  }


  process(inputs, outputs, parameters) {
    let output = outputs[0];
    let amplitude = parameters.amplitude;

    //this.aindexingP=(amplitude.length != 1)? 1 : 0;
    this.aindexingP=(amplitude.length != 1)

    for (let channel = 0; channel < output.length; ++channel) {
      let outputChannel = output[channel];
      for (let i = 0; i < outputChannel.length; ++i) {
        outputChannel[i] = 2 * (Math.random() - 0.5) * amplitude[i*this.aindexingP];
      }
    }      


    return true;
  }
}

registerProcessor('noise-generator', NoiseGenerator);