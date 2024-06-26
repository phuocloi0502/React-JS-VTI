import api from "./axiosClient";

const ENDPOINT = "/product";

const productService = {
  getAll(params) {
    return api.get(ENDPOINT, params);
  },
  get(id) {
    return api.get(ENDPOINT + id);
  },
  create(body) {
    return api.post(ENDPOINT, body);
  },
  update(id, body) {
    return api.put(ENDPOINT + id, body);
  },
  delete(id) {
    return api.delete(ENDPOINT + id);
  },
};

export default productService;
