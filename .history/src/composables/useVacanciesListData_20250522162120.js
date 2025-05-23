import {ref} from 'vue'
import { useI18n } from 'vue-i18n'


export default function useVacanciesListParagraphs() {
    const { t } = useI18n()
    const paragraphs = ref([
        {}
    ])
}