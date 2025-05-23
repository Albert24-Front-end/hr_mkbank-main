import { createI18n } from 'vue-i18n'
import RU from '@/plugins/locales/ru.json'
import UZ from '@/plugins/locales/uz.json'


export const i18n = createI18n({
  legacy: false,
  locale: 'RU',
  fallbackLocale: 'RU',
  messages: {
    RU,
    UZ,

    ru:{
      "buttons": {
        "bank_info": "О банке",
        "career": "Карьера",
        "vacancies": "Вакансии",
        "contacts": "Контакты",
        "join_us": "Станьте частью команды",
        "send_email": "Отправить"
    },
    "headings": {
        "hero_heading": "Ценности объединяют",
        "why_we_heading": "Почему стоит работать именно с нами",
        "advantages_heading": "Почему именно Мы?",
        "recruiting_heading": "Этапы рекрутинга:"

    }
    },
    uz: {
      
    }
  }
})