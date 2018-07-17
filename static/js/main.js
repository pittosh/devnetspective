$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // menu hover
    function is_touch_device() {
        return 'ontouchstart' in window        // works on most browsers 
        || navigator.maxTouchPoints;       // works on IE10/11 and Surface
    };

    if(!is_touch_device() && $('.navbar-toggle:hidden')){
      $('.dropdown-menu', this).css('margin-top',0);
      $('.dropdown').hover(function(){ 
          $('.dropdown-toggle', this).trigger('click');
          //uncomment below to make the parent item clickable
          $('.dropdown-toggle', this).toggleClass("disabled"); 
      });			
    } 

    $(".scroll-to").on('click', function(e) {
	    e.preventDefault();
	    var target = $(this).attr('href');
	    $('html, body').animate({
	       scrollTop: ($(target).offset().top)
	    }, 2000);
    });
    
    $(".scroll-top").on('click', function(e) {
    	e.preventDefault();
    	jQuery('html,body').animate({scrollTop:0},2000);
    });

    $(document).scroll(function() {
	  var y = $(this).scrollTop();
	  if (y > 800) {
	    $('.scroll-top').fadeIn();
	  } else {
	    $('.scroll-top').fadeOut();
	  }
	});


});




$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.in").each(function(){
    	$(this).siblings(".panel-heading").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
    	$(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
    }).on('hide.bs.collapse', function(){
    	$(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
    });
});