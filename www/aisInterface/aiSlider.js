/*
	Creates a GUI for aiSound parameters.
	For range pareters:
		slider, textbox (noneditable), param_name
	For text parameters:
		textbox (editable), param_name
*/
export default function(snd, pnum, w, normval=null){
	let compObject=w.document.createElement("object")
	let inp=w.document.createElement("input")//, { type : 'button', value:'play' });
	compObject.appendChild(inp)

	let inplen=160;
	let vboxlen=40;
	let margin=5

	

	if (  snd.getParam(pnum,"type")=='range' ) {
		inp.setAttribute('type', 'range');
		inp.setAttribute('min', '0');
		inp.setAttribute('max', '1');
		inp.setAttribute('step', '.01');
		// either get default from parameter, or set it with provided normal
		if (normval==null){
			inp.setAttribute('value', snd.getParam(pnum,"normval"));
		}else{
			inp.setAttribute('value', normval);
			snd.setParamNorm(snd.getParam(pnum,"name"), normval);
		}
		inp.setAttribute('id', snd.getParam(pnum,"name"));
		inp.style.width=inplen.toString();;
		inp.style.margin=margin.toString();;

		// Create a text box to display (unnormalized) parameter value next to the slider
		let vbox = w.document.createElement("input");
		compObject.appendChild(vbox)

		vbox.setAttribute('type', 'text');
		vbox.setAttribute('readOnly', 'true');
		vbox.setAttribute('value', snd.getParam(pnum));
		vbox.style.backgroundColor = "Gainsboro";
		
		let foo=vboxlen.toString();
		vbox.style.width=vboxlen.toString();
		vbox.style.margin=margin.toString();;

		

		inp.addEventListener('input',function(e){
			snd.setParamNorm(e.target.id, e.target.value)
			vbox.setAttribute('value', snd.getParam(pnum));
		});
	} 

	if ( snd.getParam(pnum,"type")=='string' || snd.getParam(pnum,"type")=='url') {
		inp.setAttribute('type', 'text');
		inp.setAttribute('id', snd.getParam(pnum,"name"));
		inp.setAttribute('value', snd.getParam(pnum));

		let foo=(inplen+vboxlen+2*margin).toString();
		inp.style.width=(inplen+vboxlen+2*margin).toString(); 
		inp.style.margin=margin.toString();;

		inp.addEventListener('change',function(e){
			snd.setParam(e.target.id, e.target.value)
		});
	}


	let lab= w.document.createElement("label")
	compObject.appendChild(lab);

	lab.setAttribute('for', inp.id);
	lab.innerHTML= snd.getParam(pnum,"name");
	

	// getter/setter for slider value
	Object.defineProperty(compObject, 'value', {
		get: function() {return inp.value},
		set: function(val) {inp.value=val}
	});

	
	return compObject;
}