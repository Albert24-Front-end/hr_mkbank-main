import { createI18n } from 'vue-i18n'
import RU from '@/plugins/locales/ru.json'


export const i18n = createI18n({
  locale: 'RU',
  messages: {
    RU: RU,
    UZ: UZ,
  }
})