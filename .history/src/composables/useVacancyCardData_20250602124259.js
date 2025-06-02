import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ru from '@/db/vacancies/ru.json'
import uz from '@/db/vacancies/uz.json'


export default function useVacancyCardData() {
    const { locale } = useI18n()

    const data = computed(() => {
        if (locale.value === 'uz') return uz
        return ru
    })

    const vacancies = () => data.value.vacancies

    return {vacancies}
}