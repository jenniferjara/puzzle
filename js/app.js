window.addEventListener("load", function() {
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
//2
	box2.addEventListener("drop", function(ev){
		uno(ev);
	});

	box2.addEventListener("dragover", function(ev){
		 ev.preventDefault();
	});
//3
	box3.addEventListener("drop", function(ev){
		uno(ev);
	});

	box3.addEventListener("dragover", function(ev){
		 ev.preventDefault();
	});
//4
	box4.addEventListener("drop", function(ev){
		uno(ev);
	});

	box4.addEventListener("dragover", function(ev){
		 ev.preventDefault();
	});
	function uno(ev){
		ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    ev.target.appendChild(document.getElementById(data));
	}
//imgs

	img1.addEventListener("dragstart", function(ev){
		imagen(ev);
	});
	img2.addEventListener("dragstart", function(ev){
		imagen(ev);
	});
	img3.addEventListener("dragstart", function(ev){
		imagen(ev);
	});
	img4.addEventListener("dragstart", function(ev){
		imagen(ev);
	});
	function imagen(ev){
		ev.dataTransfer.setData("text", ev.target.id);
	}

});