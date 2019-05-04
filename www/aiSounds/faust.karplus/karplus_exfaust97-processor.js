
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

// Monophonic Faust DSP
class karplus_exfaust97Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            karplus_exfaust97Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            karplus_exfaust97Processor.parse_items(group.items, obj, callback);
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
            karplus_exfaust97Processor.parse_items(item.items, obj, callback);
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
            karplus_exfaust97Processor.parse_items(item.items, obj, callback);
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
                nUint24 |= karplus_exfaust97Processor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        karplus_exfaust97Processor.parse_ui(JSON.parse(getJSONkarplus_exfaust97()).ui, params, karplus_exfaust97Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONkarplus_exfaust97());

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
        
        this.karplus_exfaust97_instance = new WebAssembly.Instance(karplus_exfaust97Processor.wasm_module, karplus_exfaust97Processor.importObject);
  	   	this.factory = this.karplus_exfaust97_instance.exports;
        this.HEAP = this.karplus_exfaust97_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * karplus_exfaust97Processor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((karplus_exfaust97Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + karplus_exfaust97Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((karplus_exfaust97Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + karplus_exfaust97Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            karplus_exfaust97Processor.parse_ui(this.json_object.ui, this, karplus_exfaust97Processor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * karplus_exfaust97Processor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, karplus_exfaust97Processor.buffer_size, this.ins, this.outs);
        
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
karplus_exfaust97Processor.buffer_size = 128;

karplus_exfaust97Processor.importObject = {
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
    if (karplus_exfaust97Processor.wasm_module == undefined) {
        karplus_exfaust97Processor.wasm_module = new WebAssembly.Module(karplus_exfaust97Processor.atob(getBase64Codekarplus_exfaust97()));
        registerProcessor('karplus_exfaust97', karplus_exfaust97Processor);
    }
} catch (e) {
    console.log(e); console.log("Faust karplus_exfaust97 cannot be loaded or compiled");
}

