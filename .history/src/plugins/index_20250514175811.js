import { createPinia } from 'pinia'
import router from '@/router'

export function introducePlugins(app) {
    app
    .use()
    .use(createPinia())
    .use(router)
}