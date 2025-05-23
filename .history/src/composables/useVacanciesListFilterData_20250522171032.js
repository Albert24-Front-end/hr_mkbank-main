import {ref} from 'vue'
import { useI18n } from 'vue-i18n'
import ru from '@/plugins/locales/ru.json'


export default function useVacanciesListFilterData() {
    const { t } = useI18n()
    const direction = ru.filter.direction;
    const directions = ref(
        Object.keys(direction).map(key=>({
            name: key, text: () => t(`filter.direction.${key}`)
        }))
    )

    return {directions}
}