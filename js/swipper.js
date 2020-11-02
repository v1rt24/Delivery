import '../swiper/swiper-bundle.min.js';

export const mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  grabCursor: true
});