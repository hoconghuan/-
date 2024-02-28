import request from "@/utils/request";
import type {
  HospitalResponseData,
  HospitalLevelAndRegionResponseData,
  SearchInfo,
} from "@/api/home/type";

enum API {
  hospitalUrl = "/hosp/hospital/",
  hospitalLevelAndRegionUrl = "/cmn/dict/findByDictCode/",
  hospitalListUrl = "/hosp/hospital/findByHosname/",
}
export const getHospitalList = (
  num: number,
  limit: number,
  hostype: string,
  districtCode: string
) => {
  // 关于箭头函数中return的加、不加的区别。

  // 不加 const getHospitalList: (num: number, limit: number) => void，
  // 如果没有return，那么返回值类型为void
  // 加 const getHospitalList: (num: number, limit: number) => Promise<AxiosResponse<any>>，
  // 如果有return，那么返回值类型为Promise<AxiosResponse<any>>

  // 没有return表示返回函数内部的执行结果， 有return表示返回会面的 《表达式》！！！！
  return request.get<string, HospitalResponseData>(
    API.hospitalUrl +
      `${num}/${limit}?hostype=${hostype}&districtCode=${districtCode}`
  );
  request.get(API.hospitalUrl + `${num}/${limit}`);
};

export const getHospitalLevelAndRegion = (dictCode: string) => {
  return request.get<string, HospitalLevelAndRegionResponseData>(
    `${API.hospitalLevelAndRegionUrl}${dictCode}`
  );
};

export const getHospitalListByName = (hosname: string) => {
  return request.get<string, SearchInfo>(`${API.hospitalListUrl}${hosname}`);
};
