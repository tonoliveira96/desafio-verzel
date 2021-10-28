import Cars from "../models/Cars";
import imagesView from './Images_view';
import Users_views from "./Users_views";

export default {
  render(car: Cars) {
    return {
      id: car.id,
      name: car.name,
      brand: car.brand,
      model: car.model,
      price: car.price,
      images: imagesView.renderMany(car.images),
    };
  },

  renderMany(car: Cars[]){
    return car.map(car => this.render(car));
  }
};
