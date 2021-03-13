import  * as BRad from './border-rad.js'

let sel = document.getElementById('opt');
sel.addEventListener('change',e=>{
		if(e.target.value == "brRad"){
			if(document.getElementById('one')){
				document.getElementById('one').remove();
				document.getElementById('two').remove();
				BRad.borderRad();
			} else {
				BRad.borderRad();
			}
			
		}
	});