import { createPinia } from 'pinia'
import router from '@/router'
import { createI18n } from 'vue-i18n'

export function introducePlugins(app) {
    app
    .use(i18n)
    .use(createPinia())
    .use(router)
}