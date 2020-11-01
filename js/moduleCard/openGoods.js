// Открытие карточек выбранного ресторана
import { getUserData } from '../utils.js';
import { getData } from '../server.js';
import { modalAuthOpen } from '../auth.js';
import { createCardGood } from './createCardGood.js';

const
  cardsMenu = document.querySelector('.cards-menu'),
  containerPromo = document.querySelector('.container__promo'),
  menu = document.querySelector('.menu'),
  restaurantTitle = document.querySelector('.restaurant-title'),
  rating = document.querySelector('.rating'),
  price = document.querySelector('.price'),
  category = document.querySelector('.category')
;

export const openGoods = async evt => {
  const card = evt.target.closest('.card');

  if (card) {
    evt.preventDefault();

    if (getUserData()) {
      cardsMenu.textContent = '';

      try {
        await getData(card.product, data => {
          for (const card of data) {
            createCardGood(card);
          }
        });

        // Добавляем для возможности перейти назад по кнопке браузера
        history.pushState({}, '', `#${card.nameRestaurant}`);
        // /Добавляем для возможности перейти назад по кнопке браузера

        restaurantTitle.textContent = card.nameRestaurant;
        rating.textContent = card.ratingRestaurant;
        price.textContent = `От ${card.priceRestaurant} ₽`;
        category.textContent = card.categoryRestaurant;

        containerPromo.classList.add('hide');
        menu.classList.remove('hide');
        window.scrollTo(0, 0);
      }
      catch (error) {
        console.log(error);
      }
    }
    else {
      modalAuthOpen();
    }
  }
};