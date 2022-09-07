import axios from 'axios'

// export const getMenu = (param) => {
//     return axios.request({
//         url: '/permission/getMenu',
//         method: 'post',
//         data: param,
//     })
// }

export const getData = () => {
    return axios.request({
        url: '/home/getData',
        method: 'get',
    })
}


export const getUser = (params) => {
    return axios.request({
        url: '/user/getList',
        method: 'get',
        params

    })
}

export const addUserData = (params) => {
    return axios.request({
        url: '/user/add',
        method: 'post',
        data: params,
    })
}

export const editUserData = (params) => {
    return axios.request({
        url: '/user/edit',
        method: 'post',
        data: params,
    })
}

export const delUserData = ({ id }) => {

    return axios.request({
        url: '/user/del',
        method: 'post',
        params: {
            id
        },

        // data: params,


    })
}