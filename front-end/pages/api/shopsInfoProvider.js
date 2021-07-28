
import { HttpService } from "./http";

const authEndpoint = "http://nginx:8080/api";
export class ShopsInfoProvider extends HttpService {
 
  constructor() {
    super(authEndpoint);
  }

  async getShops(resource = "/shops") {
    let response = await this.get(resource).then(response => response.json()).catch((error,) => {
      console.error("Error", error);
    
    });
   
    return response;
  
  }
  async getKClusters() {
    return this.getShops("/k-clustered-shops");
  }
} 
