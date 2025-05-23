import {computed} from 'vue'
import { useI18n } from 'vue-i18n'
// import ru from '@/db/filter/newRu.json'
// import uz from '@/db/filter/newUz.json'


export default function useVacanciesListFilterData() {
    const { locale } = useI18n()
    // const direction = ru.direction;
    // const directions = ref(
    //     Object.keys(direction).map(key=>({
    //         name: key, text: () => t(`filter.direction.${key}`)
    //     }))

    // )
    // const directions = () =>{
    //     if (locale === 'ru') return '@/db/filter/newRu.json'
    //     if (locale === 'uz') return '@/db/filter/newUz.json'
    // };
    // const locations = () =>{
    //     if (locale === 'ru') return '@/db/filter/newRu.json'
    //     if (locale === 'uz') return '@/db/filter/newUz.json'
    // };

    const data = computed(() => {
        if (locale.value === 'uz') return '@/db/filter/newUz.json'
        return '@/db/filter/newRu.json'
    })

    const directions = computed(() => data.value.direction)
    const locations = computed(() => data.value.location)


    // const location = ru.location;
    // const locations = ref(
    //     Object.keys(location).map(key=>({
    //         name: key, text: () => t(`filter.location.${key}`)
    //     }))
    // )


    // if (locale === 'ru') return '@/db/filter/newRu.json'
    // if (locale === 'uz') return '@/db/filter/uz.json'

    return {directions, locations}
}