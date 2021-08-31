import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 重置样式
import '@/assets/css/minireset.css'
// element-plus样式
import 'element-plus/dist/index.css'
// 自定义样式
import '@/assets/css/index.less'
// 按需引入Element组件
import { globalRegister } from '@/global'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(globalRegister)
app.mount('#app')
