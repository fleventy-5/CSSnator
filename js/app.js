

let btn = document.querySelector('.dropbtn')
btn.onclick = function(){
	document.querySelector('.dropdown-content').classList.add("show")
}
window.onclick = function(e){
	if(!e.target.matches('.dropbtn')){
		document.querySelector('.dropdown-content').classList.remove("show")	
	}
}