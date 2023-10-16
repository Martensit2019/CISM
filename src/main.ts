import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import './assets/styles/index.scss'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App).use(router).use(pinia)

app.mount('#app')
