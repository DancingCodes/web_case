import { createApp } from 'vue'
import App from './App.vue'

// CSS初始化
import 'normalize.css/normalize.css'

// Element Plus暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'

// 滚动条美化
import '@/assets/styles/scrollbar.scss'

// vue Router
import router from '@/router/index.ts'

// Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
// Pinia持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)
app.use(router).use(pinia)
app.mount('#app')

