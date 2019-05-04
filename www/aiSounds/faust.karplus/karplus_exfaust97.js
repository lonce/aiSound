
/*
Code generated with Faust version 2.15.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONkarplus_exfaust97() {
	return '{"name": "KarplusStrong","filename": "karplus_exfaust97","version": "2.15.10","compile_options": "-scal -ftz 2","library_list": ["/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/physmodels.lib","/usr/local/share/faust/signals.lib","/usr/local/share/faust/basics.lib","/usr/local/share/faust/maths.lib","/usr/local/share/faust/delays.lib","/usr/local/share/faust/routes.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/6555E2595420E43F613158D02883EF0E19A5EB56/web/wasmjs-worklet"],"size": "16484","inputs": "0","outputs": "2","meta": [ { "basics.lib/name": "Faust Basic Element Library" },{ "basics.lib/version": "0.0" },{ "copyright": "(c)Romain Michon, CCRMA (Stanford University), GRAME" },{ "delays.lib/name": "Faust Delay Library" },{ "delays.lib/version": "0.1" },{ "description": "Simple call of the Karplus-Strong model for the Faust physical modeling library" },{ "filename": "karplus_exfaust97" },{ "license": "MIT" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.1" },{ "name": "KarplusStrong" },{ "routes.lib/name": "Faust Signal Routing Library" },{ "routes.lib/version": "0.0" },{ "signals.lib/name": "Faust Signal Routing Library" },{ "signals.lib/version": "0.0" }],"ui": [ {"type": "vgroup","label": "karplus","items": [ {"type": "hgroup","label": "params","meta": [{ "0": "" }],"items": [ {"type": "hslider","label": "freq","address": "/karplus/params/freq","index": "8224","meta": [{ "0": "" },{ "style": "knob" }],"init": "440","min": "50","max": "1000","step": "0.01"},{"type": "hslider","label": "bend","address": "/karplus/params/bend","index": "8244","meta": [{ "1": "" },{ "hidden": "1" },{ "midi": "pitchwheel" },{ "style": "knob" }],"init": "1","min": "0","max": "10","step": "0.01"},{"type": "hslider","label": "damping","address": "/karplus/params/damping","index": "0","meta": [{ "1": "" },{ "midi": "ctrl 1" },{ "style": "knob" }],"init": "0.01","min": "0","max": "1","step": "0.01"},{"type": "hslider","label": "gain","address": "/karplus/params/gain","index": "8256","meta": [{ "2": "" },{ "style": "knob" }],"init": "0.8","min": "0","max": "1","step": "0.01"},{"type": "hslider","label": "sustain","address": "/karplus/params/sustain","index": "8228","meta": [{ "3": "" },{ "hidden": "1" },{ "midi": "ctrl 64" },{ "style": "knob" }],"init": "0","min": "0","max": "1","step": "1"}]},{"type": "button","label": "gate","address": "/karplus/gate","index": "8232","meta": [{ "1": "" }]}]}]}';
}
function getBase64Codekarplus_exfaust97() { return "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AWohBiAGQQJIBEAMAgwBCwsLQQAhBwNAAkBBzIABIAdBAnRqQwAAAAA4AgAgB0EBaiEHIAdBA0gEQAwCDAELCwtBACEIA0ACQEHYgAEgCEECdGpDAAAAADgCACAIQQFqIQggCEEDSARADAIMAQsLCwvHgICAAABBACABNgKQQEEAQwCAO0hDAACAP0EAKAKQQLKXljgClEBBAEORkBA8QQAqApRAlDgCmEBBAEPBwMA6QQAqApRAlDgCnEALkICAgAAAIAAgARAIIAAQCiAAEAcLw4CAgAAAQQBDCtcjPDgCAEEAQwAA3EM4AqBAQQBDAAAAADgCpEBBAEMAAAAAOAKoQEEAQwAAgD84ArRAQQBDzcxMPzgCwEALjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsL0pSAgAABAEEAC8sUeyJuYW1lIjogIkthcnBsdXNTdHJvbmciLCJmaWxlbmFtZSI6ICJrYXJwbHVzX2V4ZmF1c3Q5NyIsInZlcnNpb24iOiAiMi4xNS4xMCIsImNvbXBpbGVfb3B0aW9ucyI6ICItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOiBbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc3RkZmF1c3QubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9waHlzbW9kZWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZGVsYXlzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvcm91dGVzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiIsIi90bXAvc2Vzc2lvbnMvNjU1NUUyNTk1NDIwRTQzRjYxMzE1OEQwMjg4M0VGMEUxOUE1RUI1Ni93ZWIvd2FzbWpzLXdvcmtsZXQiXSwic2l6ZSI6ICIxNjQ4NCIsImlucHV0cyI6ICIwIiwib3V0cHV0cyI6ICIyIiwibWV0YSI6IFsgeyAiYmFzaWNzLmxpYi9uYW1lIjogIkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSIgfSx7ICJiYXNpY3MubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgImNvcHlyaWdodCI6ICIoYylSb21haW4gTWljaG9uLCBDQ1JNQSAoU3RhbmZvcmQgVW5pdmVyc2l0eSksIEdSQU1FIiB9LHsgImRlbGF5cy5saWIvbmFtZSI6ICJGYXVzdCBEZWxheSBMaWJyYXJ5IiB9LHsgImRlbGF5cy5saWIvdmVyc2lvbiI6ICIwLjEiIH0seyAiZGVzY3JpcHRpb24iOiAiU2ltcGxlIGNhbGwgb2YgdGhlIEthcnBsdXMtU3Ryb25nIG1vZGVsIGZvciB0aGUgRmF1c3QgcGh5c2ljYWwgbW9kZWxpbmcgbGlicmFyeSIgfSx7ICJmaWxlbmFtZSI6ICJrYXJwbHVzX2V4ZmF1c3Q5NyIgfSx7ICJsaWNlbnNlIjogIk1JVCIgfSx7ICJtYXRocy5saWIvYXV0aG9yIjogIkdSQU1FIiB9LHsgIm1hdGhzLmxpYi9jb3B5cmlnaHQiOiAiR1JBTUUiIH0seyAibWF0aHMubGliL2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJtYXRocy5saWIvbmFtZSI6ICJGYXVzdCBNYXRoIExpYnJhcnkiIH0seyAibWF0aHMubGliL3ZlcnNpb24iOiAiMi4xIiB9LHsgIm5hbWUiOiAiS2FycGx1c1N0cm9uZyIgfSx7ICJyb3V0ZXMubGliL25hbWUiOiAiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSIgfSx7ICJyb3V0ZXMubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgInNpZ25hbHMubGliL25hbWUiOiAiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSIgfSx7ICJzaWduYWxzLmxpYi92ZXJzaW9uIjogIjAuMCIgfV0sInVpIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAia2FycGx1cyIsIml0ZW1zIjogWyB7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAicGFyYW1zIiwibWV0YSI6IFt7ICIwIjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogImZyZXEiLCJhZGRyZXNzIjogIi9rYXJwbHVzL3BhcmFtcy9mcmVxIiwiaW5kZXgiOiAiODIyNCIsIm1ldGEiOiBbeyAiMCI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAiNDQwIiwibWluIjogIjUwIiwibWF4IjogIjEwMDAiLCJzdGVwIjogIjAuMDEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogImJlbmQiLCJhZGRyZXNzIjogIi9rYXJwbHVzL3BhcmFtcy9iZW5kIiwiaW5kZXgiOiAiODI0NCIsIm1ldGEiOiBbeyAiMSI6ICIiIH0seyAiaGlkZGVuIjogIjEiIH0seyAibWlkaSI6ICJwaXRjaHdoZWVsIiB9LHsgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogIjEiLCJtaW4iOiAiMCIsIm1heCI6ICIxMCIsInN0ZXAiOiAiMC4wMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiZGFtcGluZyIsImFkZHJlc3MiOiAiL2thcnBsdXMvcGFyYW1zL2RhbXBpbmciLCJpbmRleCI6ICIwIiwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJtaWRpIjogImN0cmwgMSIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6ICIwLjAxIiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiZ2FpbiIsImFkZHJlc3MiOiAiL2thcnBsdXMvcGFyYW1zL2dhaW4iLCJpbmRleCI6ICI4MjU2IiwibWV0YSI6IFt7ICIyIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6ICIwLjgiLCJtaW4iOiAiMCIsIm1heCI6ICIxIiwic3RlcCI6ICIwLjAxIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJzdXN0YWluIiwiYWRkcmVzcyI6ICIva2FycGx1cy9wYXJhbXMvc3VzdGFpbiIsImluZGV4IjogIjgyMjgiLCJtZXRhIjogW3sgIjMiOiAiIiB9LHsgImhpZGRlbiI6ICIxIiB9LHsgIm1pZGkiOiAiY3RybCA2NCIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6ICIwIiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMSJ9XX0seyJ0eXBlIjogImJ1dHRvbiIsImxhYmVsIjogImdhdGUiLCJhZGRyZXNzIjogIi9rYXJwbHVzL2dhdGUiLCJpbmRleCI6ICI4MjMyIiwibWV0YSI6IFt7ICIxIjogIiIgfV19XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2018
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class karplus_exfaust97Node extends AudioWorkletNode {

    constructor(context, baseURL, options) {

        var json_object = JSON.parse(getJSONkarplus_exfaust97());

        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";

        super(context, 'karplus_exfaust97', options);
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
        return getJSONkarplus_exfaust97();
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
                this.setParamValue(path, karplus_exfaust97Node.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
export default class karplus_exfaust97 {

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
            let real_url = (this.baseURL === "") ? "karplus_exfaust97-processor.js" : (this.baseURL + "/karplus_exfaust97-processor.js");
            this.context.audioWorklet.addModule(real_url).then(() => {
            this.node = new karplus_exfaust97Node(this.context, this.baseURL, {});
            this.node.onprocessorerror = () => { console.log('An error from karplus_exfaust97-processor was detected.');}
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
                        var element = createkarplus_exfaust97GUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createkarplus_exfaust97GUI(this.node);
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


    

