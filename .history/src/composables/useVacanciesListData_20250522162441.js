import {ref} from 'vue'
import { useI18n } from 'vue-i18n'


export default function useVacanciesListFilterData() {
    const { t } = useI18n()
    const filters = ref([
        {}
    ])
}