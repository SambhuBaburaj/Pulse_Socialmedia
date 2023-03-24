import axios, { Axios } from "axios";

const baseURL = "http://localhost:8000";
let authToken = localStorage.getItem("UserAuthToken")
  ? localStorage.getItem("UserAuthToken")
  : null;

const UserInstance = axios.create({ baseURL });

UserInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("UserAccessToken");

    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
    console.log(error);
  }
);

UserInstance.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export default UserInstance;
