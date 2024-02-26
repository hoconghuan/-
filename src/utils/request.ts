import axios from "axios";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return Promise.reject(err.message);
  }
);
export default request;
