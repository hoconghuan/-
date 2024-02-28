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
          path: "register",
          name: "register",
          component: () => import("@/Pages/Hospital/register/index.vue"),
        },
        {
          // 详情
          path: "information",
          name: "information",
          component: () => import("@/Pages/Hospital/information/index.vue"),
        },
        {
          //预约
          path: "appointment",
          name: "appointment",
          component: () => import("@/Pages/Hospital/appointment/index.vue"),
        },

        {
          //诊断
          path: "diagnose",
          name: "diagnose",
          component: () => import("@/Pages/Hospital/diagnose/index.vue"),
        },
        {
          // 确认
          path: "check",
          name: "check",
          component: () => import("@/Pages/Hospital/check/index.vue"),
        },
      ],
      redirect: "/hospital/register",
    },
    {
      path: "/home",
      redirect: "/",
    },
  ],
});
