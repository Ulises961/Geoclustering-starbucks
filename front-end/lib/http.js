const ROOT_URL = "http://localhost:8080/api";
import Cookies from "js-cookie";

export class HttpService {
  headers = {};

  constructor(url_prefix = "") {
    this.url_prefix = url_prefix;
    this.getHeaders();
  }

  async get(url, queryParams) {
    try {
      let response = await fetch(
        ROOT_URL + this.getUrl(url) + this.mapQueryParams(queryParams),
        { headers: this.getHeaders() }
      );
      let jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async post(url, body, queryParams = null) {
    try {
      let response = await fetch(
        ROOT_URL + this.getUrl(url) + 
        this.mapQueryParams(queryParams),
        {
          method: "POST",
          headers: this.headers,
          body: body,
          redirect:'follow'
        }
      );
     
      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getUrl(url) {
    return this.url_prefix + url;
  }

  getHeaders() {
    this.headers = {
      "Content-Type": "application/json",
    };
    if (this.checkSession()) {
      let apiToken = this.getSession().apiToken;
      this.headers = {
        ...this.headers,
        "Authorisation": `Bearer ${apiToken}`,
      };
    }
  }
  getSession() {
    let session = Cookies.get('SESSION_KEY');
    if (session) {
    return session;
  }
}

  async isValidToken(token) {
    this.headers = { ...this.headers,
    "Authorisation": `Bearer ${token}`}
    let response = await this.get("ping");
    if (response.success) return true;
    return false;
  }

  checkSession() {
    return Cookies.get('SESSION_KEY') !== undefined
}


  mapQueryParams(queryParams) {
    return queryParams
      ? Object.keys(queryParams)
          .map((key) => {
            return key + "=" + queryParams[key];
          })
          .join("&")
      : "";
  }
}
