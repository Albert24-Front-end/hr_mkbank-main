import {ref} from 'vue'
import { useI18n } from 'vue-i18n'
import ru from '@/db/filter/ru.json'


export default function useVacanciesListFilterDirection() {
    const { t } = useI18n()
    const direction = ru;
    const directions = ref(
        Object.keys(direction).map(key=>({
            name: 'marketing', text: () => t('filter.direction.all')
        }))
        [
        {name: 'marketing', text: ()=> t('filter.direction.all')},
    ])

    return {directions}
}