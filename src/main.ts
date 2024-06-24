import { createApp } from "vue";
import "./reset.scss";
import { router } from "@/router/index";
import App from "./App.vue";
import pinia from "@/store/";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import visitor from "@/layout/visitor/index.vue";
createApp(App)
  .component("Visitor", visitor) // 注册全局组件,和app中注册的区别在于，再main.ts中注册的组件，可以被所有的页面组件使用，不用必须挂载。
  .use(ElementPlus, { locale: zhCn })
  .use(router)
  .use(pinia)
  .mount("#app");
