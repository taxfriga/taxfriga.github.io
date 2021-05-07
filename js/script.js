$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-prev-active-2.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-next-active-2.svg"></button>',
    
  });

  $.fancybox.defaults.animationEffect = "tube";
  

});
