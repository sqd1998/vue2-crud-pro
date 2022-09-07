const path = {
    //初始化存储
    state: {
        pathList: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'home'
        }],
        currentMenu: null
    },
    //唯一取值的方法，$store.getters.getUser.name
    // getters: {
    //     getPath(state) {
    //         return state.pathList;
    //     }
    // },
    //唯一修改state的方法  同步阻塞
    mutations: {
        updatePath(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                console.log(state.pathList);

                const result = state.pathList.findIndex(item => item.name === val.name)
            }
            if (result === -1) {
                state.pathList.push(val)

            } else {
                state.currentMenu = null

            }
        }
    },
    //异步调用mutations方法 this.$store.dispatch('asyncUpdateUser',{name:this.form.name})
    // actions: {
    //     updatePath(context, val) {
    //         context.commit('updatePath', val);
    //     }
    // }
}
export default path;