import { defineStore } from "pinia";
import { ref } from "vue";
import type { loginData, userInfo } from "@/api/user/type";
import { reqLogin } from "@/api/user/index";
export const useUserStore = defineStore("User", () => {
  let visible = ref(false);
  let userInfo = ref(
    JSON.parse(localStorage.getItem("userInfo") as string) || ({} as userInfo)
  );
  console.log(userInfo.value);

  const userLogin = async (loginData: loginData) => {
    // console.log("loginData", loginData.value);

    let result = await reqLogin(loginData.value);
    console.log(result);
    if (result.code === 200) {
      userInfo.value = result.data;
      // 永久存储数据
      localStorage.setItem("userInfo", JSON.stringify(result.data));
    }
  };
  return { visible, userLogin, userInfo };
});
