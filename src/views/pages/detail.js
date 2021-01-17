import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/food-map-source';
import { detailTemplate, skeletonDetail } from '../templates/data-templates';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import postReview from '../../utils/post-review';
import offlineTemplate from '../templates/offline-template';
import FavoriteRestaurantIdb from '../../data/food-map-idb';

const Detail = {
  async render() {
    return `
      <h1 class="detail__title"> Details Restaurant</h1>
      <div class="resto__detail m-20">
      <div id="info-detail-skeleton">
      ${skeletonDetail}
      </div>
      <div id="detailMenu">
      <div id="info-detail">
      </div>
      <div id="likeButtonContainer"></div>
      <h2 class="text-center my-70 secondary">Add review</h2>
          <div class="form-review my-20">
              <form action="">
                  <label for="inputName">Name</label>
                  <input type="text" name="inputName" id="inputName" placeholder="Type your name">
                  <label for="inputReview">Review</label>
                  <textarea name="inputReview" id="inputReview" cols="30" rows="5"
                      placeholder="The best Restaurant!"></textarea>
                  <button id="reviewButton">Add review</button>
              </form>
          </div>
      </div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#info-detail');
    const skeleton = document.querySelector('#info-detail-skeleton');
    const detailMenu = document.querySelector('#detailMenu');
    detailMenu.style.display = 'none';

    try {
      const data = await RestaurantDbSource.detailRestaurant(url.id);
      detailContainer.innerHTML += detailTemplate(data.restaurant);

      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favFoodmap: FavoriteRestaurantIdb,
        data,
      });
      detailMenu.style.display = 'block';
      skeleton.style.display = 'none';
    } catch (error) {
      console.log(error);
      detailMenu.style.display = 'none';
      skeleton.innerHTML = offlineTemplate.offlineMode();
    }

    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');
    const btnSubmit = document.querySelector('#reviewButton');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (inputName.value === '' || inputReview.value === '') {
        // eslint-disable-next-line no-alert
        alert('Kolom inputan tidak boleh kosong');
        inputName.value = '';
        inputName.value = '';
      } else {
        postReview(url, inputName.value, inputReview.value);
        inputName.value = '';
        inputReview.value = '';
      }
    });
  },
};

export default Detail;
