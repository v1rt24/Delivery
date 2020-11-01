import { outputRestaurants } from './moduleCard/outputRestaurants.js';
import { openGoods } from './moduleCard/openGoods.js';
import { returnHome } from './moduleCard/returnHome.js';

const
  cardsRestaurants = document.querySelector('.cards-restaurants'),
  logo = document.querySelector('.logo')
;

// Вывод всех ресторанов
outputRestaurants();

// Клик по карточке ресторана
cardsRestaurants.addEventListener('click', openGoods);

// Клик по логотипу
logo.addEventListener('click', returnHome);

// Клик по кнопке назад в браузере
window.addEventListener("popstate", function (event) {
  returnHome();
}, false);



















