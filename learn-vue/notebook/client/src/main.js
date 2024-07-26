import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'lib-flexible/flexible.js'
import './assets/reset.css'

import { Button, Form, Field, CellGroup } from 'vant';
import 'vant/lib/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);


app.mount('#app')
