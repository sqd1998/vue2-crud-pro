import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
// import path from './modules/pathList';


Vue.use(Vuex);
//初始化数据

var vuexStore = new Vuex.Store({
    modules: {

        user
    }
});
// 使用 export default 封装，让外部可以访问
export default vuexStore;