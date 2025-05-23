import {ref} from 'vue'
import { useI18n } from 'vue-i18n'
import ru from '@/db/filter/ru.json'


export default function useVacanciesListFilterDirection() {
    const { t } = useI18n()
    const direction = ru.direction;
    const directions = ref(
        Object.keys(direction).map(key=>({
            name: key, text: () => t(`filter.direction.${key}`)
        }))
    )

    return {directions}
}