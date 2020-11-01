// Клик по логотипу
const
  containerPromo = document.querySelector('.container__promo'),
  menu = document.querySelector('.menu')
;

export const returnHome = () => {
  menu.classList.add('hide');
  containerPromo.classList.remove('hide');
  window.scrollTo(0, 0);
};