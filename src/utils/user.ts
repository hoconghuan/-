export const setToken = (userInfo: string) => {
  localStorage.setItem("USERINFO", userInfo);
};

export const getToken = () => {
  return localStorage.getItem("USERINFO");
};

//清除本地存储用户相关的数据
export const removeToken = () => {
  localStorage.removeItem("USERINFO");
};
