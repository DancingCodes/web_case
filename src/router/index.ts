import { createRouter, createWebHistory } from "vue-router";

/**
 * path: 路由地址
 * component: 组件地址
 * meta: {
 *     asideShow: 是否在菜单中显示
 *     asideName: 在菜单中显示的名称
 *     menuType: 菜单嵌套时在菜单中展示的方式(menu(菜单) > group(组))
 *               menu: 需要将component设置为Main组件
 *               group: 只负责展示标题，不需要component
 * }
 * 
*/

const routes = [
    {
        path: '/',
        component: () => import('@/views/index/index.vue'),
        meta: {
            asideShow: true,
            asideName: 'index'
        }
    }, {
        path: '/elToPdf',
        component: () => import('@/views/elToPdf/index.vue'),
        meta: {
            asideShow: true,
            asideName: 'elToPdf'
        }
    }, {
        path: '/eCharts',
        component: () => import('@/views/eCharts/index.vue'),
        meta: {
            asideShow: true,
            asideName: 'eCharts'
        }
    }, {
        path: '/copyImgUpload',
        component: () => import('@/views/copyImgUpload/index.vue'),
        meta: {
            asideShow: true,
            asideName: 'copyImgUpload'
        }
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        meta: {
            asideName: '404'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


// // 前置守卫：每次路由切换之前调用
// router.beforeEach((to, _from, next) => {
//     // 如果没有匹配到路由，跳转至404页面
//     if (!routes.find(item => item.path === to.path)) {
//         next('/404')
//         return
//     }
//     next()
// })


export default router