import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async fetchData(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  static async listResto() {
    try {
      const responseJson = await RestaurantsSource.fetchData(API_ENDPOINT.LIST);
      return responseJson.restaurants;
    } catch (error) {
      // Handle error when fetching list of restaurants
      console.error('Failed to fetch list of restaurants:', error);
      throw error;
    }
  }

  static async detailResto(id) {
    try {
      const responseJson = await RestaurantsSource.fetchData(API_ENDPOINT.DETAIL(id));
      return responseJson.restaurant;
    } catch (error) {
      // Handle error when fetching restaurant details
      console.error('Failed to fetch restaurant details:', error);
      throw error;
    }
  }

  static async searchResto(value) {
    try {
      const responseJson = await RestaurantsSource.fetchData(API_ENDPOINT.SEARCH(value));
      return responseJson.restaurants;
    } catch (error) {
      // Handle error when searching restaurants
      console.error('Failed to search restaurants:', error);
      throw error;
    }
  }

  static async reviewResto() {
    try {
      const responseJson = await RestaurantsSource.fetchData(API_ENDPOINT.REVIEW);
      return responseJson;
    } catch (error) {
      // Handle error when fetching restaurant reviews
      console.error('Failed to fetch restaurant reviews:', error);
      throw error;
    }
  }
}

export default RestaurantsSource;
