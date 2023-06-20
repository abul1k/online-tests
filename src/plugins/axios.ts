import { getAccessToken } from "../auth/jwtService";
import axios from "axios";

const axiosIns = axios.create({
  baseURL: "http://192.168.31.82:8000/",
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

export default axiosIns;
