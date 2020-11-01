// Формирование карточек ресторанов
const cardsRestaurants = document.querySelector('.cards-restaurants');

export const createCardsRestaurants = data => {
  const {
    image,
    kitchen,
    name,
    price,
    products,
    stars,
    time_of_delivery: timeOfDelivery,
  } = data;

  const link = document.createElement('a');
  link.product = products;
  link.nameRestaurant = name;
  link.ratingRestaurant = stars;
  link.priceRestaurant = price;
  link.categoryRestaurant = kitchen;
  link.classList.add('card', 'card-restaurant');
  link.insertAdjacentHTML('beforeend', `
      <img src="${image}" alt="image" class="${name}"/>
          <div class="card-text">
              <div class="card-heading">
                  <h3 class="card-title">${name}</h3>
                  <span class="card-tag tag">${timeOfDelivery} мин</span>
              </div>
              <div class="card-info">
                  <div class="rating">
                      ${stars}
                  </div>
                  <div class="price">От ${price} ₽</div>
                  <div class="category">${kitchen}</div>
              </div>
          </div>
    `);

  cardsRestaurants.append(link);
};