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
    ElAvatar,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
} from 'element-plus';
// 引入组件库依赖的样式
import 'element-plus/dist/index.css';
import './assets/styles/variable.css'

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
    .use(ElAvatar)
    .use(ElDropdown)
    .use(ElDropdownMenu)
    .use(ElDropdownItem)
    .use(ElMenu)
    .use(ElSubMenu)
    .use(ElMenuItem)
// 自定义指令
import { usePermissStore } from './store/permiss';

const permissStore = usePermissStore();

app.directive('permiss', {
    mounted(el, binding) {   // el: 承载指令的节点  指令所绑定的元素，可以用来直接操作 DOM   binding: 传给他的属性，给指令绑定的属性
        if (binding.value &&
            !permissStore.key.includes(String(binding.value))
        ) {
            el['hidden'] = true
        }
    }
})

app
    .mount('#app')