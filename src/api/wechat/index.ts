import request from "@/utils/request";
import type { loginData } from "@/api/wechat/type";
enum API {
  getWechatCheck = "user/weixin/getLoginParam/",
}
export const getWechatCheck = (wxRedirectUri: string) => {
  return request.get<any, loginData>(
    API.getWechatCheck + `?wxRedirectUri=${wxRedirectUri}`
  );
};
