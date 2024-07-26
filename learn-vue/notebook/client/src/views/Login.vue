<template>
    <div class="login">
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="" alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <!-- type="password"  字符隐藏 -->
                    <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <!-- round 圆角 block 占据一整行  -->
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref('')
const password = ref('')

const onSubmit = () => {
    console.log(username.value)
}

</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;
    h1{
        height: 0.6933rem;
        font-size: 0.48rem;
        text-align: center;
        line-height: 0.6933rem;
        margin-top: 1.12rem;
    }
}
</style>