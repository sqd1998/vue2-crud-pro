import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import 'reset-css'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'
import { Loading } from 'element-ui';
// import "./api/mock"


// mock的开关，用于本地测试用，到上线时，关闭
const mock = true
if (mock) {
    require('./api/mock')
}

axios.defaults.baseURL = 'http://localhost:3000'

Vue.prototype.$http = axios
    //声明请求拦截器
let loadingInstance = null
axios.interceptors.request.use(config => {
        //开启loading效果
        loadingInstance = Loading.service({ fullscreen: true })
        return config
    })
    //声明响应拦截器
axios.interceptors.response.use(response => {
    loadingInstance.close()
        //关闭loading效果
    return response
}), error => {
    if (error.response.status == 302) {
        return error.response.data
    }
    Promise.reject(error)


}




Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')