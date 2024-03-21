import request from "@/utils/request";
import type {
  ResponseData,
  loginData,
  userLoginResponseData,
} from "@/api/user/type";
enum API {
  getesmCode = "/sms/send/",
  loginUrl = "/user/login",
}

export const reqGetesmCode = (phone: string) => {
  return request.get<any, ResponseData>(API.getesmCode + phone);
};

export const reqLogin = (data: loginData) => {
  return request.post<any, userLoginResponseData>(API.loginUrl, data);
};
