import LikeButtonInitiator from '../../src/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/data/food-map-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favFoodmap: FavoriteRestaurantIdb,
    data: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithRestaurant };
