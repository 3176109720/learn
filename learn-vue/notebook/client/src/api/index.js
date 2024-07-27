import axios from "axios";
import { showToast } from 'vant';

axios.defaults.baseURL = "http://localhost:3000";  //设置 Axios 请求的默认基础 URL  方便修改地址
axios.defaults.headers.post['Content-Type'] = 'application/json'   // 指定 POST 请求的默认头部信息中的数据为JSON 格式的数据

// 请求拦截


// 响应拦截
axios.interceptors.response.use(res => {
    if (res.status !== 200){ // 接口没有请求成功  程序性错误
        showToast('服务器异常');
        return Promise.reject(res); // 抛出异常
    } else {
        if (res.data.code !== '800') {  // 为800时  没有错误，但是没有数据   不为800时  出现逻辑错误
            showToast(res.data.msg);
            return Promise.reject(res); // 抛出异常
        } 
        return res.data;
    }
});

export default axios;  