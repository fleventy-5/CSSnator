import  * as BRad from './border-rad.js'

let sel = document.getElementById('opt');
sel.addEventListener('change',e=>{
		if(e.target.value == 'Border-Radius'){
			BRad.borderRad();
		}
	});