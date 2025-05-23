import { createPinia } from 'pinia'
import router from '@/router'
import {i18n} from '@/plugins/i18n'



export function introducePlugins(app) {
    app
    .use(i18n)
    .use(createPinia())
    .use(router)
}