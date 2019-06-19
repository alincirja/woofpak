/**************************************
==> Main JavaScript File
**************************************/
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
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
});

(function ($) {
	
	"use strict";

	$(document).ready(function() {

    document.body.style.zoom="90%";

    $('#menuTrigger').click(function() {
      $('#nav').slideToggle();
    });

		$(window).on('load resize scroll', function() {
      var wW = $(this).width();
      var wH = $(this).height();
      var sT = $(this).scrollTop();

      if (sT>0) {
        $('#header').addClass('white fixed');
      } else {
        $('#header').removeClass('white fixed');
      }

      if (wW<768 && sT>=0) {
        $('#header').addClass('white fixed')
      }


      $('.instafeed-list>li').each(function() {
        var img = $(this).find('img');
        var imgTop = img.height() / 2;
        var imgLeft = img.width() / 2;
        img.css({
          'margin-top': -imgTop,
          'margin-left': -imgLeft
        })
      });
    });

    $('.reviews-list').bxSlider({
      auto: true
    });

    /* Checkout */
    $('.selection-label').each(function() {
      var bg = $(this).attr('data-bg');
      $(this).css('background-image','url(img/'+bg+'.png)');
    });

    $( '.selection-label' ).hover(
      function() {
        var bg = $(this).attr('data-bg');
        $(this).css('background-image','url(img/'+bg+'-selected.png)');
      }, function() {
        var bg = $(this).attr('data-bg');
        $(this).css('background-image','url(img/'+bg+'.png)');
      }
    );

    $('input[name=billing-type]').change(function() {
      if ($(this).is(':checked')) {
        $('.billing-option').removeClass('selected');
        $(this).parent('.billing-option').addClass('selected')
      }
    })



    

	});/*Doc.ready*/

}(jQuery));