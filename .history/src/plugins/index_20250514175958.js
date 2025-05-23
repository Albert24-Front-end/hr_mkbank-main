import { createPinia } from 'pinia'
import router from '@/router'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  // something vue-i18n options here ...
})

export function introducePlugins(app) {
    app
    .use(i18n)
    .use(createPinia())
    .use(router)
}