import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/report1',
        name:'report1',
        component: () => import('../views/Page1.vue'),
    },
    {
        path: '/report2',
        name:'report2',
        component: () => import('../views/Page2.vue')
    },
    { path: '/:path(.*)', redirect: '/404' },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;