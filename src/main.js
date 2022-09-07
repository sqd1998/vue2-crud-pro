import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import 'reset-css'
// import Service from "./untils/Service";
import Vuex from 'vuex';
import store from './store'
// import "./api/mock"


// mock的开关，用于本地测试用，到上线时，关闭
const mock = true
if (mock) {
    require('./api/mock')
}

// Vue.prototype.$axios = Service




Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')