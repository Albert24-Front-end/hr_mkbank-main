import { createI18n } from 'vue-i18n'
import RU from '@/plugins/locales/ru.json'
import UZ from '@/plugins/locales/uz.json'


export const i18n = createI18n({
  legacy: false,
  locale: localStorage.,
  fallbackLocale: 'ru',
  globalInjection: true,
  messages: {
    ru: RU,
    uz: UZ,
  }
})