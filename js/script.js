$('.carousel__inner').slick({
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    nextArrow:'<button type="button" class="slick-next"><img src="img/arrow.png"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});