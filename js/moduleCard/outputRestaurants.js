// Вывод ресторанов на главной
import { getData } from '../server.js';
import {createCardsRestaurants} from './createCardsRestaurants.js';

export const outputRestaurants = async () => {
  try {
    await getData('partners.json', data => {
      for (const res of data) {
        createCardsRestaurants(res);
      }
    });
  }
  catch (error) {
    console.log(error);
  }
};