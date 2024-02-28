import request from "@/utils/request";
import type { HospitalData } from "@/api/hospital/type";
enum API {
  hospitalUrl = "/hosp/hospital/",
}

export const reqHospital = (hoscode: string) => {
  return request.get<any, HospitalData>(API.hospitalUrl + hoscode);
};
