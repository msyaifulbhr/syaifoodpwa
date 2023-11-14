/* eslint-disable no-undef */
import RestaurantsSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantsDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailRestaurants = {
  async render() {
    return `
      <h2 class="title_detail">Detail Restoran</h2>
        <section class="content"></section>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailResto(url.id);
    const restoranContainer = document.querySelector('.content');
    restoranContainer.classList.add('detail_page');
    restoranContainer.innerHTML += createRestaurantsDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default DetailRestaurants;
