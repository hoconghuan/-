import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/Pages/Home/index.vue"),
    },
    {
      path: "/hospital",
      name: "hospital",
      component: () => import("@/Pages/Hospital/index.vue"),
      children: [
        {
          //登记
          path: "appointment_register",
          name: "appointment_register",
          component: () =>
            import("@/Pages/Hospital/appointment_register/index.vue"),
        },
        {
          // 详情
          path: "hospital_info",
          name: "hospital_info",
          component: () => import("@/Pages/Hospital/hospital_info/index.vue"),
        },
        {
          //预约
          path: "appointment_info",
          name: "appointment_info",
          component: () =>
            import("@/Pages/Hospital/appointment_info/index.vue"),
        },

        {
          //诊断
          path: "diagnose_info",
          name: "diagnose_info",
          component: () => import("@/Pages/Hospital/diagnose_info/index.vue"),
        },
        {
          // 确认
          path: "check_cancel",
          name: "check_cancel",
          component: () => import("@/Pages/Hospital/check_cancel/index.vue"),
        },
      ],
      redirect: "/hospital/appointment_register",
    },
    {
      path: "/wxlogin",
      name: "wxlogin",
      component: () => import("@/Pages/WxLogin/index.vue"),
    },
    {
      path: "/home",
      redirect: "/",
    },
  ],
});
