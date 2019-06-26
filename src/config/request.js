import axios from 'axios'
import { Toast } from 'mint-ui'
import store from 'src/store'
// import { getToken } from '@/utils/auth'
// 创建axios实例
const service = axios.create({
        baseURL: process.env.BASE_API, // api的base_url
        timeout: 10000 // 请求超时时间
    })
    // console.log(service)
    // request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    // console.log(config.url)
    if (store.getters.userInfo.ticket) {
        config.headers['ticket'] = store.getters.userInfo.ticket // 让每个请求携带token--['ticket']为自定义key 请根据实际情况自行修改
    }
    if (!config.headers['Content-Type']) {
        if (config.url != '/upload') {
            config.headers['Content-Type'] = 'application/json'
        }
    }
    config.headers['platform'] = 'front'
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => response,
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    err => {
        console.log('errwww' + err) // for debug
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = `${err.response.data.message}`
                    break

                case 401:
                    err.message = `${err.response.data.message}`
                    break

                case 403:
                    err.message = `${err.response.data.message}`
                    break

                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`
                    break

                case 405:
                    err.message = `方法错误: ${err.response.data.message}`
                    break

                case 408:
                    err.message = '请求超时'
                    break

                case 500:
                    err.message = `服务器出了点小问题，请稍后再试。`
                    break

                case 501:
                    err.message = '服务未实现'
                    break

                case 502:
                    err.message = '网关错误'
                    break

                case 503:
                    err.message = '服务不可用'
                    break

                case 504:
                    err.message = '网关超时'
                    break

                case 505:
                    err.message = 'HTTP版本不受支持'
                    break
            }
        }
        Toast({
            message: err.message,
            position: 'bottom',
            duration: 3 * 1000
        })
        console.log('❎❎')
        return Promise.reject(err)
    })

export default service