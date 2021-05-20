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
      });
  });
});

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

  $('.carousel__bottom').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ],
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-prev-active-2.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-next-active-2.svg"></button>',
    
  });

  // modal

  // $('[data-modal=consultation]').fadeOut();
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

      // функция на кнопку купить

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  function validateForms(form){
    $(form).validate({
        rules: {
          name: {
              required: true,
              minlength: 2
          },
          phone: "required",
          email: {
              required: true,
              email: true
          }
        },
        messages: {
          name: {
              required: "Пожалуйста, введите свое имя",
              minlength: jQuery.validator.format("Введите {0} символа!")
            },
          phone: "Пожалуйста, введите свой номер телефона",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неправильно введен адрес почты"
          }
        }
    });
  };

  
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  




  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('.pageup').fadeIn();
    } else {
       $('.pageup').fadeOut();
    }
  });

  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  
  
  $('[data-fancybox="gallery"]').fancybox({
    transitionEffect: tube,
  });
  
  
  

});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  arrows: false,
  // centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    }
  ],
});

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('#consultation, #order').fadeOut();
    $('.overlay, #thanks').fadeIn('slow');

    $('form').trigger('reset');
  });
  return false;
});
