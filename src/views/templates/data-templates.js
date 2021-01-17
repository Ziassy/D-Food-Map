import CONFIG from '../../config/config';

const restaurantListTemplate = (restaurant) => `
            <div tabindex="0" class="card__restaurant ml-20 mr-20 mb-20 my-20">
                <div class="photo">
                     <img tabindex="0" class="lazyload" src="./icons/placeholder.png" data-src="
                     ${CONFIG.BASE_IMAGE_URL_S + restaurant.pictureId}" 
                     alt="${restaurant.name}">
                     <div class="rating">
                        <span>
                            <i title="ratings" class="fa fa-star"></i>
                             <span tabindex="0" >${restaurant.rating}</span>
                         </span>
                     </div>
                 </div>
                 <div class="detail__grid">
                     <h1 tabindex="0" class="title">
                        <a href="#/detail/${restaurant.id}" tabindex="0">
                        ${restaurant.name} 
                        </a>
                     </h1>
                     <p tabindex="0" class="article">${restaurant.description}
                     </p>
                     <span>
                         <i class="fa fa-map-marker" aria-hidden="true"></i>
                         <span tabindex="0" class="place">
                         ${restaurant.city}
                           </span>
                    </span>
                 </div>
            </div>
`;

const detailTemplate = (detail) => `
            <div class="flexbox-center my-10">
                <div id="details__resto" class="details__resto">
                    <img src="${CONFIG.BASE_IMAGE_URL_M + detail.pictureId}" 
                    class="img_detail radius-20" alt="${detail.name}">
                </div>
                <div class="details__resto2">
                    <h1 tabindex="0" class="resto__title text-center">
                    ${detail.name}
                    </h1>
                    <div tabindex="0" class="ratings mb-10">
                        <span>
                            <i title="ratings" class="fa fa-star"></i>
                            <span>${detail.rating}</span>
                        </span>
                    </div>
                    <span tabindex="0" class="city">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <span class="place">
                        ${detail.address}, ${detail.city}
                        </span>
                    </span>
                    <p tabindex="0" class="deskripsi"> ${detail.description}</p>
                    <h2 tabindex="0">Category</h2>
                    <div class="my-20 flexbox">
                        ${detail.categories
                          .map(
                            (category) =>
                              `<span tabindex="0" class="list__category mr-10">${category.name}</span> `,
                          )
                          .join('')}
                    </div >
                </div >
            </div >
            <div class="menu my-20">
                <h1 tabindex="0">Menu</h1>
                <div class="foods mb-20 my-20">
                    <h2 tabindex="0" class="mb-10">Foods</h2>
                    <ul>
                ${detail.menus.foods
                  .map(
                    (food) => `
                    <li class="mb-20 my-10">
                        <span tabindex="0" class="list_drink">🍛 ${food.name}</span>
                    </li>
                    `,
                  )
                  .join('')}      
                    </ul>
                </div>
                <div tabindex="0" class="drinks">
                    <h2 tabindex="0" class="mb-10">Drinks</h2>
                    <ul>
                    ${detail.menus.drinks
                      .map(
                        (drink) => `
                    <li class="mb-20 my-10">
                        <span tabindex="0" class="list_drink">🥂 ${drink.name} </span>
                    </li>
                    `,
                      )
                      .join('')}
                    </ul>
                </div>
            </div>

    <div tabindex="0" class="card1 radius-20">
        <h2 tabindex="0" class="my-20">Costumer Review</h2>
        <div tabindex="0" class="review"> 
        ${detail.customerReviews
          .map(
            (review) => `
        <div class="my-20 mb-20 flexbox">
            <img src="./icons/user.png" alt="${review.name}">
            <div class="user ml-20">
                <p tabindex="0" class="reviewName">${review.name}</p>
                <p tabindex="0" class="reviewTime">${review.date}</p>
                <p tabindex="0" class="reviewMessage">${review.review}</p>
            </div>
        </div>
        `,
          )
          .join('')}
        </div>
    </div>
`;

const skeletonRestaurant = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
            <div tabindex="0" class="card__restaurant ml-20 mr-20 mb-20 my-20">
            <div class="photo">
                <img src="./icons/placeholder.png""
                alt="skeleton">
                <div class="ratingSkeleton skeleton">
                </div>
            </div>
            <div class="detail-grid-skeleton">
                <h1 tabindex="0" class="title skeleton h-35">
                    <a href="#" tabindex="0"></a>
                </h1>
                <p tabindex="0" class="article skeleton h-35">
                </p>
                <div class="place skeleton h-20"></div>
            </div>
            </div>
        `;
  }
  return template;
};

const skeletonDetail = `
            <div class="flexbox-center my-10">
            <div id="details__resto" class="details__resto">
                <div class="image-skeleton skeleton"></div>
            </div>
            <div class="details__resto2">
                <h1 class="resto__title text-center skeleton h-30"></h1>
                <div class="ratings-skeleton mb-10 skeleton my-10">
                </div>
                <div class="city-skeleton skeleton">
                </div>
                <p class="deskripsi-skeleton skeleton my-10 mb-20"></p>
                <h2 class="skeleton h-25"></h2>
                <div class="my-20 flexbox">
                    <div class="list__category mr-10 skeleton h-25"></div>
                </div>
            </div >
            </div >
            <div class="menu my-20">
            <h1 class="skeleton h-30"></h1>
            <div class="foods mb-20 my-20">
                <h2 class="mb-10 skeleton h-30"></h2>
                <ul>
                <li class="mb-20 my-10">
                    <div class="list_drink skeleton h-25"></div>
                </li>     
                </ul>
            </div>
            <div class="drinks">
                <h2 class="mb-10 skeleton h-30"></h2>
                <ul>
                <li class="mb-20 my-10">
                    <div class="list_drink skeleton h-25"></div>
                </li>
                </ul>
            </div>
            </div>

            <div class="card1 radius-20">
            <h2 class="my-20 skeleton h-30"></h2>
            <div class="review"> 
            <div class="my-20 mb-20 flexbox">
            <img src="./icons/placeholder.png" alt="skeleton">
            <div class="user ml-20">
            <p class="reviewName skeleton h-25"></p>
            <p class="reviewTime skeleton h-25"></p>
            <p class="reviewMessage skeleton h-25"></p>
            </div>
            </div>
            </div>
            </div>
`;

export {
  restaurantListTemplate,
  detailTemplate,
  skeletonRestaurant,
  skeletonDetail,
};
