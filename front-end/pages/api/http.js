
import Cookies from "js-cookie";

export class HttpService {
  headers = {};

  constructor(url_prefix = "") {
    this.url_prefix = url_prefix;
    this.getHeaders();
  }

  async get(url) {
    try {
      let response = await fetch(
        this.getUrl(url),
        { headers: this.getHeaders() }
      );
      console.log("[Http.js] get => this.headers ", this.headers);
      return response;
    } catch (error) {
      console.log("[Http.js] get");
      console.log(error);
      throw error;
    }
  }

  async post(url, body) {
    try {
      let response = await fetch(
       this.getUrl(url),
        {
          method: "POST",
          headers: this.headers,
          body: body,
          redirect: "follow",
        }
      );

      return response;
    } catch (error) {
      console.log("[Http.js] post");
      console.error(error);
      throw error;
    }
  }

  getUrl(url) {
    return this.url_prefix + url;
  }

  getHeaders() {
    this.headers = {
      "Content-Type": "application/json"
    };
    if (this.checkSession()) {
      let apiToken = this.getSession();
      this.headers = {
        ...this.headers,
        "Authorisation" : `Bearer ${apiToken}`,
      };
    }
  }
  getSession() {
    let session = Cookies.get("SESSION_KEY");
    console.log("getSession: session => ", session);
    if (session) {
      return session;
    }
  }

  async isValidToken(token) {
    this.headers = { ...this.headers, "Authorisation": `Bearer ${token}` };
    let response = await this.get("ping");
    if (response.success) return true;
    return false;
  }

  checkSession() {
    console.log( "Cookies.get('SESSION_KEY') !== null ?", Cookies.get("SESSION_KEY") !== null);
    return Cookies.get("SESSION_KEY") !== null;
  }

}
