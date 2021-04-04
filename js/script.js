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
    
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 800) {
    //         $('.pageup').fadeIn();
    //     } else {
    //         $('.pageup').fadeOut();
    //     }
    // });
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 600) {
    //         $('.phone').fadeIn();
    //     } else {
    //         $('.phone').fadeOut();
    //     }
    // });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    $(document).ready(function(){
        $('.carousel__inner').slick({
            infinite: true,
            speed: 1200,
            // adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    speed: 1200,
                    // adaptiveHeight: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    fade: true,
                    cssEase: 'linear',
                }
            }
        ]
        });
    });
    
});
