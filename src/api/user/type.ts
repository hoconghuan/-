interface RootObject {
  code: number;
  message: string;
  ok: boolean;
}

export interface ResponseData extends RootObject {
  data: string;
}
// 登录传填写的数据
export interface loginData {
  phone: string;
  code: string;
}

// 登录服务器返回的数据
export interface userInfo {
  name: string;
  token: string;
}

export interface userLoginResponseData extends RootObject {
  data: userInfo;
}
