import { createI18n } from 'vue-i18n'
import ru from '@/plugins/locales/ru.json'
import uz from '@/plugins/locales/uz.json'


export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang'),
  fallbackLocale: 'ru',
  globalInjection: true,
  messages: {
    ru,
    uz
  }
})