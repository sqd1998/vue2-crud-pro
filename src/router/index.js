import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import User from '../views/user/User'
import Main from '../views/Main'
import Shop from '../views/Shop/Shop'
import Page1 from '../views/other/page1'
import Page2 from '../views/other/page2'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
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
                    path: '/shop',
                    component: Shop,
                    name: 'shop',
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
export default router