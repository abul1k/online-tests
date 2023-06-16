import { getAccessToken, logout } from "../auth/jwtService";
import axios from "axios";
// import { useRoute } from "vue-router";
// const route = useRoute()

// import { toast } from "vue3-toastify";

const axiosIns = axios.create({
  baseURL: "",
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

//404 or 401 pages use this response
// axiosIns.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // TODO надо исправит refresh токен
//     if (error.response && error.response.status === 401 && route.meta.layout !== 'LoginLayout') {
//       logout();
//     } else if (error.response.status === 422) {
//       // toast.error("error");
//       if (
//         error.response &&
//         error.response.data &&
//         error.response.data.message
//       ) {
//         // toast.error(error.response.data.message);
//       }
//     } else if (error.response.status === 500) {
//       // toast.error("Error from server!");
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosIns;
