import axios from "axios";
import API from "../api/interceptor";

axios.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("loginUser");
  if (authToken) {
    console.log("atuh token");
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

axios.interceptors.response.use(
  function (response) {
    console.log("response");
    return response;
  },
  function (error) {
    console.log("errorrr");
    return Promise.reject(error);
  }
);
export const test = () => {
  API.get("http://localhost:3000/users")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
