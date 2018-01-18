$("h3.back").on("click",function(){
	if($(this).next().hasClass("open")){
		$(this).next().toggleClass("open");
	}else{
		stop();
		$(this).next().toggleClass("open");
	}
})

function stop(){
	$("div.border").removeClass("open");
}


// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
$(".fixSize").click(function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
});


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}




