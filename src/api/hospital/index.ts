import request from "@/utils/request";

import type { HospitalData, DepartmentData } from "@/api/hospital/type";
enum API {
  hospitalUrl = "/hosp/hospital/",
  hospitalOffice = "/hosp/hospital/department/",
}

export const reqHospital = (hoscode: string) => {
  return request.get<any, HospitalData>(API.hospitalUrl + hoscode);
};

export const reqHospitalDepartment = (hoscode: string) => {
  return request.get<any, DepartmentData>(API.hospitalOffice + hoscode);
};
