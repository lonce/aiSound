
/*
Code generated with Faust version 2.15.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONuntitled() {
	return '{"name": "untitled","filename": "untitled","version": "2.15.10","compile_options": "-scal -ftz 2","library_list": ["/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/demos.lib","/usr/local/share/faust/maths.lib","/usr/local/share/faust/reverbs.lib","/usr/local/share/faust/filters.lib","/usr/local/share/faust/delays.lib","/usr/local/share/faust/physmodels.lib","/usr/local/share/faust/noises.lib","/usr/local/share/faust/envelopes.lib","/usr/local/share/faust/basics.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/92EAE055BD3D7BC205CF38EEC15AC2D5251824C6/web/wasmjs-worklet"],"size": "586724","inputs": "0","outputs": "2","meta": [ { "basics.lib/name": "Faust Basic Element Library" },{ "basics.lib/version": "0.0" },{ "delays.lib/name": "Faust Delay Library" },{ "delays.lib/version": "0.1" },{ "envelopes.lib/author": "GRAME" },{ "envelopes.lib/copyright": "GRAME" },{ "envelopes.lib/license": "LGPL with exception" },{ "envelopes.lib/name": "Faust Envelope Library" },{ "envelopes.lib/version": "0.0" },{ "filename": "untitled" },{ "filters.lib/name": "Faust Filters Library" },{ "filters.lib/version": "0.0" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.1" },{ "name": "untitled" },{ "noises.lib/name": "Faust Noise Generator Library" },{ "noises.lib/version": "0.0" },{ "reverbs.lib/name": "Faust Reverb Library" },{ "reverbs.lib/version": "0.0" }],"ui": [ {"type": "vgroup","label": "untitled","items": [ {"type": "hgroup","label": "Freeverb","items": [ {"type": "vgroup","label": "0x00","meta": [{ "0": "" }],"items": [ {"type": "vslider","label": "Damp","address": "/untitled/Freeverb/0x00/Damp","index": "20","meta": [{ "0": "" },{ "style": "knob" },{ "tooltip": "Somehow control the   density of the reverb." }],"init": "0.5","min": "0","max": "1","step": "0.025"},{"type": "vslider","label": "RoomSize","address": "/untitled/Freeverb/0x00/RoomSize","index": "12","meta": [{ "1": "" },{ "style": "knob" },{ "tooltip": "The room size   between 0 and 1 with 1 for the largest room." }],"init": "0.5","min": "0","max": "1","step": "0.025"},{"type": "vslider","label": "Stereo Spread","address": "/untitled/Freeverb/0x00/Stereo_Spread","index": "324424","meta": [{ "2": "" },{ "style": "knob" },{ "tooltip": "Spatial   spread between 0 and 1 with 1 for maximum spread." }],"init": "0.5","min": "0","max": "1","step": "0.01"}]},{"type": "vslider","label": "Wet","address": "/untitled/Freeverb/Wet","index": "32","meta": [{ "1": "" },{ "tooltip": "The amount of reverb applied to the signal   between 0 and 1 with 1 for the maximum amount of reverb." }],"init": "0.3333","min": "0","max": "1","step": "0.025"}]},{"type": "hslider","label": "Sharpness","address": "/untitled/Sharpness","index": "92","init": "0.5","min": "0","max": "1","step": "0.01"},{"type": "hslider","label": "Strike Position","address": "/untitled/Strike_Position","index": "40","init": "0.5","min": "0","max": "1","step": "0.01"},{"type": "hslider","label": "freq","address": "/untitled/freq","index": "132","init": "60","min": "10","max": "330","step": "0.5"},{"type": "button","label": "gate","address": "/untitled/gate","index": "76"}]}]}';
}
function getBase64Codeuntitled() { return "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L3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOiBbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi4iLCIvdG1wL3Nlc3Npb25zLzkyRUFFMDU1QkQzRDdCQzIwNUNGMzhFRUMxNUFDMkQ1MjUxODI0QzYvd2ViL3dhc21qcy13b3JrbGV0Il0sInNpemUiOiAiNTg2NzI0IiwiaW5wdXRzIjogIjAiLCJvdXRwdXRzIjogIjIiLCJtZXRhIjogWyB7ICJiYXNpY3MubGliL25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljcy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAiZGVsYXlzLmxpYi9uYW1lIjogIkZhdXN0IERlbGF5IExpYnJhcnkiIH0seyAiZGVsYXlzLmxpYi92ZXJzaW9uIjogIjAuMSIgfSx7ICJlbnZlbG9wZXMubGliL2F1dGhvciI6ICJHUkFNRSIgfSx7ICJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJlbnZlbG9wZXMubGliL25hbWUiOiAiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSIgfSx7ICJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgImZpbGVuYW1lIjogInVudGl0bGVkIiB9LHsgImZpbHRlcnMubGliL25hbWUiOiAiRmF1c3QgRmlsdGVycyBMaWJyYXJ5IiB9LHsgImZpbHRlcnMubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgIm1hdGhzLmxpYi9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHMubGliL2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzLmxpYi9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRocy5saWIvdmVyc2lvbiI6ICIyLjEiIH0seyAibmFtZSI6ICJ1bnRpdGxlZCIgfSx7ICJub2lzZXMubGliL25hbWUiOiAiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkiIH0seyAibm9pc2VzLmxpYi92ZXJzaW9uIjogIjAuMCIgfSx7ICJyZXZlcmJzLmxpYi9uYW1lIjogIkZhdXN0IFJldmVyYiBMaWJyYXJ5IiB9LHsgInJldmVyYnMubGliL3ZlcnNpb24iOiAiMC4wIiB9XSwidWkiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJ1bnRpdGxlZCIsIml0ZW1zIjogWyB7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiRnJlZXZlcmIiLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogIjB4MDAiLCJtZXRhIjogW3sgIjAiOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiRGFtcCIsImFkZHJlc3MiOiAiL3VudGl0bGVkL0ZyZWV2ZXJiLzB4MDAvRGFtcCIsImluZGV4IjogIjIwIiwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiU29tZWhvdyBjb250cm9sIHRoZSAgIGRlbnNpdHkgb2YgdGhlIHJldmVyYi4iIH1dLCJpbml0IjogIjAuNSIsIm1pbiI6ICIwIiwibWF4IjogIjEiLCJzdGVwIjogIjAuMDI1In0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJSb29tU2l6ZSIsImFkZHJlc3MiOiAiL3VudGl0bGVkL0ZyZWV2ZXJiLzB4MDAvUm9vbVNpemUiLCJpbmRleCI6ICIxMiIsIm1ldGEiOiBbeyAiMSI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ0b29sdGlwIjogIlRoZSByb29tIHNpemUgICBiZXR3ZWVuIDAgYW5kIDEgd2l0aCAxIGZvciB0aGUgbGFyZ2VzdCByb29tLiIgfV0sImluaXQiOiAiMC41IiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMjUifSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIlN0ZXJlbyBTcHJlYWQiLCJhZGRyZXNzIjogIi91bnRpdGxlZC9GcmVldmVyYi8weDAwL1N0ZXJlb19TcHJlYWQiLCJpbmRleCI6ICIzMjQ0MjQiLCJtZXRhIjogW3sgIjIiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidG9vbHRpcCI6ICJTcGF0aWFsICAgc3ByZWFkIGJldHdlZW4gMCBhbmQgMSB3aXRoIDEgZm9yIG1heGltdW0gc3ByZWFkLiIgfV0sImluaXQiOiAiMC41IiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMSJ9XX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJXZXQiLCJhZGRyZXNzIjogIi91bnRpdGxlZC9GcmVldmVyYi9XZXQiLCJpbmRleCI6ICIzMiIsIm1ldGEiOiBbeyAiMSI6ICIiIH0seyAidG9vbHRpcCI6ICJUaGUgYW1vdW50IG9mIHJldmVyYiBhcHBsaWVkIHRvIHRoZSBzaWduYWwgICBiZXR3ZWVuIDAgYW5kIDEgd2l0aCAxIGZvciB0aGUgbWF4aW11bSBhbW91bnQgb2YgcmV2ZXJiLiIgfV0sImluaXQiOiAiMC4zMzMzIiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMjUifV19LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiU2hhcnBuZXNzIiwiYWRkcmVzcyI6ICIvdW50aXRsZWQvU2hhcnBuZXNzIiwiaW5kZXgiOiAiOTIiLCJpbml0IjogIjAuNSIsIm1pbiI6ICIwIiwibWF4IjogIjEiLCJzdGVwIjogIjAuMDEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIlN0cmlrZSBQb3NpdGlvbiIsImFkZHJlc3MiOiAiL3VudGl0bGVkL1N0cmlrZV9Qb3NpdGlvbiIsImluZGV4IjogIjQwIiwiaW5pdCI6ICIwLjUiLCJtaW4iOiAiMCIsIm1heCI6ICIxIiwic3RlcCI6ICIwLjAxIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJmcmVxIiwiYWRkcmVzcyI6ICIvdW50aXRsZWQvZnJlcSIsImluZGV4IjogIjEzMiIsImluaXQiOiAiNjAiLCJtaW4iOiAiMTAiLCJtYXgiOiAiMzMwIiwic3RlcCI6ICIwLjUifSx7InR5cGUiOiAiYnV0dG9uIiwibGFiZWwiOiAiZ2F0ZSIsImFkZHJlc3MiOiAiL3VudGl0bGVkL2dhdGUiLCJpbmRleCI6ICI3NiJ9XX1dfQ=="; }

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
    

