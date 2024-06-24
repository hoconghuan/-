import request from "@/utils/request";
import type {
  ResponseData,
  loginData,
  userLoginResponseData,
  OrderResponseData,
} from "@/api/user/type";
enum API {
  getesmCode = "/sms/send/",
  loginUrl = "/user/login/",
  getOrder = "/order/orderInfo/auth/getOrderInfo/",
  cancel_url = "/order/orderInfo/auth/cancelOrder/",
}

export const reqGetesmCode = (phone: string) => {
  return request.get<string, ResponseData>(API.getesmCode + phone);
};

export const reqLogin = (data: loginData) => {
  return request.post<string, userLoginResponseData>(API.loginUrl, data);
};

export const reqGetOrder = (id: string) => {
  return request.get<string, OrderResponseData>(API.getOrder + id);
};

export const reqCancelOrder = (id: string) => {
  return request.get<string, any>(API.cancel_url + id);
};
