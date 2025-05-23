import './assets/main.css'

import { createApp } from 'vue'
import 
import App from '@/App.vue'
import { introducePlugins } from './plugins'

const app = createApp(App)

introducePlugins(app)

app.mount('#app')
