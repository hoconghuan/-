import axios from "axios";

const requ = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

requ.interceptors.request.use((config) => {
  return config;
});

requ.interceptors.response.use(
  (response) => response,
  (err) => {
    return Promise.reject(err.message);
  }
);
export default requ;
