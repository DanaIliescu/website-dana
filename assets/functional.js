window.onload = function() {
  showContent();
  smoothScroll();
  loadImages();
  myLoop();
};

//fade in the home page
function showContent() {
  $('#page_container').removeClass('fade-out'); //fade-in the body
  setTimeout(function() {$('#hello_title').removeClass('fade-out');}, 500); //fade-in the title(slow)
}

//add smooth scroll effect when jumping to sections
function smoothScroll() {
  var $root = $('html, body');
  $('a.scrolly').bind('click', function(event) {
      var $anchor = $(this);
      $root.stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });
}

//STORE PICTURES IN ARRAY
var imgArray = [];
function loadImages(){
	var folder = "assets/img/";
	$.ajax({
    	url : folder,
    	async: false,
    	success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
            	imgArray.push(val); 
            } 
        });
    	}
	});
	console.log(imgArray);
}

// change the image every 2 seconds            
var i = 0; 
function myLoop () {          
   setInterval(function () {  
      $('#hello_title').css({
			'background': 'url(assets/img/' + imgArray[i] + ') no-repeat',
      'background-size' : 'cover',
			'-webkit-background-clip' : 'text',
			'-webkit-text-fill-color' : 'transparent'
		});
		i++;                     
      	if (i >= imgArray.length) { 
        	i = 0;             
      	} 
   	}, 2000);
}

document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
