import { BaseService } from "../../lib/baseService";
const shopsEndpoint = "shops";
export class ShopsInfoProvider extends BaseService {
  constructor() {
    super(shopsEndpoint);
  }

  async getShops(resource = "") {
    let response = await this.get(resource);
    try {
      if (response.success) return response.json();
    } catch (error) {
      console.error(error);
    }
  }
  async getKClusters() {
    let response = this.getShops("kClustered").catch((error) => {
      console.error("Error", error);
    });

    return response.json();
  }
}
