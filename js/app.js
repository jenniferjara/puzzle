window.addEventListener("load", inicio);
var boton = document.getElementById("go");
function inicio(){
	boton.addEventListener("click", play);
}

function play() {
	boton.classList.add("goClick");
	var box1 = document.getElementById("box1");
	var box2 = document.getElementById("box2");
	var box3 = document.getElementById("box3");
	var box4 = document.getElementById("box4");

	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	var img4 = document.getElementById("img4");
	
	box1.addEventListener("drop", function(ev){
		uno(ev);
	});
	box1.addEventListener("dragover", function(ev){
		 ev.preventDefault();
	});

	box2.addEventListener("drop", function(ev){
		uno(ev);
	});
	box2.addEventListener("dragover", function(ev){
		 ev.preventDefault();
	});

	box3.addEventListener("drop", function(ev){
		uno(ev);
	});
	box3.addEventListener("dragover", function(ev){
		 ev.preventDefault();
	});

	box4.addEventListener("drop", function(ev){
		uno(ev);
	});
	box4.addEventListener("dragover", function(ev){
		 ev.preventDefault();
	});

	img1.addEventListener("dragstart", function(ev){
		imgStart(ev);
	});
	img2.addEventListener("dragstart", function(ev){
		imgStart(ev);
	});
	img3.addEventListener("dragstart", function(ev){
		imgStart(ev);
	});
	img4.addEventListener("dragstart", function(ev){
		imgStart(ev);
	});

	function uno(ev){
		ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    ev.target.appendChild(document.getElementById(data));
	}

	function imgStart(ev){
		ev.dataTransfer.setData("text", ev.target.id);
	}
}