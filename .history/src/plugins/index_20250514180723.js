import { createPinia } from 'pinia'
import router from '@/router'
import {i18n} from '@/plugins/'



export function introducePlugins(app) {
    app
    .use(i18n)
    .use(createPinia())
    .use(router)
}