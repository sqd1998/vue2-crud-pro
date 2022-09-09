import Vue from 'vue';
import Vuex from 'vuex';
// import user from './modules/user';
import token from './modules/token';


Vue.use(Vuex);
//初始化数据

var vuexStore = new Vuex.Store({
    modules: {
        token,
        // user,

    }
});
// 使用 export default 封装，让外部可以访问
export default vuexStore;