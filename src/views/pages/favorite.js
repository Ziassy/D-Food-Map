import { restaurantListTemplate } from '../templates/data-templates';
import FavoriteRestaurantIdb from '../../data/food-map-idb';

const Favorite = {
  async render() {
    return `
    <h1 class="top__title ml-20 mr-20">Favorite Restaurant</h1>
    <div id="restaurant" class="restaurant">
    </div>
      `;
  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestaurant();
    const listContainer = document.querySelector('#restaurant');
    if (data.length === 0) {
      listContainer.innerHTML = `
      <h3 class="no-favorite"> You do not have any favorite Restaurant Here. </h3>
      `;
    } else {
      data.forEach((restaurant) => {
        listContainer.innerHTML += restaurantListTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
