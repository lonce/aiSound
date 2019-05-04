
/*
Code generated with Faust version 2.15.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONexfaust21() {
	return '{"name": "exfaust21","filename": "exfaust21","version": "2.15.10","compile_options": "-scal -ftz 2","library_list": ["/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/envelopes.lib","/usr/local/share/faust/maths.lib","/usr/local/share/faust/basics.lib","/usr/local/share/faust/signals.lib","/usr/local/share/faust/oscillators.lib","/usr/local/share/faust/vaeffects.lib","/usr/local/share/faust/filters.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/5AD78EC2E4531FDCF93483633671F4A028A728EA/web/wasmjs-worklet"],"size": "16636","inputs": "0","outputs": "1","meta": [ { "basics.lib/name": "Faust Basic Element Library" },{ "basics.lib/version": "0.0" },{ "envelopes.lib/author": "GRAME" },{ "envelopes.lib/copyright": "GRAME" },{ "envelopes.lib/license": "LGPL with exception" },{ "envelopes.lib/name": "Faust Envelope Library" },{ "envelopes.lib/version": "0.0" },{ "filename": "exfaust21" },{ "filters.lib/name": "Faust Filters Library" },{ "filters.lib/version": "0.0" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.1" },{ "name": "exfaust21" },{ "oscillators.lib/name": "Faust Oscillator Library" },{ "oscillators.lib/version": "0.0" },{ "signals.lib/name": "Faust Signal Routing Library" },{ "signals.lib/version": "0.0" },{ "vaeffects.lib/name": "Faust Virtual Analog Filter Effect Library" },{ "vaeffects.lib/version": "0.0" }],"ui": [ {"type": "vgroup","label": "exfaust21","items": [ {"type": "hslider","label": "attack","address": "/exfaust21/attack","index": "44","meta": [{ "midi": "ctrl 73" }],"init": "4","min": "0.1","max": "400","step": "0.001"},{"type": "hslider","label": "bend","address": "/exfaust21/bend","index": "84","meta": [{ "midi": "pitchwheel" }],"init": "1","min": "0.001","max": "10","step": "0.01"},{"type": "hslider","label": "decay","address": "/exfaust21/decay","index": "48","meta": [{ "midi": "ctrl 76" }],"init": "60","min": "0.1","max": "400","step": "0.001"},{"type": "hslider","label": "envMod","address": "/exfaust21/envMod","index": "16572","meta": [{ "midi": "ctrl 75" }],"init": "50","min": "0","max": "100","step": "0.01"},{"type": "hslider","label": "fc","address": "/exfaust21/fc","index": "16556","meta": [{ "midi": "ctrl 74" }],"init": "660","min": "15","max": "12000","step": "0.001"},{"type": "nentry","label": "freq","address": "/exfaust21/freq","index": "88","meta": [{ "unit": "Hz" }],"init": "330","min": "20","max": "2000","step": "1"},{"type": "nentry","label": "gain","address": "/exfaust21/gain","index": "0","init": "0.5","min": "0","max": "0.5","step": "0.01"},{"type": "button","label": "gate","address": "/exfaust21/gate","index": "24"},{"type": "hslider","label": "lfoFreq","address": "/exfaust21/lfoFreq","index": "104","meta": [{ "midi": "ctrl 78" }],"init": "6","min": "0.001","max": "10","step": "0.001"},{"type": "hslider","label": "modwheel","address": "/exfaust21/modwheel","index": "92","meta": [{ "midi": "ctrl 1" }],"init": "0.35","min": "0","max": "0.5","step": "0.001"},{"type": "hslider","label": "release","address": "/exfaust21/release","index": "28","meta": [{ "midi": "ctrl 72" }],"init": "100","min": "0.1","max": "400","step": "0.001"},{"type": "hslider","label": "resonance","address": "/exfaust21/resonance","index": "16584","meta": [{ "midi": "ctrl 71" }],"init": "0.5","min": "0","max": "1","step": "0.001"},{"type": "hslider","label": "sustain","address": "/exfaust21/sustain","index": "52","meta": [{ "midi": "ctrl 77" }],"init": "1","min": "0","max": "1","step": "0.001"},{"type": "hslider","label": "tracking","address": "/exfaust21/tracking","index": "16568","meta": [{ "midi": "ctrl 79" }],"init": "1","min": "0","max": "2","step": "0.001"},{"type": "hslider","label": "waveform","address": "/exfaust21/waveform","index": "68","meta": [{ "midi": "ctrl 70" }],"init": "0.5","min": "0","max": "1","step": "0.001"}]}]}';
}
function getBase64Codeexfaust21() { return "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Q0Y5MzQ4MzYzMzY3MUY0QTAyOEE3MjhFQS93ZWIvd2FzbWpzLXdvcmtsZXQiXSwic2l6ZSI6ICIxNjYzNiIsImlucHV0cyI6ICIwIiwib3V0cHV0cyI6ICIxIiwibWV0YSI6IFsgeyAiYmFzaWNzLmxpYi9uYW1lIjogIkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSIgfSx7ICJiYXNpY3MubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgImVudmVsb3Blcy5saWIvYXV0aG9yIjogIkdSQU1FIiB9LHsgImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgImVudmVsb3Blcy5saWIvbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgImVudmVsb3Blcy5saWIvbmFtZSI6ICJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5IiB9LHsgImVudmVsb3Blcy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAiZmlsZW5hbWUiOiAiZXhmYXVzdDIxIiB9LHsgImZpbHRlcnMubGliL25hbWUiOiAiRmF1c3QgRmlsdGVycyBMaWJyYXJ5IiB9LHsgImZpbHRlcnMubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgIm1hdGhzLmxpYi9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHMubGliL2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzLmxpYi9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRocy5saWIvdmVyc2lvbiI6ICIyLjEiIH0seyAibmFtZSI6ICJleGZhdXN0MjEiIH0seyAib3NjaWxsYXRvcnMubGliL25hbWUiOiAiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5IiB9LHsgIm9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjogIjAuMCIgfSx7ICJzaWduYWxzLmxpYi9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFscy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAidmFlZmZlY3RzLmxpYi9uYW1lIjogIkZhdXN0IFZpcnR1YWwgQW5hbG9nIEZpbHRlciBFZmZlY3QgTGlicmFyeSIgfSx7ICJ2YWVmZmVjdHMubGliL3ZlcnNpb24iOiAiMC4wIiB9XSwidWkiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJleGZhdXN0MjEiLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJhdHRhY2siLCJhZGRyZXNzIjogIi9leGZhdXN0MjEvYXR0YWNrIiwiaW5kZXgiOiAiNDQiLCJtZXRhIjogW3sgIm1pZGkiOiAiY3RybCA3MyIgfV0sImluaXQiOiAiNCIsIm1pbiI6ICIwLjEiLCJtYXgiOiAiNDAwIiwic3RlcCI6ICIwLjAwMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiYmVuZCIsImFkZHJlc3MiOiAiL2V4ZmF1c3QyMS9iZW5kIiwiaW5kZXgiOiAiODQiLCJtZXRhIjogW3sgIm1pZGkiOiAicGl0Y2h3aGVlbCIgfV0sImluaXQiOiAiMSIsIm1pbiI6ICIwLjAwMSIsIm1heCI6ICIxMCIsInN0ZXAiOiAiMC4wMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiZGVjYXkiLCJhZGRyZXNzIjogIi9leGZhdXN0MjEvZGVjYXkiLCJpbmRleCI6ICI0OCIsIm1ldGEiOiBbeyAibWlkaSI6ICJjdHJsIDc2IiB9XSwiaW5pdCI6ICI2MCIsIm1pbiI6ICIwLjEiLCJtYXgiOiAiNDAwIiwic3RlcCI6ICIwLjAwMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiZW52TW9kIiwiYWRkcmVzcyI6ICIvZXhmYXVzdDIxL2Vudk1vZCIsImluZGV4IjogIjE2NTcyIiwibWV0YSI6IFt7ICJtaWRpIjogImN0cmwgNzUiIH1dLCJpbml0IjogIjUwIiwibWluIjogIjAiLCJtYXgiOiAiMTAwIiwic3RlcCI6ICIwLjAxIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJmYyIsImFkZHJlc3MiOiAiL2V4ZmF1c3QyMS9mYyIsImluZGV4IjogIjE2NTU2IiwibWV0YSI6IFt7ICJtaWRpIjogImN0cmwgNzQiIH1dLCJpbml0IjogIjY2MCIsIm1pbiI6ICIxNSIsIm1heCI6ICIxMjAwMCIsInN0ZXAiOiAiMC4wMDEifSx7InR5cGUiOiAibmVudHJ5IiwibGFiZWwiOiAiZnJlcSIsImFkZHJlc3MiOiAiL2V4ZmF1c3QyMS9mcmVxIiwiaW5kZXgiOiAiODgiLCJtZXRhIjogW3sgInVuaXQiOiAiSHoiIH1dLCJpbml0IjogIjMzMCIsIm1pbiI6ICIyMCIsIm1heCI6ICIyMDAwIiwic3RlcCI6ICIxIn0seyJ0eXBlIjogIm5lbnRyeSIsImxhYmVsIjogImdhaW4iLCJhZGRyZXNzIjogIi9leGZhdXN0MjEvZ2FpbiIsImluZGV4IjogIjAiLCJpbml0IjogIjAuNSIsIm1pbiI6ICIwIiwibWF4IjogIjAuNSIsInN0ZXAiOiAiMC4wMSJ9LHsidHlwZSI6ICJidXR0b24iLCJsYWJlbCI6ICJnYXRlIiwiYWRkcmVzcyI6ICIvZXhmYXVzdDIxL2dhdGUiLCJpbmRleCI6ICIyNCJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAibGZvRnJlcSIsImFkZHJlc3MiOiAiL2V4ZmF1c3QyMS9sZm9GcmVxIiwiaW5kZXgiOiAiMTA0IiwibWV0YSI6IFt7ICJtaWRpIjogImN0cmwgNzgiIH1dLCJpbml0IjogIjYiLCJtaW4iOiAiMC4wMDEiLCJtYXgiOiAiMTAiLCJzdGVwIjogIjAuMDAxIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJtb2R3aGVlbCIsImFkZHJlc3MiOiAiL2V4ZmF1c3QyMS9tb2R3aGVlbCIsImluZGV4IjogIjkyIiwibWV0YSI6IFt7ICJtaWRpIjogImN0cmwgMSIgfV0sImluaXQiOiAiMC4zNSIsIm1pbiI6ICIwIiwibWF4IjogIjAuNSIsInN0ZXAiOiAiMC4wMDEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogInJlbGVhc2UiLCJhZGRyZXNzIjogIi9leGZhdXN0MjEvcmVsZWFzZSIsImluZGV4IjogIjI4IiwibWV0YSI6IFt7ICJtaWRpIjogImN0cmwgNzIiIH1dLCJpbml0IjogIjEwMCIsIm1pbiI6ICIwLjEiLCJtYXgiOiAiNDAwIiwic3RlcCI6ICIwLjAwMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAicmVzb25hbmNlIiwiYWRkcmVzcyI6ICIvZXhmYXVzdDIxL3Jlc29uYW5jZSIsImluZGV4IjogIjE2NTg0IiwibWV0YSI6IFt7ICJtaWRpIjogImN0cmwgNzEiIH1dLCJpbml0IjogIjAuNSIsIm1pbiI6ICIwIiwibWF4IjogIjEiLCJzdGVwIjogIjAuMDAxIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJzdXN0YWluIiwiYWRkcmVzcyI6ICIvZXhmYXVzdDIxL3N1c3RhaW4iLCJpbmRleCI6ICI1MiIsIm1ldGEiOiBbeyAibWlkaSI6ICJjdHJsIDc3IiB9XSwiaW5pdCI6ICIxIiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMDEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogInRyYWNraW5nIiwiYWRkcmVzcyI6ICIvZXhmYXVzdDIxL3RyYWNraW5nIiwiaW5kZXgiOiAiMTY1NjgiLCJtZXRhIjogW3sgIm1pZGkiOiAiY3RybCA3OSIgfV0sImluaXQiOiAiMSIsIm1pbiI6ICIwIiwibWF4IjogIjIiLCJzdGVwIjogIjAuMDAxIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJ3YXZlZm9ybSIsImFkZHJlc3MiOiAiL2V4ZmF1c3QyMS93YXZlZm9ybSIsImluZGV4IjogIjY4IiwibWV0YSI6IFt7ICJtaWRpIjogImN0cmwgNzAiIH1dLCJpbml0IjogIjAuNSIsIm1pbiI6ICIwIiwibWF4IjogIjEiLCJzdGVwIjogIjAuMDAxIn1dfV19"; }

/*
 faust2wasm: GRAME 2017-2018
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class exfaust21Node extends AudioWorkletNode {

    constructor(context, baseURL, options) {

        var json_object = JSON.parse(getJSONexfaust21());

        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";

        super(context, 'exfaust21', options);
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
        return getJSONexfaust21();
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
                this.setParamValue(path, exfaust21Node.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
export default class exfaust21 {

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
            let real_url = (this.baseURL === "") ? "exfaust21-processor.js" : (this.baseURL + "/exfaust21-processor.js");
            this.context.audioWorklet.addModule(real_url).then(() => {
            this.node = new exfaust21Node(this.context, this.baseURL, {});
            this.node.onprocessorerror = () => { console.log('An error from exfaust21-processor was detected.');}
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
                        var element = createexfaust21GUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createexfaust21GUI(this.node);
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

    

