window.onload = function() {
  // showContent();
  smoothScroll();
  loadImages();
  myLoop();
  moveSection('#skills', '#progress', '#spisebar');
  moveSection('#languages', '#interests', '#about_me'); 
  moveSectionTablet('#skills', '#progress', '#spisebar');
  moveSectionTablet('#languages', '#interests', '#about_me'); 
};

// // Fade in the home page
// function showContent() {
//   $('#page_container').removeClass('fade-out'); //fade-in the body
//   setTimeout(function() {$('#hello_title').removeClass('fade-out');}, 500); //fade-in the title(slow)
// }

// Add smooth scroll effect when jumping to section
function smoothScroll() {
  var $root = $('html, body');
  $('#explore').bind('click', function(event) {
      var $anchor = $(this);
      $root.stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });
}

// Store pictures in array
var imgArray = [];
function loadImages(){
	var folder = "assets/img";
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

// Change the image every 2 seconds            
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

// Move Section according to orientation
function moveSection (section, insertAfterSectionIfLess, insertAfterSectionIfMore) {
  // media query event handler
  if (matchMedia) {
    var mq = window.matchMedia('(min-device-width: 570px) and (orientation: landscape)');
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    // document.getElementById("message_form-group").classList.toggle('col-sm-6');
    // console.log("changed");
    if (mq.matches) {
      $(section).insertAfter(insertAfterSectionIfMore);
      // document.getElementById("message_form-group").classList.add('col-sm-6');
      // console.log("changed");
      // document.getElementById("first_form-group").classList.add('col-sm-6');
    } else {
      // window width is less than 570px
      $(section).insertAfter(insertAfterSectionIfLess);
      // document.getElementById("message_form-group").classList.remove('col-sm-6');
      // console.log("changed");
      // document.getElementById("first_form-group").classList.remove('col-sm-6');
    }
  }
}

// Move Section according to orientation
function moveSectionTablet (section, insertAfterSectionIfLess, insertAfterSectionIfMore) {
  // media query event handler
  if (matchMedia) {
    var mq = window.matchMedia('(min-device-width: 768px) and (orientation: portrait)');
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
      $(section).insertAfter(insertAfterSectionIfMore);
    } else {
      // window width is less than 768px
      $(section).insertAfter(insertAfterSectionIfMore);
    }
  }
}

// $(window).on('resize', function() {
//   var win = $(this);
//   if (win.width() > 600) {
//       console.log("change");
//     $('#message_form-group').addClass('col-sm-6');

//   } else {
//     $('#message_form-group').removeClass('col-sm-6');
//   }
// });

document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')