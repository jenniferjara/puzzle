window.addEventListener("load", function() {
	var box = document.getElementById("box");
	var img = document.getElementById("img");
	box.addEventListener("drop", function(ev){
		ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    ev.target.appendChild(document.getElementById(data));
	});
	box.addEventListener("dragover", function(ev){
		 ev.preventDefault();
	});

	img.addEventListener("dragstart", function(ev){
		img.className = "w-100";
		ev.dataTransfer.setData("text", ev.target.id);
	});

});