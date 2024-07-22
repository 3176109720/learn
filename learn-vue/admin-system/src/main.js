import { createApp } from 'vue'
import { createPinia } from 'pinia'  // 凤梨
// 引入Vue组件库 ７０％的组件有组件库提供了  按需引入
// * as 批量导入 引入全部组件库  
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// console.log(ElementPlusIconsVue, '////');
// 当有许多个expost抛出时，可以使用* as 批量引入
// import * as DemoData from './text'
// console.log(DemoData);
// 需要部分引入时   deffault{}  默认导出 
// import Data, { a, c } from './text'
// console.log(Data, a, c);
import { 
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElLink,
    ElIcon,
} from 'element-plus';
// 引入组件库依赖的样式
import 'element-plus/dist/index.css';

import router from './router';

import App from './App.vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) { // Object.entries() 方法返回一个数组，其元素为对象的可枚举属性的键值对数组。
    app.component(key, component)  //全局注册图标  并且只用
}

app
    .use(createPinia())
    .use(router)
    .use(ElButton)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElCheckbox)
    .use(ElLink)
    .use(ElIcon)
    .mount('#app')