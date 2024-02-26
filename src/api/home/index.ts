import request from "@/utils/request";

enum API {
  hospitalUrl = "/hosp/hospital/",
}
export const getHospitalList = (num: number, limit: number) => { 

  // 关于箭头函数中return的加、不加的区别。

  // 不加 const getHospitalList: (num: number, limit: number) => void，
  // 如果没有return，那么返回值类型为void
  // 加 const getHospitalList: (num: number, limit: number) => Promise<AxiosResponse<any>>，
  // 如果有return，那么返回值类型为Promise<AxiosResponse<any>>

  // 没有return表示返回函数内部的执行结果， 有return表示返回会面的 《表达式》！！！！
   return  request.get(API.hospitalUrl + `${num}/${limit}`);
  request.get(API.hospitalUrl + `${num}/${limit}`)
  
};
