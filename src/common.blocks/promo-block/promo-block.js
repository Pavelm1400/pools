/* eslint-disable */

var mySwiper = new Swiper ('.promo-block__slider .swiper-container', {
  direction: 'horizontal',
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.promo-block__pagination',
  },
});
