import RestaurantDbSource from '../../data/food-map-source';
import { restaurantListTemplate, skeletonRestaurant } from '../templates/data-templates';
import offlineTemplate from '../templates/offline-template';

const Restaurant = {
  async render() {
    return `
    <h1 class="top__title ml-20 mr-20">Top Restaurants</h1>
    <p class="detail ml-20 mr-20"> Here The Best Menu to enjoy your time!</p>
    <div id="restaurant-skeleton" class="restaurant-skeleton">
    ${skeletonRestaurant(20)}
    </div>
    <div id="restaurant" class="restaurant">
    </div>
    `;
  },

  async afterRender() {
    const skeleton = document.querySelector('#restaurant-skeleton');
    const RestaurantContainer = document.querySelector('#restaurant');
    RestaurantContainer.innerHTML = '';

    try {
      const restaurant = await RestaurantDbSource.listRestaurant();
      restaurant.restaurants.forEach((data) => {
        RestaurantContainer.innerHTML += restaurantListTemplate(data);
      });
      skeleton.style.display = 'none';
    } catch {
      skeleton.innerHTML = offlineTemplate.offlineMode();
    }
  },
};

export default Restaurant;
