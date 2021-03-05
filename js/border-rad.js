export function borderRad(){
	document.querySelector('.input-container').insertAdjacentHTML("afterbegin",
		"<p><input type='text' class = 'input' id = 'top-l' placeholder='Top left corner'><input type='text' class = 'input' id = 'top-r' placeholder='Top right corner'><input type='text' class = 'input' id = 'bot-l' placeholder='Bottom left corner'><input type='text' class = 'input' id = 'bot-r' placeholder='Bottom right corner'></p>");
	
	document.querySelector('.output-container').insertAdjacentHTML("afterbegin","<p id = 'box'></p><p><input type='text' id = 'cpytxt'><select id ='bordR'><option  value = 'px' selected>px</option><option value = '%' >%</option></select></p><button id = 'copy' class='btn btn-info'>COPY</button>");




	let borderTL = 10;
	let borderTR = 10;
	let borderBL = 10;
	let borderBR = 10;
	let size = document.getElementById('bordR').value;
	document.getElementById('cpytxt').value = " border-radius: "+borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size+" ;";

	let box = document.getElementById('box');
	box.style.borderRadius = borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size;

	let cpy = document.getElementById('copy');
	cpy.addEventListener('click',function(){
		let txt = document.getElementById('cpytxt');
		txt.select();
		txt.setSelectionRange(0,99999);
		document.execCommand("copy");
	});

	let sel = document.getElementById('bordR');

	sel.addEventListener('change',function(){
		size = sel.value;
		document.getElementById('cpytxt').value = " border-radius: "+borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size+" ;";
		box.style.borderRadius = borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size
	})

	let inp1 = document.getElementById('top-l');
	inp1.addEventListener("input",function(){
		borderTL = inp1.value;
		document.getElementById('cpytxt').value = " border-radius: "+borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size+" ;";
		box.style.borderRadius = borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size
	})

	let inp2 = document.getElementById('top-r');
	inp2.addEventListener("input",function(){
		borderTR = inp2.value;
		document.getElementById('cpytxt').value = " border-radius: "+borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size+" ;";
		box.style.borderRadius = borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size
	})

	let inp3 = document.getElementById('bot-l');
	inp3.addEventListener("input",function(){
		borderBL = inp3.value;
		document.getElementById('cpytxt').value = " border-radius: "+borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size+" ;";
		box.style.borderRadius = borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size
	})

	let inp4 = document.getElementById('bot-r');
	inp4.addEventListener("input",function(){
		borderBR = inp4.value;
		document.getElementById('cpytxt').value = " border-radius: "+borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size+" ;";
		box.style.borderRadius = borderTL+size+" "+borderTR+size+" "+borderBL+size+" "+borderBR+size
	})

}