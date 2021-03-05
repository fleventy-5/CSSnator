export function borderRad(){
	document.querySelector('.input-container').insertAdjacentHTML("afterbegin",
		"<p><input type='text' class = 'input' id = 'top-l' placeholder='Top left corner'><input type='text' class = 'input' id = 'top-r' placeholder='Top right corner'><input type='text' class = 'input' id = 'bot-l' placeholder='Bottom left corner'><input type='text' class = 'input' id = 'bot-r' placeholder='Bottom right corner'></p>");
	
	document.querySelector('.output-container').insertAdjacentHTML("afterbegin","<p id = 'box'><p>");

}