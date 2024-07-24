<template>
    <aside class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :collapse="sidebar.collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            :default-active="onRoutes"
            router
        >
            <template v-for="item in menuData">
                <template v-if="item.children">
                    <el-sub-menu :index="item.index" :key="item.index" v-permiss="item.id">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.children">
                            <el-sub-menu
                                v-if="subItem.children"
                                :index="subItem.index"
                                :key="subItem.index"
                                v-permiss="item.id"
                            >
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem, i) in subItem.children"
                                    :key="i"
                                    :index="threeItem.index"
                                >
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.index" v-permiss="item.id">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-permiss="item.id">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </aside>
  </template>
  
  <script setup>
  // Router 可能是指整个应用程序中负责管理不同URL路径的模块或实例，用于将不同的URL请求分派到对应的路由处理器。
  // Route 是指这些路径的具体定义
  import { useRoute } from "vue-router";
  import { useSidebarStore } from "../store/sidebar.js";
  import { menuData } from "./menu.js";
  
  const sidebar = useSidebarStore();
  const onRoutes = () => {
    return route.path
  } 
  </script>
  
  <style lang="scss" scoped>
  </style>