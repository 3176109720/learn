import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home.vue'
import NProgress from  'nprogress'
import 'nprogress/nprogress.css'

const routes = [
    {
        path: '/', // 根路径
        redirect: '/dashboard', // 重定向
    },
    {
        path: '/', // 路径
        name: 'Home', // 名称
        component: Home, // 组件
        children: [  // 子路由
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: { 
                    title: '系统首页',
                    noAuth: true
                }, // 元数据
                // 通过使用 import() 函数来动态导入组件。这个函数会返回一个 Promise，并且在路由被访问时才会加载组件。
                component: () => import('../views/dashboard.vue') // 路由组件  懒加载  
            },
            {
                path: '/system-user',
                name: 'system-user',
                meta: {
                    title: '用户管理',
                    permiss: '11'
                },
                component: () => import('../views/system-user.vue')
            },
            {
                path: '/system-role',
                name: 'system-role',
                meta: {
                    title: '角色管理',
                    permiss: '12'
                },
                component: () => import('../views/system-role.vue')
            },
        ]
    },
    {
        path: '/login',
        meta: {
            title: '登录',  
            noAuth: true, // 来标识一个路由是否无需认证即可访问，也就是说不需要用户登录 ,在路由守卫中直接放行
        },
        component: () => import('../views/login.vue')
    },
    {
        path: '/403',
        meta: {
            title: '403',
            noAuth: true
        },
        component: () => import('../views/403.vue')
    },
    {
        path: '/404',
        meta: {
            title: '404',
            noAuth: true
        },
        component: () => import('../views/404.vue')
    },
    {
        path:'/:path(.*)',  //贪婪匹配，没有匹配到上述路由，就走这个 
        redirect:'/404'
    },
]
// createWebHistory允许前端应用程序使用类似于传统网站的 URL 结构，而无需每次路由切换都从服务器获取新的页面资源。

// 在传统的多页面应用（MPA）中，每次导航到不同页面都会触发浏览器向服务器发送请求，服务器返回新的 HTML 页面，因此会有页面刷新和加载延迟。
// 这种方式在用户体验和性能上可能存在问题，特别是在需要频繁切换页面或加载大量内容时。
// 相比之下，单页面应用(SPA)利用前端路由来管理应用程序的不同视图或页面。

// Vue Router 中的 createWebHistory 就是一个工具，它使用 HTML5 History API 来实现前端路由，避免了传统的页面刷新，使得页面间的切换更加流畅和快速。
// 同时它去除了 URL 中的 # 符号（hash 模式），让 URL 看起来更像传统的网站链接，和后端一样
// 在vue-router之前 只有后端有路由跳转，前端是没有路由的，
// 但是后端路由要切换页面请求新的资源要去服务器找新的url 所以会白屏刷新会变慢

// 搭建后台管理系统是给自己人用的，如果浏览器不适配就换一个，如果是用户就要考虑浏览器的兼容性

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    NProgress.start()
    document.title = to.meta.title
    const role = localStorage.getItem('ms_name') || 'user'
    const permiss = {
        admin: ['11', '12'],
        user: ['11']
    }
    if (!role && !to.meta.noAuth) {
        next('/login')
    }else if (typeof to.meta.permiss == 'string'   // 确认用户已经登录含有permiss值，解决登陆页面等不需要登录的无permiss界面一直跳403的问题
    && !permiss[role].includes(to.meta.permiss) 
    ) {
        next('/403')
    } else {
        next()  // 不需要登录或者登录了，有相应权限的页面
    }
})

router.afterEach(() => {
    NProgress.done()
})


export default router