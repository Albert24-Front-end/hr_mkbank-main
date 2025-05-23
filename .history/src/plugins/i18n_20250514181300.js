import { createI18n } from 'vue-i18n'
import ru from '@/plugins/'


export const i18n = createI18n({
  locale: 'RU',
  messages: {
    RU: RU,
    UZ: UZ,
  }
})