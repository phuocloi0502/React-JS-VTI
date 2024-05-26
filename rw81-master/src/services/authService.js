import api from "./axiosClient";

const authService = {
  login(payload) {
    return api.post("/login", payload);
  },
  register() {},
  forgetPassword() {},
};

export default authService;
