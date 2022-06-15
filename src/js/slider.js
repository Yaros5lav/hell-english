import $ from 'jquery';
import slick from 'slick-carousel';

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  asNavFor: '.slider-nav',
  mobileFirst: true,
  prevArrow: $('.reviews__button-left'),
  nextArrow: $('.reviews__button-right'),
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
      },
    },
  ],
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  infinite: false,
  arrows: true,
  adaptiveHeight: true,
  dots: false,
  focusOnSelect: true,
  mobileFirst: true,
  prevArrow: $('.reviews__button-left'),
  nextArrow: $('.reviews__button-right'),
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        arrows: false,
      },
    },
  ],
});
