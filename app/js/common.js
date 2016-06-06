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


	$(".sf-menu").superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false
	})
	.after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
	$("#mobile-menu").find("*").attr("style", "");
	$("#mobile-menu").children("ul").removeClass("sf-menu")
	.parent().mmenu({
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню"
		}
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // header carosel
  function headerCarousel () {
  	var headerCarousel = $('.header-carousel');
  	if (headerCarousel.length) {
  		headerCarousel.owlCarousel({
  			loop: true,
  			nav: true,
  			items: 1,
  			dots: true,
  			autoWidth: true,
  			navText: [
  			'<i class="fa fa-long-arrow-left"></i>',
  			'<i class="fa fa-long-arrow-right"></i>'
  			]
  		
  		});
  	}
  }

  // mPageScroll2id

  function pageScroll() {
  	$("a[href*='#']").mPageScroll2id({
  		highlightClass:"active"
  	});
  }

  function equalHeights() {
  	$('.services-item__description').equalHeights();
  }
  

  /* PIN NAV */

  var controller = new ScrollMagic.Controller();

  var imgscene = new ScrollMagic.Scene({
  	triggerElement: "#about",
  	triggerHook: "onLeave",
    offset: "10%",
  }).setClassToggle("nav", "pined") 
  .addTo(controller);

  $(".about-item,.services-item").each( function(index){
		$(this).css('animation-delay', index/10 +'s');
	});

  $(".about-item").animated("fadeInRight");
  $(".services-item").animated("fadeInLeft");


	// doc ready
	$(document).on('ready', function () {
		headerCarousel();
		pageScroll();
	});
	// window load
	$(window).on('load', function () {
		handlePreloader();
		equalHeights();
	});
	// window scroll
	$(window).on('scroll', function () {
	
	});

})(jQuery);
