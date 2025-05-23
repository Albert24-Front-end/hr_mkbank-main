import './styles/main.css'

import { createApp } from 'vue'
import { introducePlugins } from './plugins'
import App from '@/App.vue'

const app = createApp(App)

introducePlugins(app)

app.mount('#app')
