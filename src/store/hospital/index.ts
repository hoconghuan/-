import { defineStore } from "pinia";
import { reqHospital } from "@/api/hospital/index";
import type { Data, HospitalData } from "@/api/hospital/type";
import { ref } from "vue";

export const useStore = defineStore("info", () => {
  let hospitalInfo = ref({} as Data);
  // console.log("-------hospitalInfo", hospitalInfo.value);  //ref代理的是响应式对象，直接查看是拿ref的代理对象，所以才飘红,ref使用必须要 .value .value .value .value.value.value.value
  const getCode = async (hoscode: string) => {
    let result: HospitalData = await reqHospital(hoscode);
    if (result.code == 200) {
      // console.log("result", result.data);
      hospitalInfo.value = result.data;
      // console.log("hospitalInfo", hospitalInfo.value);
    }
  };
  return { hospitalInfo, getCode };
});
