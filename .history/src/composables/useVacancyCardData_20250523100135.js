import {computed} from 'vue'
import { useI18n } from 'vue-i18n'
import ru from '@/db/vacancies/newRu.json'
import uz from '@/db/vacancies/newUz.json'


export default function useVacancyCardData() {
    const { locale } = useI18n()
    // const direction = ru.direction;
    // const directions = ref(
    //     Object.keys(direction).map(key=>({
    //         name: key, text: () => t(`filter.direction.${key}`)
    //     }))
    // )
    // const location = ru.location;
    // const locations = ref(
    //     Object.keys(location).map(key=>({
    //         name: key, text: () => t(`filter.location.${key}`)
    //     }))
    // )

    const data = computed(() => {
        if (locale.value === 'uz') return uz
        return ru
    })

    const headings = computed(() => data.value.heading)
    const locations = computed(() => data.value.location)




    return {headings, locations}
}