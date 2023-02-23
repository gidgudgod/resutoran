import DicodingRestaurantSource from '../data/dicodingRestaurant-source';
import '../components/restaurant-list';

const Restaurant = {
  async render() {
    return `
      <main id="maincontent">
        <section class="content">
        <div class="restaurants">
          <restaurant-list></restaurant-list>
        </div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');
    try {
      const loadingElement = "<div class='loader' style='margin: 20% auto;'></div>";
      restaurantListElement.innerHTML = loadingElement;
      const restaurants = await DicodingRestaurantSource.restaurants();
      restaurantListElement.restaurants = restaurants;
    } catch (error) {
      console.error(error);
      const errorElement = "<div class='error-request-text'>Failed to Get Data</div>";
      restaurantListElement.innerHTML = errorElement;
    }
  },
};

export default Restaurant;
