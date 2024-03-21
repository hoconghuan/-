import { defineStore } from "pinia";
import { ref } from "vue";
import type { loginData, userInfo } from "@/api/user/type";
import { reqLogin } from "@/api/user/index";
export const useUserStore = defineStore("User", () => {
  let visible = ref(false);
  let userInfo = ref({} as userInfo);
  const userLogin = async (loginData: loginData) => {
    // console.log("loginData", loginData.value);

    let result = await reqLogin(loginData.value);
    console.log(result);
  };
  return { visible, userLogin, userInfo };
});
