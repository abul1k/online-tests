import { getAccessToken, logout } from "../auth/jwtService.js";
import axios from "axios";

const axiosIns = axios.create({
  // baseURL: "http://192.168.31.82:8000",
  baseURL: "http://139.59.79.103:3030",
  timeout: 20000,

  headers: { Accept: "application/json" },
});

//send token
axiosIns.interceptors.request.use(
  (config) => {
    let token = getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosIns.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (
        window.location.pathname !== "/sign-in" &&
        window.location.pathname !== "/sign-up"
      ) {
        window.location.href = "/sign-in";
        logout();
      }
    }
    // else if (error.response.status === 422) {
    //   console.log("422", error.response);
    // } else if (error.response.status === 500) {
    //   toast.error("Error from server!");
    // }

    return Promise.reject(error);
  }
);

export default axiosIns;
