import {ref} from 'vue'
import { useI18n } from 'vue-i18n'


export default function useVacanciesListFilterDirection() {
    const { t } = useI18n()
    const directions = ref([
        {name: 'marketing', text: ()=> t('filter.direction.all')}
    ])
}