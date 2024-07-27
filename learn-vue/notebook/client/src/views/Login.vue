<template>
    <div class="login">
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="https://ts1.cn.mm.bing.net/th/id/R-C.0e1fbce488a519c200da772830dc64c8?rik=Q8%2b1%2fVU7SAgGAg&riu=http%3a%2f%2fp.qqan.com%2fup%2f2021-3%2f16151771636852522.jpg&ehk=dawiTiEOvHxg7Eu3gZ9aNmL2ejBO3SxKBV5Q5bcmclc%3d&risl=&pid=ImgRaw&r=0" alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <!-- type="password"  字符隐藏 -->
                    <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
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

        <p class="register">新用户？点击此处注册</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from '@/api'

const username = ref('')
const password = ref('')

const onSubmit = async (values) => {
    console.log(values)   // 向后端发请求，将账号密码传给后端
    const res = await axios.post('/user/login',values) 
    console.log(res);
}

</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;  // 使用怪异盒模型 
    overflow: hidden;  // 创建 BFC（块级格式化上下文）
    position: relative;
    h1{
        height: 0.6933rem;
        font-size: 0.48rem;
        text-align: center;
        line-height: 0.6933rem;
        margin-top: 1.12rem;
    }
    .login-wrapper{
        width: 7.44rem;
        border: 1px solid rgba(187, 187, 187, 1);
        margin: 0 auto; // 水平居中   或者将父容器设置为flex布局  或者定位 
        margin-top: 1.7rem;
        border-radius: 0.3rem;  // 设置圆角半径
        box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);  // x轴偏移量 y轴偏移量 模糊程度 阴影宽度 阴影颜色 
        padding: 15px; 
        .avatar{
            width: 2.4rem;
            height: 2.4rem;
            margin: 1rem auto 0.77rem;
            border-radius: 50%; // 设置圆角半径，并且圆角的半径为元素本身宽度和高度的一半
            overflow: hidden; // 超出容器的图片部分隐藏
            img{
                width: 100%;
            }
        
        }
    }
    .register{
        position: absolute;
        bottom: 30px;
        // 绝对定位 使用定位
        left: 50%;
        transform: translateX(-50%);
    }
}
// 在vue项目中更改ui框架中的样式，需要深度修改 
:deep(.van-field__label){  
    width: 45px;
}
</style>