window.addEventListener("load", function() {
	var box = document.getElementById("box");
	//var boxUno = document.getElementById("boxUno");
	//var boxDos = document.getElementById("boxDos");
	var img = document.getElementById("img");
	var imgUno = document.getElementById("imgUno");
	var imgDos = document.getElementById("imgDos");

	box.addEventListener("drop", function(ev){
		ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    ev.target.appendChild(document.getElementById(data));
	});
	box.addEventListener("dragover", function(ev){
		 ev.preventDefault();
	});

	img.addEventListener("dragstart", function(ev){
		imagen(ev);
	});
	imgUno.addEventListener("dragstart", function(ev){
		imagen(ev);
	});
	imgDos.addEventListener("dragstart", function(ev){
		imagen(ev);
	});
	
	function imagen (ev){
		ev.dataTransfer.setData("text", ev.target.id);
	}
});