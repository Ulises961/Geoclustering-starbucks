import Cookies from "js-cookie";
import { BaseService } from "../../lib/baseService";

const authEndpoint= "/v1/auth/";



export class Authenticator extends BaseService {
 
  constructor() {
    super(authEndpoint);
  }

  async isValidToken() {
    let response = await super.get("ping");
    if (response.success) return true;
    return false;
  }

  async isActive() {
    let response = await super.get("status");
    if (response.sucess) {
      return response.body.data;
    }
    console.log(response);
  }

  async login(credentials) {
    let response = await this.create("login", JSON.stringify(credentials))
    .then(response => response.json())
    .then(result => Cookies.set('SESSION_KEY',result.auth_token, {sameSite: "Lax"}))
    .catch(error => {console.error(error);return {ok:false}});

    return response;
  }

  async logout() {
    let response = await super.logout();

    if (response.success) {
      return response.body;
    }
  }
  async register(credentials){
    let response = await super.create("register", credentials);
        return response.success;
  }
}
