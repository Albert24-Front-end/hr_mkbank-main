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

    const allVacancies = computed(() => {
        const result = []
        for (let i = 0; i < data.value.vacancy.heading.length; i++) {
            result.push({
                heading: data.value.vacancy.heading[i],
                city: data.value.vacancy.location[i % data.value.vacancy.location.length], // если меньше локаций
                salary: data.value.vacancy.salary[i % data.value.vacancy.salary.length] || 'не указана',
                description: data.value.vacancy.description[i % data.value.vacancy.description.length] || '',
                // можно добавить date, если появится
            })
        }
        return result
      })




    return {headings, cities, salaries, descriptions, allVacancies}
}