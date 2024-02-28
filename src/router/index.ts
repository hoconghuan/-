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
          path: "register",
          name: "register",
          component: () => import("@/Pages/Hospital/register/index.vue"),
        },
        {
          path: "check",
          name: "check",
          component: () => import("@/Pages/Hospital/check/index.vue"),
        },
        {
          path: "hospitalDetail",
          name: "hospitalDetail",
          component: () => import("@/Pages/Hospital/hospitalDetail/index.vue"),
        },
        {
          path: "information",
          name: "information",
          component: () => import("@/Pages/Hospital/information/index.vue"),
        },
        {
          path: "diagnose",
          name: "diagnose",
          component: () => import("@/Pages/Hospital/diagnose/index.vue"),
        },
      ],
    },
    {
      path: "/home",
      redirect: "/",
    },
  ],
});
