import Cookies from "js-cookie";

export class HttpService {
  
  headers = {}

  constructor(url_prefix = "") {
    this.url_prefix = url_prefix;
 
  }

  async get(url) {
    let response = await fetch(this.url_prefix + url, {
      method: "GET",
      headers: this.getHeaders(),
      redirect: "follow",
    });

    return response;
  }

  async post(url, body) {
    let response = await fetch(this.url_prefix + url, {
      method: "POST",
      headers: this.getHeaders(),
      body: body,
      redirect: "follow",
    });

    return response;
  }

  getHeaders() {
    if (this.checkSession()) {
      let apiToken = this.getSession();
      this.headers = {...this.headers,
        Authorization: "Bearer " + `${apiToken}`,
      };
      return this.headers;
    }
    this.headers = { ...this.headers,
      "Content-Type": "application/json ",
    };
    return this.headers;
  }
  getSession() {
    let session = Cookies.get("SESSION_KEY");
    if (session) {
      return session;
    }
  }

  checkSession() {
    return Cookies.get("SESSION_KEY") !== undefined;
  }
}
