import { createPinia } from 'pinia'
import router from '@/router'

export function introducePlugins {
    app.use(createPinia())
    app.use(router)
}