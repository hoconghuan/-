// 引入pinia存储函数defineStore
import { defineStore } from "pinia";
// 引入封装的axio请求函数
import { reqHospital, reqHospitalDepartment } from "@/api/hospital/index";
// 引入请求函数的定义类型
import type {
  Data,
  HospitalData,
  Datum,
  DepartmentData,
} from "@/api/hospital/type";
import { ref } from "vue";

export const useStore = defineStore("hsopitalInfo", () => {
  let hospitalInfo = ref({} as Data);
  // console.log("-------hospitalInfo", hospitalInfo.value);  //ref代理的是响应式对象，直接查看是拿ref的代理对象，所以才飘红,ref使用必须要 .value .value .value .value.value.value.value
  let hospitalDepartment = ref({} as Datum);
  const getCode = async (hoscode: string) => {
    let result: HospitalData = await reqHospital(hoscode);
    if (result.code == 200) {
      // console.log("result", result.data);
      hospitalInfo.value = result.data;
      // console.log("hospitalInfo", hospitalInfo.value);
    }
  };
  const getDepartment = async (hoscode: string) => {
    let result: DepartmentData = await reqHospitalDepartment(hoscode);
    console.log("result", result);
    // if (result.code == 200) {
    //   hospitalDepartment.value = result.data;
    // }
  };
  return { hospitalInfo, getCode, getDepartment, hospitalDepartment };
});
