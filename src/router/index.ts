import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/hospital",
      name: "hospital",
      component: () => import("@/pages/hospital/index.vue"),
      children: [
        {
          //登记
          path: "appointment_register",
          name: "appointment_register",
          component: () =>
            import("@/pages/hospital/appointment_register/index.vue"),
        },
        {
          //预约挂号后续1
          path: "register_step1",
          component: () =>
            import("@/pages/hospital/appointment_register/register_step1.vue"),
        },
        {
          path: "register_step2",
          component: () =>
            import("@/pages/hospital/appointment_register/register_step2.vue"),
        },
        {
          // 详情
          path: "hospital_info",
          name: "hospital_info",
          component: () => import("@/pages/hospital/hospital_info/index.vue"),
        },
        {
          //预约
          path: "appointment_info",
          name: "appointment_info",
          component: () =>
            import("@/pages/hospital/appointment_info/index.vue"),
        },

        {
          //诊断
          path: "diagnose_info",
          name: "diagnose_info",
          component: () => import("@/pages/hospital/diagnose_info/index.vue"),
        },
        {
          // 确认
          path: "check_cancel",
          name: "check_cancel",
          component: () => import("@/pages/hospital/check_cancel/index.vue"),
        },
      ],
      redirect: "/hospital/appointment_register",
    },
    {
      path: "/wxlogin",
      name: "wxlogin",
      component: () => import("@/pages/wxlogin/index.vue"),
    },

    {
      path: "/home",
      redirect: "/",
    },
  ],
});
