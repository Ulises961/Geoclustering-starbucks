import Cookies from "js-cookie";

import Router from "next/router";
import Cookie from "js-cookie";
import { HttpService } from "./http";

const authEndpoint = "http://localhost:8080/api/v1/auth";

export class Authenticator extends HttpService {
  constructor() {
    super(authEndpoint);
  }

  async isValidToken() {
    let response = await super.get("/ping");
    if (response.success) return true;
    return false;
  }

  async isActive() {
    let response = await super.get("/status");
    if (response.sucess) {
      return response.body.data;
    }
    console.log(response);
  }

  async login(credentials) {
    let response = await this.post("/login", JSON.stringify(credentials))
      .then((response) => response.json())
      .then((result) => {
        console.log("Logging in");
        if (result.status === "success") {
          Cookies.set("SESSION_KEY", result.auth_token, {
            expires: 1,
            sameSite: "Lax",
          });
          Router.push("/home");
        } else throw new Error();
      })
      .catch((error) => {
        console.log("AuthenticationService.js");
        console.error(error);
        throw error;
      });

    return response;
  }

  async logout() {
    super.get("/logout").then({ loggedout: true });
    Cookie.remove("SESSION_KEY");
    window.localStorage.setItem("/logout", Date.now().toString());
    Router.push("/");
  }
  async register(credentials) {
    let response = await super.create("/register", credentials);
    return response.success;
  }
}
