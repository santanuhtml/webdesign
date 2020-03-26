(function($){
  "use strict"; //strict start

  /*==================================
    * Template Name: evento | single page event management html template
    * Template URI: http://eventophotography.com/themes/evento
    * Description: This is evento html template js file
    * Author: santanuhtmlcss
    * Version:1.0
  ==================================== */
    
  /*=========== TABLE OF CONTENTS ===========

    1.Page loader
    2.shrink nav
    3.scrollspy
    4.page scrolling feature
    5.owl carousel (.testimonial)
    6.owl carousel (.clients-logo)
    7.owl carousel (.team-gallery)
    8.owl carousel (.service-gallery)
    9.owl carousel (.gallery-image)
    10.counterup
    11.Popup Gallery
    12.parallax
    13.Contact form Validation
    14.Newsletter form Validation
    15.Back to Top

  ======================================*/
  
  $(window).load(function() {
    /*--------------------------------
      1.Page loader
    ---------------------------------*/ 
    $(".se-pre-con").fadeOut("slow");
  });

  $(window).on('scroll',function(){
    /*--------------------------------
      2.shrink nav
    ---------------------------------*/ 
    var wscroll = $(this).scrollTop();
    if(wscroll > 20){
     $(".navbar").addClass("shrink-nav");
    }
    else{
      $(".navbar").removeClass("shrink-nav");
    }
  });

  /* --------------------------------------------
    DOCUMENT.READY
  --------------------------------------------- */
  $(document).ready(function(){

    /*--------------------------------
      3.scrollspy
    ---------------------------------*/ 
    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 80
    });

    /*--------------------------------
      4.page scrolling feature
    ---------------------------------*/ 
    $('a.page-scroll').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
    
    /*--------------------------------
      5.owl carousel (.testimonial)
    ---------------------------------*/ 
    $('.testimonial').owlCarousel({
      items:1,
      loop:true,
      navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      nav:true,
      smartSpeed:600,
      autoplay:true
    });

    /*--------------------------------
      6.owl carousel (.clients-logo)
    ---------------------------------*/ 
    $('.clients-logo').owlCarousel({
      loop:true,
      nav:false,
      dots:false,
      autoplay:true,
      smartSpeed:600,
      autoplayTimeout:3000,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
      }
    });

    /*--------------------------------
      7.owl carousel (.team-gallery)
    ---------------------------------*/ 
    $('.team-gallery').owlCarousel({
      loop:true,
      nav:false,
      dots:true,
      smartSpeed:600,
      autoplayHoverPause:true,
      autoplay:true,
      autoplayTimeout:3000,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
      }
    });

    /*--------------------------------
      8.owl carousel (.service-gallery)
    ---------------------------------*/ 
    $('.service-gallery').owlCarousel({
      items:1,
      navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      autoplay:false,
      dots:false,
      nav:true,
      smartSpeed:600,
      autoplayTimeout:3000
    });

    /*--------------------------------
      9.owl carousel (.gallery-image)
    ---------------------------------*/ 
    $('.popup-gallery').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      smartSpeed:600,
      autoplayTimeout:3000,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
      }
    });

    /*--------------------------------
      10.counterup
    ---------------------------------*/ 
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });

    /*--------------------------------
      11.Popup Gallery
    ---------------------------------*/ 
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            return item.el.attr('title');
        }
      }
    });

    /*--------------------------------
      12.parallax
    ---------------------------------*/ 
    $('.parallax-window').parallax();

    /*--------------------------------
      13.Contact form Validation
    ---------------------------------*/ 
    $("#contact-form").validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          number: true
        },
        subject: {
          required: true
        },
        message: {
          required: true
        }
      }
    });

    /*--------------------------------
      14.Newsletter form Validation
    ---------------------------------*/ 
    $("#subscribe-form").validate({
      rules: {
        email: {
          required: true,
          email: true
        }
      },
      errorElement : 'div',
      errorLabelContainer: '.error-msg'
    });

    /*--------------------------------
      15.Back to Top
    ---------------------------------*/ 
    if($('#back-to-top').length){
      var scrollTrigger = 100,
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };
      backToTop();
      $(window).on('scroll', function () {
        backToTop();
      });
      $('#back-to-top').on('click', function (e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
      });
    }
    
  });
  
})(jQuery); //strict end



