import axios from 'axios'
import { Message, Loading } from 'element-ui'

/**
 * 封装axios 
*/

const error = () => {
    Message({
        type: 'error',
        message: '遇到错误，刷新重试',
        duration: 2 * 1000
    })
}

let loading

const startLoading = () => {
    loading = Loading.service({
        lock: true,
        text: '加载中...',
        backgroud: 'rgba(0,0,0,0.7)'
    })
}

const endLoading = () => {
    loading.close()
}

const service = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    tineout: 5000 // 请求时间限制
})

/**
 * 请求拦截器
*/

service.interceptors.request.use(
    config => {
        startLoading()
        return config
    },
    err => {
        endLoading()
        error()
        Priomis.reject(err)
    }
)

/**
 * 响应拦截器
*/

service.interceptors.response.use(
    response => {
        endLoading()
        return response.data
    },
    err => {
        endLoading()
        error()
        return Prpmise.reject(err)
    }
)

export default service