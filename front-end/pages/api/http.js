import Cookies from "js-cookie";

export class HttpService {
  headers = {};

  constructor(url_prefix = "") {
    this.url_prefix = url_prefix;
  }

  async get(url) {
    if (this.checkSession()) {
      let apiToken = this.getSession();

      let response = await fetch(this.url_prefix + url, {
        method: "GET",
        headers: {"Content-Type": "application/json " ,"Authorization": "Bearer " + `${apiToken}` },
        redirect: "follow",
      });

      return response;
    }
  }

  async post(url, body) {
    let response = await fetch(this.url_prefix + url, {
      method: "POST",
      headers: { "Content-Type": "application/json " },
      body: body,
      redirect: "follow",
    });

    return response;
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
