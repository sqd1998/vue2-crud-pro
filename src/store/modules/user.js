const user = {
    //初始化存储
    state: null != window.sessionStorage.getItem('state') ? JSON.parse(window.sessionStorage.getItem('state')) : {
        count: 0,
        user: {
            name: 'sqd'
        }
    },
    //唯一取值的方法，$store.getters.getUser.name
    getters: {
        getUser(state) {
            return state.user;
        }
    },
    //唯一修改state的方法  同步阻塞
    mutations: {
        updateUser(state, user) {
            state.user = user;
        }
    },
    //异步调用mutations方法 this.$store.dispatch('asyncUpdateUser',{name:this.form.name})
    actions: {
        asyncUpdateUser(context, user) {
            context.commit('updateUser', user);
        }
    }
}
export default user;