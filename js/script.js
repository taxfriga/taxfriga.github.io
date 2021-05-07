window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
})

$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2000,
    // adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-prev-active-2.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-next-active-2.svg"></button>',
    
  });

  
  $('[data-fancybox="gallery"]').fancybox({
    transitionEffect: tube,
  });
  

  

});
