# v3 后台管理系统

- 实习项目 外包必备
    - 实习生一般刚开始就是做后台管理系统，因为后台出问题不是什么大事
    - 什么项目都要有个后台
        外包一般都是做后台，甲方经常临时加要求

- vue 组件库 elementplus
    - 在main.js 中引入ELementPlus 组件库和它的样式，并use 一下使它被全局使用
    - ellement-plus组件库太大了，影响首页加载速度
    - 引入按需加载理念 不引入整个组件库，按需引入需要的组件，并且逐个use引入全局使用

- 搭建路由 
    - 因为后台管理系统是给自己人使用的，直接使用history，不用考虑care hash 的兼容性
    - 路由守卫
        - 权限  登录
        - 权限分级 身份权限  admin uesr
    
- 五星路由功能
    - 两种路由形式的优缺点
        hash 兼容好  但是形式不好
        history 兼容性差 但是和后端路由一致
        开发要结合项目需求分析，后台系统 自己人使用就用 history
        用户项目，如果要考虑兼容性，就使用hash ，用户端移动项目不太需要兼容性时，使用history 也可以
        hash(用户端 + PC 产品)e
    - 路由的懒加载  通过使用 import() 函数来动态导入组件。这个函数会返回一个 Promise，并且在路由被访问时才会加载组件。
                    component: () => import('组件文件地址')
    - 二级路由，子路由
    - 路由守卫
        - 路由鉴权  auth
        - 角色权限  role   一般分为admin user 或者一级二级管理员  通过配置权限数组 跳转时检查包不包含权限，不包含则跳转至403
    - 403 404 
    - meta 属性用法
        - title document.title 设置页面标题
        - auth login  设置权限登录，没登陆就自动跳转登录页面
        - permiss role 设置权限
    - NProgress  进度条
        提升用户体验
        router.beforeEach
        router.afterEach
    - 路由要把history 的概念展示出来
        访问历史  router-link
        地址栏切换 
        useRouter push 去哪里 pop 返回上一页，不常用  go(-1) 返回上一页，较为频繁使用 

- ElFrom 的用法
    - ElementPlus UI组件库中的From组件
    - ElFrom ElFromItem ElInput ElCheckbox
    - v-model 双向绑定 reactive { username, password, ... }
        - ElFrom :model="param"
    - validate rules 配置一下
        - 对 from 进行 ref 绑定，绑定的是From 组件
        - 提交之前 valid 一下 From对象上有validate方法
    - 提交 反馈成功或失败(轻提示)  跳转

- pinia
    - 状态管理
    - 轻量化的vuex
    - app.use(creatPinia())

- 全局状态设计
    - collapse 侧边栏是否折叠  true | false
        - 需要考虑窄屏的pad
    - 数据管理设计了 permiss 权限状态
        - 跨组件层级访问是常态，
        - key, defaultList
        - defaultList  可以用于计算  login.vue登陆时通过defaultList拿到所有的权限，再根据ms_name的值，this.handle_set  key 设置他的权限
        - 当登录完成后 router.js 中的路由守卫会自动再运行一次 403会重新计算是否有权限 
        - 任何需要校验权限的地方 会自动响应式使用 

- Object.entrise 的用法 和应用场景
    - es6 的新增的遍历对象的方法
    - 它在Object.key() Object.value() 的基础上 将key value值作为一个数组的一二项返回一个二维数组
    - app.component 全局声明组件的时候 一次性把ElementPlus/icons全部注册为全局组件
    - 利用for of 遍历+ 展开运算符 进行全局注册操作
    - 因为ElementPlus 设计的很好，可能用icons  企业一般会有自己的icon
        ElementPlus 将 icons 拆开 更轻 ，同时也提供了定制性 