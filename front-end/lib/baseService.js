import { HttpService } from "./http";

export class BaseService extends HttpService {
  constructor(url_prefix = "") {
    super(url_prefix);
  }

  async get(resource = "") {
    return await super.get(`/${resource}`);
  }
  async create(endpoint = "", body) {
   
    return super.post(endpoint, body);

  }
}
