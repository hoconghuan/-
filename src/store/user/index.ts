import { defineStore } from "pinia";
import { ref } from "vue";
import type { loginData, userInfo } from "@/api/user/type";
import { reqLogin } from "@/api/user/index";
import { setToken, getToken, removeToken } from "@/utils/user";
export const useUserStore = defineStore("User", () => {
  let visible = ref(false);
  let userInfo = ref(JSON.parse(getToken() as string) || ({} as userInfo));
  // console.log(userInfo.value);

  const userLogin = async (loginData: loginData) => {
    let result = await reqLogin(loginData);

    if (result.code === 200) {
      userInfo.value = result.data;
      // 永久存储数据
      setToken(JSON.stringify(userInfo.value));
    }
  };
  const userLogout = () => {
    removeToken();
    userInfo.value = { name: "", token: "" };
  };
  const queryState = () => {
    let timer = setInterval(() => {
      if (getToken()) {
        visible.value = false;
        console.log(visible.value);

        userInfo.value = JSON.parse(getToken() as string);
        // console.log(userInfo.value);
        clearInterval(timer);
      }
    }, 1000);
  };
  return { visible, userLogin, userInfo, userLogout, queryState };
});
