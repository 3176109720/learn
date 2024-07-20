<template>
    <div class="error-page">
        <div class="error-box">
            <div class="error-code">403 Forbidden</div>
            <div class="error-desc">抱歉，你没有权限访问该页面</div>
            <div class="error-handle">
                <router-link to="/">
                    <el-button type="primary" size="large">返回首页</el-button>
                </router-link>
                <el-button class="error-btn" size="large" @click="goBack">
                    返回上一页
                </el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
    router.go(-1)  //router.go() 方法是 Vue Router 提供的用于导航的方法之一。正数表示前进的步数。负数表示后退的步数。
 
}

</script>

<!-- scoped 表示局部样式 样式只在改片内生效 -->
<style scoped>
.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: #eef0fc;
    box-sizing: border-box;
}

.error-box {
    width: 400px;
    background-color: #fff;
    padding: 80px 50px;
    border-radius: 5px;
}

.error-code {
    line-height: 1;
    font-size: 70px;
    font-weight: bold;
    color: var(--el-color-primary);
    margin-bottom: 20px;
    text-align: center;
}

.error-desc {
    font-size: 20px;
    color: #777;
    text-align: center;
}

.error-handle {
    margin-top: 50px;
    text-align: center;
}

.error-btn {
    margin-left: 100px;
}
</style>