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

  // header carousel
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

  function customersCarousel () {
    var customersCarousel = $('.customers-carousel');
    if (customersCarousel.length) {
      customersCarousel.owlCarousel({
        dots: true,
        loop: true,
        nav: false,
        items: 2,
        margin: 30,
        responsive:{
          0:{
            items:1
          },

          600:{
            items:2
          }
        }
      });
    }
  }

   function blogCarousel () {
    var blogCarousel = $('.blog-carousel');
    if (blogCarousel.length) {
      blogCarousel.owlCarousel({
        dots: false,
        loop: true,
        nav: true,
        items: 3,
        margin: 30,
        navText: [
        '<i class="fa fa-long-arrow-left"></i>',
        '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive:{
          0:{
            items:1
          },

          600:{
            items:2
          },
          800:{
            items:3
          }
        }

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
    triggerElement: "#skills"
  }).setClassToggle(".skills-container__item", "up-height") 
  .addTo(controller);



  
  // .add(TweenMax.to("#work-1 img", .5, {className:"+=animated bounceIn"}))
  // .add(TweenMax.to("#work-1 .work-arrow", 0.5, {height: "145px", ease: Linear.easeNone}))
  // .add(TweenMax.to("#work-2 img", .5, {className:"+=animated bounceIn"}))
  // .add(TweenMax.to("#work-2 .work-arrow", 0.5, {height: "145px", ease: Linear.easeNone}))
  // .add(TweenMax.to("#work-3 img", .5, {className:"+=animated bounceIn"}))
  // .add(TweenMax.to("#work-3 .work-arrow", 0.5, {height: "145px", ease: Linear.easeNone}))
  // .add(TweenMax.to("#work-4 img", .5, {className:"+=animated bounceIn"}))
  // .add(TweenMax.to("#work-4 .work-arrow", 0.5, {height: "145px", ease: Linear.easeNone}))
  // .add(TweenMax.to("#work-5 img", .5, {className:"+=animated bounceIn"}))
  // .add(TweenMax.to("#work-5 .work-arrow", 3.5, {height: "145px", ease: Linear.easeNone}))


  //                   // build scene
  // var scene = new  ScrollMagic.Scene({triggerElement: "#work", offset: "200px"})
  // .setTween(tween)
  // .addTo(controller);




  $(".about-item,.services-item").each( function(index){
		$(this).css('animation-delay', index/10 +'s');
	});

  $(".about-item").animated("fadeInRight");
  $(".services-item").animated("fadeInLeft");
  $(".work-item img").animated("bounceIn");
  $(".work-item .work-arrow").animated("slideInDown");

  function  mobileMenu() {

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

  //map
  function gMaps() {
     map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333,
        zoomControl : false,
        // zoomControlOpt: {
        //     style : 'SMALL',
        //     position: 'TOP_LEFT'
        // },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
      });
  }

	// doc ready
	$(document).on('ready', function () {
		headerCarousel();
    customersCarousel();
    blogCarousel();
		pageScroll();
    mobileMenu();
    featureListTab();
    upcomingEventFilter();
    popupProject();
    gMaps()
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

