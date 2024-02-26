import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/Pages/Home/index.vue'),
        },
        {
            path: '/hospital',
            name: 'Hospital_detail',
            component: () => import('@/Pages/Hospital_detail/index.vue'),
        },
        {
            path: '/home',
            redirect: '/',
        }
    ]
})