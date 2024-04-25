import axios from "axios";
import { useUserStore } from "@/store/user/index";
const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  let userStore = useUserStore();
  // console.log(userStore.userInfo);
  if (userStore.userInfo.token) {
    // 把token放到请求头中
    config.headers.token = userStore.userInfo.token;
  }
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
