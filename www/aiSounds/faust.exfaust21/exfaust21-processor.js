
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

// Monophonic Faust DSP
class exfaust21Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            exfaust21Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            exfaust21Processor.parse_items(group.items, obj, callback);
        }
    }
    
    static parse_items(items, obj, callback)
    {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }
    
    static parse_item1(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            exfaust21Processor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            obj.push({ name: item.address,
                     defaultValue: item.init,
                     minValue: item.min,
                     maxValue: item.max });
        }
    }
    
    static parse_item2(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            exfaust21Processor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            obj.soundfile_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        }
    }
    
    static b64ToUint6(nChr)
    {
        return nChr > 64 && nChr < 91 ?
        nChr - 65
        : nChr > 96 && nChr < 123 ?
        nChr - 71
        : nChr > 47 && nChr < 58 ?
        nChr + 4
        : nChr === 43 ?
        62
        : nChr === 47 ?
        63
        :
        0;
    }
    
    static atob(sBase64, nBlocksSize)
    {
        if (typeof atob === 'function') {
            return atob(sBase64);
        } else {
            
            var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, "");
            var nInLen = sB64Enc.length;
            var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
            var taBytes = new Uint8Array(nOutLen);
            
            for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= exfaust21Processor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return taBytes.buffer;
        }
    }
   
    static get parameterDescriptors() 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        exfaust21Processor.parse_ui(JSON.parse(getJSONexfaust21()).ui, params, exfaust21Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONexfaust21());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        this.integer_size = 4;
        
        this.exfaust21_instance = new WebAssembly.Instance(exfaust21Processor.wasm_module, exfaust21Processor.importObject);
  	   	this.factory = this.exfaust21_instance.exports;
        this.HEAP = this.exfaust21_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];
        
        // soundfile items
        this.soundfile_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * exfaust21Processor.buffer_size * this.sample_size);
        
        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];
     
        // Send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }
        
        this.loadFile = function (sound_index, sound_ptr, length, sample_rate, channels, buffers)
        {
            /*
             Soundfile layout:
            
                FAUSTFLOAT** fBuffers;
                int fLength;
                int fSampleRate;
                int fChannels;
             
                ===========
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                ===========
            */
            
            var size_of_soundfile = this.ptr_size + (this.integer_size * 3);  // fBuffers, fLength, fSampleRate, fChannels
            
            //console.log("sound_ptr " + sound_ptr);
            //console.log("size_of_soundfile " + size_of_soundfile);
            
            // end of sounfile
            var end_of_soundfile_ptr = sound_ptr + size_of_soundfile;
            
            this.HEAP32[sound_ptr >> 2] = end_of_soundfile_ptr;
            this.HEAP32[(sound_ptr + 4) >> 2] = length;      // fLength
            this.HEAP32[(sound_ptr + 8) >> 2] = sample_rate; // fSampleRate
            this.HEAP32[(sound_ptr + 12) >> 2] = channels;   // fChannels
            
            //console.log("end_of_soundfile_ptr " + end_of_soundfile_ptr);
            
            // Setup soundfile pointers
            var start_of_soundfile_data_ptr = end_of_soundfile_ptr + this.ptr_size * channels;
            
            for (var i = 0; i < channels; i++) {
                this.HEAP32[(end_of_soundfile_ptr + (i * this.ptr_size)) >> 2] = start_of_soundfile_data_ptr + (i * length * this.sample_size);
            }
            
            // Setup soundfile buffer
            for (var i = 0; i < channels; i++) {
                
                // start of sound buffer
                var start_of_buffer_ptr = start_of_soundfile_data_ptr + (i * length * this.sample_size);
                
                // generate a 440 Hz signal
                for (var j = 0; j < length; j++) {
                    this.HEAPF32[(start_of_buffer_ptr + (j * this.sample_size)) >> 2] = 0.8 * Math.sin((j/length)*2*Math.PI);
                }
            }
            
            // Setup fSoundfile fields in the DSP structure
            //console.log("sound_index " + sound_index);
            //console.log("this.pathTable[this.soundfile_items[sound_index]] " + this.pathTable[this.soundfile_items[sound_index]]);
            
            this.HEAP32[this.pathTable[this.soundfile_items[sound_index]] >> 2] = sound_ptr;
            
            /*
            console.log("start_of_soundfile_data_ptr " + start_of_soundfile_data_ptr);
            console.log("length " + length);
            console.log("channels " + channels);
            console.log("this.sample_size " + this.sample_size);
            console.log("END " + (start_of_soundfile_data_ptr + (channels * length * this.sample_size)));
            */
            
            // End of buffer data;
            return start_of_soundfile_data_ptr + (channels * length * this.sample_size);
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((exfaust21Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + exfaust21Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((exfaust21Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + exfaust21Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            exfaust21Processor.parse_ui(this.json_object.ui, this, exfaust21Processor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * exfaust21Processor.buffer_size * this.sample_size);
            
            var sound_ptr1 = this.soundfile_ptr;
            var sound_ptr2 = this.loadFile(0, sound_ptr1, 44100/700, 44100, 2, null);
            var sound_ptr3 = this.loadFile(1, sound_ptr2, 44100/500, 44100, 2, null);
            */
             
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.setParamValue = function (path, val)
        {
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
        }

        // Init resulting DSP
        this.initAux();
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Check inputs
        if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
            //console.log("Process output error");
            return true;
        }
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
        
        /*
        TODO: sample accurate control change is not yet handled
        When no automation occurs, params[i][1] has a length of 1,
        otherwise params[i][1] has a length of 128 with possible control change each sample
    	*/
        
        // Update controls
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, exfaust21Processor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals
exfaust21Processor.buffer_size = 128;

exfaust21Processor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        // Integer version
        _abs: Math.abs,
        
        // Float version
        _acosf: Math.acos,
        _asinf: Math.asin,
        _atanf: Math.atan,
        _atan2f: Math.atan2,
        _ceilf: Math.ceil,
        _cosf: Math.cos,
        _expf: Math.exp,
        _floorf: Math.floor,
        _fmodf: function(x, y) { return x % y; },
        _logf: Math.log,
        _log10f: Math.log10,
        _max_f: Math.max,
        _min_f: Math.min,
        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        _powf: Math.pow,
        _roundf: Math.fround,
        _sinf: Math.sin,
        _sqrtf: Math.sqrt,
        _tanf: Math.tan,
           
        // Double version
        _acos: Math.acos,
        _asin: Math.asin,
        _atan: Math.atan,
        _atan2: Math.atan2,
        _ceil: Math.ceil,
        _cos: Math.cos,
        _exp: Math.exp,
        _floor: Math.floor,
        _fmod: function(x, y) { return x % y; },
        _log: Math.log,
        _log10: Math.log10,
        _max_: Math.max,
        _min_: Math.min,
        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
        _pow: Math.pow,
        _round: Math.fround,
        _sin: Math.sin,
        _sqrt: Math.sqrt,
        _tan: Math.tan,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    if (exfaust21Processor.wasm_module == undefined) {
        exfaust21Processor.wasm_module = new WebAssembly.Module(exfaust21Processor.atob(getBase64Codeexfaust21()));
        registerProcessor('exfaust21', exfaust21Processor);
    }
} catch (e) {
    console.log(e); console.log("Faust exfaust21 cannot be loaded or compiled");
}

