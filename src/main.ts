import { createApp } from "vue";
import "./reset.scss";
import { router } from "@/router/index";
import App from "./App.vue";
import pinia from "@/store/";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

createApp(App)
  .use(ElementPlus, { locale: zhCn })
  .use(router)
  .use(pinia)
  .mount("#app");
