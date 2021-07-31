import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import AMap from 'vue-amap'
import 'element-plus/lib/theme-chalk/index.css'
import 'tailwindcss/tailwind.css'
import './style/iconfont.css'
import 'normalize.css'
import './style/base.scss'
// import Vconsole from 'vconsole'

// eslint-disable-next-line no-new
// new Vconsole()

createApp(App).use(ElementPlus, { size: 'small', zIndex: 3000 }).use(store).use(router).mount('#app')
