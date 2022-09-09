import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import User from '../views/user/User'
import Main from '../views/Main'
import Shop from '../views/Shop/Shop'
import Page1 from '../views/other/page1'
import Page2 from '../views/other/page2'
import Login from '../views/Login/login'
import { Message } from 'element-ui';
import store from '../store'




const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },

        {
            path: '/',
            component: Main,
            meta: {
                title: 'menu1',
            },
            leaf: true,
            children: [{
                    path: '/home',
                    component: Home,
                    name: 'home',
                    meta: {
                        title: '首页',
                    },
                },
                {
                    path: '/user',
                    component: User,
                    name: 'user',
                    meta: {
                        title: '用户管理',
                    },
                },
                {
                    path: '/mall',
                    component: Shop,
                    name: 'mall',
                    meta: {
                        title: '商品管理',
                    },
                },
                {
                    path: '/page1',
                    component: Page1,
                    name: 'page1',
                    meta: {
                        title: '其他页面1',
                    },
                },
                {
                    path: '/page2',
                    component: Page2,
                    name: 'page2',
                    meta: {
                        title: '其他页面2',
                    },
                },
            ]
        },

    ],
})

//全局前置导航守卫  防止页面非法跳转
// 路由守卫登录鉴权
router.beforeEach(function(to, from, next) {
    store.commit('getToken')
    const token = store.state.token

    if (token) {
        next()
            // 判断是否根据修改地址栏进行的跳转
        let reloadType = null;
        try {
            reloadType = window.performance.navigation.type;
        } catch (err) {
            reloadType = 1;
        }
        if (reloadType === 0 && !from.name && to.path !== "/home") {
            console.error("非法改变路由");
            console.log(reloadType);

            next('/home') // 跳转到首页
        }
    } else {
        next('/')
    }
})







export default router