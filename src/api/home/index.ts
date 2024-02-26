import request from "@/utils/request";

enum API {
  hospitalUrl = "/hosp/hospital",
}
export const getHospitalList = (num: number, limit: number) => {
  request.get(`${API.hospitalUrl}/${num}/${limit}`);
};
