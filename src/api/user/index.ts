import request from "@/utils/request";
import type { ResponseData } from "@/api/user/type";
enum API {
  getesmCode = "/sms/send/", 
}

export const reqGetesmCode = (phone: string) => {
  return request.get<any, ResponseData>(API.getesmCode + phone);
};
