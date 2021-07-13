$(document).ready(function(){
 
    $('ul.portfolio__tabs').on('click', 'li:not(.portfolio__tab_active)', function() {
        $(this)
          .addClass('portfolio__tab_active')
          .siblings()
          .removeClass('portfolio__tab_active')
          .closest('div.container')
          .find('div.portfolio__content')
          .removeClass('portfolio__content_active')
          .eq($(this).index())
          .addClass('portfolio__content_active');
    });

    $('.faq__item_guestion').click(function(){
        $(this).parents('.faq__item').find('.faq__item_answer').slideToggle();
    });

    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });  

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });  

    new WOW().init();

});

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    // dots: true,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    });
});
  


