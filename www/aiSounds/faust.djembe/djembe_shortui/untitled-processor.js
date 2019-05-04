
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

// Monophonic Faust DSP
class untitledProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            untitledProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            untitledProcessor.parse_items(group.items, obj, callback);
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
            untitledProcessor.parse_items(item.items, obj, callback);
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
            untitledProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= untitledProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        untitledProcessor.parse_ui(JSON.parse(getJSONuntitled()).ui, params, untitledProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONuntitled());

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
        
        this.untitled_instance = new WebAssembly.Instance(untitledProcessor.wasm_module, untitledProcessor.importObject);
  	   	this.factory = this.untitled_instance.exports;
        this.HEAP = this.untitled_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * untitledProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((untitledProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + untitledProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((untitledProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + untitledProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            untitledProcessor.parse_ui(this.json_object.ui, this, untitledProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * untitledProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, untitledProcessor.buffer_size, this.ins, this.outs);
        
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
untitledProcessor.buffer_size = 128;

untitledProcessor.importObject = {
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
    if (untitledProcessor.wasm_module == undefined) {
        untitledProcessor.wasm_module = new WebAssembly.Module(untitledProcessor.atob(getBase64Codeuntitled()));
        registerProcessor('untitled', untitledProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust untitled cannot be loaded or compiled");
}

