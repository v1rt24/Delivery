import { getData } from './server.js';
import { createCardGood } from './moduleCard/createCardGood.js';
import { validateForm } from './utils.js';

const
  inputSearch = document.querySelector('.input-search'),
  cardsMenu = document.querySelector('.cards-menu'),
  containerPromo = document.querySelector('.container__promo'),
  menu = document.querySelector('.menu'),
  restaurantTitle = document.querySelector('.restaurant-title'),
  rating = document.querySelector('.rating'),
  price = document.querySelector('.price'),
  category = document.querySelector('.category')
;

const search = async evt => {
  if (evt.code === 'Enter') {
    const val = evt.target.value.trim();

    if (!validateForm(val)) {
      evt.target.value = '';
      evt.target.style.backgroundColor = 'red';
      setTimeout(() => {
        evt.target.style.backgroundColor = '';
      }, 1000);
      return false;
    }

    await getData('partners.json', data => {
      const linkProducts = data.map(partner => partner.products);

      for (const file of linkProducts) {
        getData(file, datas => {
          for (const names of datas) {
            if (names.name.toLowerCase().includes(val.toLowerCase())) {
              createCardGood(names);
            }
          }
        });
      }
    });

    restaurantTitle.textContent = `Результат поиска по: ${val}`;
    rating.textContent = '';
    price.textContent = '';
    category.textContent = 'Разная кухня';
    cardsMenu.textContent = '';

    containerPromo.classList.add('hide');
    menu.classList.remove('hide');
    window.scrollTo(0, 0);
  }
};

inputSearch.addEventListener('keyup', search);