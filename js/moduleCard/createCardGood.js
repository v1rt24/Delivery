// Формирование карточек продукции ресторана
const cardsMenu = document.querySelector('.cards-menu');

export const createCardGood = cardData => {
  const {
    description,
    id,
    image,
    name,
    price,
  } = cardData;

  const card = document.createElement('div');
  card.idProduct = id;
  card.classList.add('card');
  card.insertAdjacentHTML('beforeend', `
    <img src="${image}" alt="${name}" class="card-image"/>
    <div class="card-text">
        <div class="card-heading">
            <h3 class="card-title card-title-reg">${name}</h3>
        </div>
        <div class="card-info">
            <div class="ingredients">${description}</div>
        </div>
        <div class="card-buttons">
            <button class="button button-primary button-add-cart">
                <span class="button-card-text">В корзину</span>
                <span class="button-cart-svg"></span>
            </button>
            <strong class="card-price-bold">${price} ₽</strong>
        </div>
    </div>
  `);

  cardsMenu.append(card);
};