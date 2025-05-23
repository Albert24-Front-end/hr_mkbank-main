import {computed} from 'vue'
import { useI18n } from 'vue-i18n'
import ru from '@/db/filter/newRu.json'
import uz from '@/db/filter/newUz.json'


export default function useVacanciesListFilterData() {
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

    const directions = () => data.value.direction
    const locations = () => data.value.location




    return {directions, locations}
}