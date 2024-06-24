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

//订单详情的类型
export interface reqGetOrderInfo {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    orderStatusString: string;
  };
  userId: number;
  outTradeNo: string;
  hoscode: string;
  hosname: string;
  depcode: string;
  depname: string;
  scheduleId: string;
  title: string;
  reserveDate: string;
  reserveTime: number;
  patientId: number;
  patientName: string;
  patientPhone: string;
  hosRecordId: string;
  number: number;
  fetchTime: string;
  fetchAddress: string;
  amount: number;
  quitTime: string;
  orderStatus: number;
}
export interface OrderResponseData extends RootObject {
  data: reqGetOrderInfo;
}
