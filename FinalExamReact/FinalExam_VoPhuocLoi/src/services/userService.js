import { urlApi } from "../utils/constants";
import api from "./axiosClient";

const ENPOINT = urlApi;


const userService = {
  getAll() {
    return api.get();
  },
  getById(id) {
    return api.get(id);
  },
  create(body) {
    return api.post(body);
  },
  update(id, body) {
    return api.put(ENPOINT + id, body);
  },
  delete(id) {
    return api.delete(id);
  },
};

export default userService;
