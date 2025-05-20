import { createRouter, createWebHashHistory } from 'vue-router'

// 定义路由
const routes = [
    {
        path: '/',
        name: 'Root',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    // 重定向：当用户访问未定义的路径时，重定向到首页
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router