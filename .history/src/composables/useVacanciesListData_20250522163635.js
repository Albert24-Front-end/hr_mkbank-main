import {ref} from 'vue'
import { useI18n } from 'vue-i18n'
import ru from '@'


export default function useVacanciesListFilterDirection() {
    const { t } = useI18n()
    const directions = ref([
        {name: 'marketing', text: ()=> t('filter.direction.all')},
    ])

    return {directions}
}