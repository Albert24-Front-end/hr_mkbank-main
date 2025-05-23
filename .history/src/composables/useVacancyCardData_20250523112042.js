import {computed} from 'vue'
import { useI18n } from 'vue-i18n'
import ru from '@/db/vacancies/ru.json'
import uz from '@/db/vacancies/uz.json'


export default function useVacancyCardData() {
    const { locale } = useI18n()

    const data = computed(() => {
        if (locale.value === 'uz') return uz
        return ru
    })

    const headings = computed(() => data.value.heading)
    const cities = computed(() => data.value.location)
    const salaries = computed(() => data.value.salary)
    const descriptions = computed(() => data.value.description)




    return {headings, cities, salaries, descriptions}
}