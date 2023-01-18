import axios from 'axios';

export class FetchImagesAPI {
  static BASE_URL = 'https://pixabay.com/api/';

  constructor() {
    this.page = 1;
    this.query = '';
    axios.defaults.baseURL = FetchImagesAPI.BASE_URL;
  }

  async getPhotos() {
    try {
      const response = await axios.get('/', {
        params: {
          key: '32911996-71a22755398379a087adff4fc',
          q: this.query,
          orientation: 'horizontal',
          safesearch: 'true',
          image_type: 'photo',
          page: this.page,
          per_page: 40,
        }
      });
      return response.data;

    } catch (error) {
      console.error(error);
      return false;
    }
  }
}