import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:3000",
});
API.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("loginUser");
  console.log(authToken);
  if (authToken) {
    console.log("atuh token");
    config.headers.Authorization = `Bearer ${authToken}`;
  } else {
    throw Error("errrror");
  }
  return config;
});

API.interceptors.response.use(
  function (response) {
    console.log("response", response);
    return response;
  },
  function (error) {
    console.log("errorrr");
    return Promise.reject(error);
  }
);
export default API;
