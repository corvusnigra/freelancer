(function ($) {

	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // header carosel
  function headerCarousel () {
  	var headerCarousel = $('.header-carousel');
  	if (headerCarousel.length) {
  		headerCarousel.owlCarousel({
  			nav: true,
  			items: 1,
  			dots: true,
  			autoWidth: true,
  			navText: [
  			'<i class="fa fa-angle-left"></i>',
  			'<i class="fa fa-angle-right"></i>'
  			],
  			autoplay:true,
  			autoplayTimeout:3000,
  			autoplayHoverPause:true,
  		});
  	}
  }
	// doc ready
	$(document).on('ready', function () {
		headerCarousel();
	});
	// window load
	$(window).on('load', function () {
		handlePreloader();
	});
	// window scroll
	$(window).on('scroll', function () {
	
	});

})(jQuery);
