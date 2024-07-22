<template>
    <div class="wrapper">
        <v-header />    <!-- header是标签不能用作组件名 所以用v-开头 引入的模块在页面上以什么名字为代表随便取 --> 
        <v-sidebar />   <!-- 文件名是 sidebar.vue是一个组件 ，组件是一个对象，对象引入在这个模块中被命名为v-sidebar  --> 
        <main class="conten-box"> 
        <router-view />
        </main>
    </div>
</template> 

<script setup>
// 先搭建组件树，后面再写逻辑 响应式思想， 全局资源共享
import vHeader from '../components/header.vue'    // 在 components 声明全局通用的组件 
import vSidebar from '../components/sidebar.vue'

</script>

<style>
.wrapper{
    height: 100vh;
    overflow: hidden;     /*  超出者隐藏 */  
}
</style>