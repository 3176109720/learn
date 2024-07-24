<template>
    <div class="wrapper">
        <v-header /> <!-- header是标签不能用作组件名 所以用v-开头 引入的模块在页面上以什么名字为代表随便取 -->
        <v-sidebar /> <!-- 文件名是 sidebar.vue是一个组件 ，组件是一个对象，对象引入在这个模块中被命名为v-sidebar  -->
        <!-- 动态绑定类名 -->
        <main class="content-box" 
        :class="{'content-collapse': sidebarStore.collapse}"  
        >
            <router-view />
        </main>
    </div>
</template>

<script setup>
import { useSidebarStore } from '../store/sidebar'
// 先搭建组件树，后面再写逻辑 响应式思想， 全局资源共享
import vHeader from '../components/header.vue'    // 在 components 声明全局通用的组件 
import vSidebar from '../components/sidebar.vue'

const sidebarStore = useSidebarStore()

</script>

<style>
.wrapper {
    height: 100vh;
    overflow: hidden;
    /*  超出者隐藏 */
}

.content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left 0.3s ease-in-out;
    transition: left 0.3s ease-in-out;
    background: #eef0fc;
    overflow: hidden;
}

.content {
    width: auto;
    height: 100%;
    padding: 20px;
    overflow-y: scroll;
    box-sizing: border-box;
}

.content::-webkit-scrollbar {
    width: 0;
}

.content-collapse {
    left: 65px;
}
</style>