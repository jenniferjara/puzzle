;(function(){
	window.addEventListener("load", inicio);
	var boton = document.getElementById("go");
	function inicio(){
		boton.addEventListener("click", play);
	}
	function play() {
		boton.classList.add("goClick");

		var cajas = document.getElementsByClassName("content");
		for (var i = 0, l = cajas.length; i < l; i++) {
			cajas[i].addEventListener("drop", soltar);
			cajas[i].addEventListener("dragover", arrastrar);
		}

		var piezas = document.getElementsByClassName("img");
		for (var a = 0, b = piezas.length; a < b; a++) {
			piezas[i].addEventListener("dragstart", empieza);
		}
	}

	function arrastrar(ev){
		ev.preventDefault();
	}

	function soltar(ev){
		ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    ev.target.appendChild(document.getElementById(data));
	}

	function empieza(ev){
		ev.dataTransfer.setData("text", ev.target.id);
	}

})();