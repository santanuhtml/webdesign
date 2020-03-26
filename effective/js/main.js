(function($){
  "use strict"; //strict start

  /*==================================
    * Template Name: Effective | One Page HTML Template
    * Template URI: http://santhemes.com/themes/effective-v1.0/
    * Description: This is Effective html template js file
    * Author: santanuhtmlcss
    * Author URI: http://santhemes.com/
    * Version:v1.0
  ==================================== */
    
  /*=========== TABLE OF CONTENTS ===========
    1.Page loader
    2.shrink nav
    3.owl carousel (.testimonial)
    4.counterup
    5.page scrolling feature
    6.Back to Top
    7.parallax
    8.Contact form Validation
  ======================================*/
  /*--------------------------------
    1.Page loader
  ---------------------------------*/ 

  $(window).load(function() {
    $(".se-pre-con").fadeOut("slow");
  });

  /*--------------------------------
    2.shrink nav
  ---------------------------------*/ 
  $(window).on('scroll',function(){
    var wscroll = $(this).scrollTop();
    if(wscroll > 10){
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
      3.owl carousel (.testimonial)
    ---------------------------------*/ 
    $('.testimonial').owlCarousel({
      loop:true,
      margin:10,
      navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      nav:true,
      smartSpeed:500,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
      }
    });

    /*--------------------------------
      4.counterup
    ---------------------------------*/ 
    $('.counter').counterUp({
      delay: 10,
      time: 1500
    });

    /*--------------------------------
      5.page scrolling feature
    ---------------------------------*/ 
    $('a.page-scroll').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

    /*--------------------------------
      6.Back to Top
    ---------------------------------*/ 
    if($('#back-to-top').length) {
      var scrollTrigger = 100, // px
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
      $('#back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 700);
      });
    }

    /*--------------------------------
      7.parallax
    ---------------------------------*/ 
    $('.parallax-window').parallax();

    /*--------------------------------
      8.Contact form Validation
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
  });
  
})(jQuery); //strict end




