import Image from "../models/Images";
import os from "os"

const address = os.networkInterfaces()
//console.log(address.wlp2s0[0].address)

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://${address.wlp2s0[0].address}:3333/uploads/${image.path}`
    };
  },

  renderMany(images: Image[]){
    return images.map(image => this.render(image));
  }
};
