import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import { introducePlugins } from './plugins'

const app = createApp(App)

introducePlugins(app)

app.mount('#app')
