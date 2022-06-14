$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  adaptiveHeight: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  infinite: false,
  arrows: false,
  dots: false,
  focusOnSelect: true,
  responsive: [{

    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }

  }, {

    breakpoint: 300,
    slidesToShow: 3,
    slidesToScroll: 1

  }]
});