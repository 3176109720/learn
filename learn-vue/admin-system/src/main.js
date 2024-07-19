import { createApp } from 'vue'
// 引入vue组件库 正常工作时70%的组件由组件库提供
import ElementPlus from 'element-plus'
// 引入组件库依赖的的css样式
import 'element-plus/dist/index.css'
import router from './router'

import App from './App.vue'

const app = createApp(App)
app
    .use(ElementPlus)
    .use(router)
    .mount('#app')
