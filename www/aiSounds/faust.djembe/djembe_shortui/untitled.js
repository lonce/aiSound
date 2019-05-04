
/*
Code generated with Faust version 2.15.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONuntitled() {
	return '{"name": "untitled","filename": "untitled","version": "2.15.10","compile_options": "-scal -ftz 2","library_list": ["/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/demos.lib","/usr/local/share/faust/maths.lib","/usr/local/share/faust/reverbs.lib","/usr/local/share/faust/filters.lib","/usr/local/share/faust/delays.lib","/usr/local/share/faust/physmodels.lib","/usr/local/share/faust/noises.lib","/usr/local/share/faust/envelopes.lib","/usr/local/share/faust/basics.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/43B96947BF7D52E53A4B8E23E1EA3A0EF6F2545D/web/wasmjs-worklet"],"size": "586756","inputs": "0","outputs": "2","meta": [ { "basics.lib/name": "Faust Basic Element Library" },{ "basics.lib/version": "0.0" },{ "delays.lib/name": "Faust Delay Library" },{ "delays.lib/version": "0.1" },{ "envelopes.lib/author": "GRAME" },{ "envelopes.lib/copyright": "GRAME" },{ "envelopes.lib/license": "LGPL with exception" },{ "envelopes.lib/name": "Faust Envelope Library" },{ "envelopes.lib/version": "0.0" },{ "filename": "untitled" },{ "filters.lib/name": "Faust Filters Library" },{ "filters.lib/version": "0.0" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.1" },{ "name": "untitled" },{ "noises.lib/name": "Faust Noise Generator Library" },{ "noises.lib/version": "0.0" },{ "reverbs.lib/name": "Faust Reverb Library" },{ "reverbs.lib/version": "0.0" }],"ui": [ {"type": "vgroup","label": "untitled","items": [ {"type": "hgroup","label": "Freeverb","items": [ {"type": "vgroup","label": "0x00","meta": [{ "0": "" }],"items": [ {"type": "vslider","label": "Damp","address": "/untitled/Freeverb/0x00/Damp","index": "28","meta": [{ "0": "" },{ "style": "knob" },{ "tooltip": "Somehow control the   density of the reverb." }],"init": "0.5","min": "0","max": "1","step": "0.025"},{"type": "vslider","label": "RoomSize","address": "/untitled/Freeverb/0x00/RoomSize","index": "20","meta": [{ "1": "" },{ "style": "knob" },{ "tooltip": "The room size   between 0 and 1 with 1 for the largest room." }],"init": "0.5","min": "0","max": "1","step": "0.025"},{"type": "vslider","label": "Stereo Spread","address": "/untitled/Freeverb/0x00/Stereo_Spread","index": "324456","meta": [{ "2": "" },{ "style": "knob" },{ "tooltip": "Spatial   spread between 0 and 1 with 1 for maximum spread." }],"init": "0.5","min": "0","max": "1","step": "0.01"}]},{"type": "vslider","label": "Wet","address": "/untitled/Freeverb/Wet","index": "40","meta": [{ "1": "" },{ "tooltip": "The amount of reverb applied to the signal   between 0 and 1 with 1 for the maximum amount of reverb." }],"init": "0.3333","min": "0","max": "1","step": "0.025"}]},{"type": "button","label": "gate","address": "/untitled/gate","index": "128"}]}]}';
}
function getBase64Codeuntitled() { return "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bGVfb3B0aW9ucyI6ICItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOiBbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc3RkZmF1c3QubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9kZW1vcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvcmV2ZXJicy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9kZWxheXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9waHlzbW9kZWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvbm9pc2VzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZW52ZWxvcGVzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYmFzaWNzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiIsIi90bXAvc2Vzc2lvbnMvNDNCOTY5NDdCRjdENTJFNTNBNEI4RTIzRTFFQTNBMEVGNkYyNTQ1RC93ZWIvd2FzbWpzLXdvcmtsZXQiXSwic2l6ZSI6ICI1ODY3NTYiLCJpbnB1dHMiOiAiMCIsIm91dHB1dHMiOiAiMiIsIm1ldGEiOiBbIHsgImJhc2ljcy5saWIvbmFtZSI6ICJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkiIH0seyAiYmFzaWNzLmxpYi92ZXJzaW9uIjogIjAuMCIgfSx7ICJkZWxheXMubGliL25hbWUiOiAiRmF1c3QgRGVsYXkgTGlicmFyeSIgfSx7ICJkZWxheXMubGliL3ZlcnNpb24iOiAiMC4xIiB9LHsgImVudmVsb3Blcy5saWIvYXV0aG9yIjogIkdSQU1FIiB9LHsgImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgImVudmVsb3Blcy5saWIvbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgImVudmVsb3Blcy5saWIvbmFtZSI6ICJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5IiB9LHsgImVudmVsb3Blcy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAiZmlsZW5hbWUiOiAidW50aXRsZWQiIH0seyAiZmlsdGVycy5saWIvbmFtZSI6ICJGYXVzdCBGaWx0ZXJzIExpYnJhcnkiIH0seyAiZmlsdGVycy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAibWF0aHMubGliL2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzLmxpYi9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHMubGliL25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzLmxpYi92ZXJzaW9uIjogIjIuMSIgfSx7ICJuYW1lIjogInVudGl0bGVkIiB9LHsgIm5vaXNlcy5saWIvbmFtZSI6ICJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSIgfSx7ICJub2lzZXMubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgInJldmVyYnMubGliL25hbWUiOiAiRmF1c3QgUmV2ZXJiIExpYnJhcnkiIH0seyAicmV2ZXJicy5saWIvdmVyc2lvbiI6ICIwLjAiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogInVudGl0bGVkIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICJGcmVldmVyYiIsIml0ZW1zIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiMHgwMCIsIm1ldGEiOiBbeyAiMCI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJEYW1wIiwiYWRkcmVzcyI6ICIvdW50aXRsZWQvRnJlZXZlcmIvMHgwMC9EYW1wIiwiaW5kZXgiOiAiMjgiLCJtZXRhIjogW3sgIjAiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidG9vbHRpcCI6ICJTb21laG93IGNvbnRyb2wgdGhlICAgZGVuc2l0eSBvZiB0aGUgcmV2ZXJiLiIgfV0sImluaXQiOiAiMC41IiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMjUifSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIlJvb21TaXplIiwiYWRkcmVzcyI6ICIvdW50aXRsZWQvRnJlZXZlcmIvMHgwMC9Sb29tU2l6ZSIsImluZGV4IjogIjIwIiwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiVGhlIHJvb20gc2l6ZSAgIGJldHdlZW4gMCBhbmQgMSB3aXRoIDEgZm9yIHRoZSBsYXJnZXN0IHJvb20uIiB9XSwiaW5pdCI6ICIwLjUiLCJtaW4iOiAiMCIsIm1heCI6ICIxIiwic3RlcCI6ICIwLjAyNSJ9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiU3RlcmVvIFNwcmVhZCIsImFkZHJlc3MiOiAiL3VudGl0bGVkL0ZyZWV2ZXJiLzB4MDAvU3RlcmVvX1NwcmVhZCIsImluZGV4IjogIjMyNDQ1NiIsIm1ldGEiOiBbeyAiMiI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ0b29sdGlwIjogIlNwYXRpYWwgICBzcHJlYWQgYmV0d2VlbiAwIGFuZCAxIHdpdGggMSBmb3IgbWF4aW11bSBzcHJlYWQuIiB9XSwiaW5pdCI6ICIwLjUiLCJtaW4iOiAiMCIsIm1heCI6ICIxIiwic3RlcCI6ICIwLjAxIn1dfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIldldCIsImFkZHJlc3MiOiAiL3VudGl0bGVkL0ZyZWV2ZXJiL1dldCIsImluZGV4IjogIjQwIiwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJ0b29sdGlwIjogIlRoZSBhbW91bnQgb2YgcmV2ZXJiIGFwcGxpZWQgdG8gdGhlIHNpZ25hbCAgIGJldHdlZW4gMCBhbmQgMSB3aXRoIDEgZm9yIHRoZSBtYXhpbXVtIGFtb3VudCBvZiByZXZlcmIuIiB9XSwiaW5pdCI6ICIwLjMzMzMiLCJtaW4iOiAiMCIsIm1heCI6ICIxIiwic3RlcCI6ICIwLjAyNSJ9XX0seyJ0eXBlIjogImJ1dHRvbiIsImxhYmVsIjogImdhdGUiLCJhZGRyZXNzIjogIi91bnRpdGxlZC9nYXRlIiwiaW5kZXgiOiAiMTI4In1dfV19"; }

/*
 faust2wasm: GRAME 2017-2018
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class untitledNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {

        var json_object = JSON.parse(getJSONuntitled());

        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";

        super(context, 'untitled', options);
        this.baseURL = baseURL;
      
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push(item.address);
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            }
                        }
                    }
                }      
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });     
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        this.json_object = json_object;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];
        
        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event)
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON()
    {
        return getJSONuntitled();
    }
    
    // For WAP
    async getMetadata() 
    {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
            	return responseJSON.json();
        	}).then(json => {
        		resolve(json);
        	})
    	});
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    // For WAP
    setParam(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    // For WAP
    getParam(path) 
    {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }

    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    // For WAP
    inputChannelCount() 
    {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() 
    {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams()
    {
        return this.inputs_items;
    }
    
    // For WAP
    getDescriptor() 
    {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, untitledNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var path = this.fPitchwheelLabel[i];
            this.setParamValue(path, Math.pow(2.0, wheel/12.0));
            if (this.output_handler) {
                this.output_handler(path, this.getParamValue(path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    // For WAP
    onMidi(data) 
    {
     	midiMessage(data);
    }
    
    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() 
    {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) 
    {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }
    
    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) 
    {
        this.setState(this.presets[patch])
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
    
    // Loads a sample and decode it
    static loadAudioSample(context, url)
    {
        return new Promise(function(resolve, reject) {
                           fetch(url)
                           .then((response) => {
                                 return response.arrayBuffer();
                                 })
                           .then((buffer) => {
                                 context.decodeAudioData(buffer, (decodedAudioData) => {
                                                         resolve(decodedAudioData);
                                                         });
                                 });
                           });
    }
    
    
    
    // Loads a sample
    static loadSample(url)
    {
        return new Promise(function(resolve, reject) {
                           fetch(url)
                           .then((response) => {
                                 resolve (response.arrayBuffer());
                                 })
                           });
    }
    
}

// Factory class
//window.untitled = class untitled {
export default class untitled {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "")
    {
    	// Resume audio context each time...
    	context.resume();
    	
    	console.log("baseLatency " + context.baseLatency);
    	console.log("outputLatency " + context.outputLatency);
    	console.log("sampleRate " + context.sampleRate);
    	
        this.context = context;
        this.baseURL = baseURL;
        
        this.pathTable = [];
        
        // soundfile items
        this.soundfile_items = [];
    }
    
    // JSON parsing functions
    parse_ui(ui)
    {
        for (var i = 0; i < ui.length; i++) {
            this.parse_group(ui[i]);
        }
    }
    
    parse_group(group)
    {
        if (group.items) {
            this.parse_items(group.items);
        }
    }
    
    parse_items(items)
    {
        for (var i = 0; i < items.length; i++) {
            this.parse_item(items[i]);
        }
    }
    
    parse_item(item)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            this.parse_items(item.items);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            this.soundfile_items.push(item.address);
            this.pathTable[item.address] = parseInt(item.index);
        }
    }
  
    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    load()
    {
    	return new Promise((resolve, reject) => {   
    		let foo = window.location.pathname;
            let real_url = (this.baseURL === "") ? "untitled-processor.js" : (this.baseURL + "/untitled-processor.js");
            this.context.audioWorklet.addModule(real_url).then(() => {
            this.node = new untitledNode(this.context, this.baseURL, {});
            this.node.onprocessorerror = () => { console.log('An error from untitled-processor was detected.');}
            return (this.node);
            }).then((node) => {
                resolve(node);
            }).catch((e) => {
                reject(e);
            });
        });
    }
    
    loadGui() 
    {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createuntitledGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createuntitledGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

	linkExists(url) 
	{
    	return document.querySelectorAll(`link[href="${url}"]`).length > 0;
   	}

}

// WAP factory
//window.Faustuntitled = window.untitled;
    

