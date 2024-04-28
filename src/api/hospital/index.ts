import request from "@/utils/request";

import type {
  HospitalData,
  DepartmentData,
  registerData,
  hospitalArrangeListData
} from "@/api/hospital/type";

enum API {
  hospitalUrl = "/hosp/hospital/",
  hospitalOffice = "/hosp/hospital/department/",

  registerData = "/hosp/hospital/auth/getBookingScheduleRule/",

  // 获取可预约排班数据
  getBookingScheduleLists = "/hosp/hospital/auth/findScheduleList/",


}

export const reqHospital = (hoscode: string) => {
  return request.get<any, HospitalData>(API.hospitalUrl + hoscode);
};

export const reqHospitalDepartment = (hoscode: string) => {
  return request.get<any, DepartmentData>(API.hospitalOffice + hoscode);
};

export const reqHospitalRegisterData = (
  page: number,
  limit: number,
  hoscode: string,
  depcode: string
) => {
  return request.get<any, registerData>(
    API.registerData + page + "/" + limit + "/" + hoscode + "/" + depcode
  );
};

export const reqHospitalBookingScheduleLists = (
  hoscode: string,
  depcode: string,
  workDate: string
) => {
  return request.get<any, hospitalArrangeListData>(
    API.getBookingScheduleLists + hoscode + "/" + depcode + "/" + workDate
  );
};
