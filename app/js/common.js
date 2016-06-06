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

  var imgscene2 = new ScrollMagic.Scene({
    triggerElement: "#skills",
    triggerHook: "onLeave",
    offset: "10%",
  }).setClassToggle(".skills-container__item", "up-height") 
  .addTo(controller);




  $(".about-item,.services-item").each( function(index){
		$(this).css('animation-delay', index/10 +'s');
	});

  $(".about-item").animated("fadeInRight");
  $(".services-item").animated("fadeInLeft");

  function  mobileMenu() {

    $('#mobile-menu').mmenu({
      extensions : [  'theme-white', 'effect-menu-slide', 'pagedim-black' ],
      navbar: {
        title: "Меню"
      }
    });

    $(".toggle-mnu").click(function() {
      $(this).addClass("on");
    });

  var api = $("#mobile-menu").data("mmenu");
  api.bind("closed", function () {
    $(".toggle-mnu").removeClass("on");
  });

};

function featureListTab () {
    var tabContent = $('.tab-row');
    if (tabContent.length) {
      tabContent.find('.tab-content-box').hide();
      tabContent.find('.tab-content-box').eq(0).show();
      tabContent.find('.tab-title li').on('click', function () {
        tabContent.find('.tab-title li').removeClass('active');
        $(this).addClass('active');
        var tabName = $(this).data('tab-name');
        tabContent.find('.tab-content-box').hide();
        tabContent.find('.tab-content-box').removeClass('active');
        tabContent.find('.tab-content-box.'+ tabName).fadeIn(500).addClass('active');
      });
    };
  }

  // upcoming event filter 
  function upcomingEventFilter () {
    var upcomingEventFilterContent = $('#projects .tab-content-wrap');
    if (upcomingEventFilterContent) {
      upcomingEventFilterContent.mixItUp();
    };
  }

  function popupProject() {
    $('.project-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }

    });
  }

	// doc ready
	$(document).on('ready', function () {
		headerCarousel();
		pageScroll();
    mobileMenu();
    featureListTab();
    upcomingEventFilter();
    popupProject()
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

