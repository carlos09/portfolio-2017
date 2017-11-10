$(window).on('load', function(){
	//Preloader
	$('#status').delay(300).fadeOut();
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function() {
		//SmothScroll
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					if ($target.length) {
							var targetOffset = $target.offset().top;
							$('html,body').animate({scrollTop: targetOffset}, 600);
							return false;
					}
			}
		});


		/*-----------------------------------------------------------------------------------*/
	  /*  Anchor Link
	  /*-----------------------------------------------------------------------------------*/
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	      || location.hostname == this.hostname) {

	      var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	        return false;
	      }
	    }
	  });

	  /*-----------------------------------------------------------------------------------*/
	  /*  Tooltips
	  /*-----------------------------------------------------------------------------------*/
	  $('.tooltip-side-nav[data-toggle="tooltip"]').tooltip();

});
