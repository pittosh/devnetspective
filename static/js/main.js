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
	


	$( "#contactSubmit" ).click(function(e) {	
	
		e.preventDefault();
		
		$.ajax({
			async: true,
  			crossDomain: true,
		    url: 'https://api.mailgun.net/v3/sandboxf73df4eb85bf41babd36729de089b35a.mailgun.org/messages',
		    type: "POST",	
			headers: {"Authorization": "Basic "+btoa("api:7309f07bb02ea0e1526c26833ab6fb83-e44cc7c1-e6dd0481"),
					    "Content-Type": "application/json",
					    'Access-Control-Allow-Origin': '*',
		    },
		   // xhrFields: { withCredentials: true },
		    dataType: "json",
  	 	    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		    type: 'POST',		    
		    data:{
		    	"from": "benzon<benzon4u@gmail.com>",
				"to": "<jomoljon92@gmail.com>",
				"html": "<h1>TITLE-HERE</h1>",
				"subject": "Test Email",				
			},			
		    success:function(a,b,c){
				console.log( 'mail sent: ', b );  
			}.bind(this),
			error:function( xhr, status, errText ){
				console.log( 'mail sent failed: ', status );
			}
		});


	    

	});
    
    
});