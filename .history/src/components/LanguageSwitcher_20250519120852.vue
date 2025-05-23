<script setup>
import { computed} from 'vue'
import { useI18n } from 'vue-i18n'

const {locale} = useI18n()

// const currentLang = ref(localStorage.getItem('lang')?.toLowerCase() || 'ru');

// watch(currentLang, (newLang)=>{
//     locale.value = newLang
//     localStorage.setItem('lang', newLang)
// })

// const toggleLang = () =>{
//     currentLang.value = currentLang.value === 'ru' ? 'uz' : 'ru'
// }

const toggleLang = () => {
    locale.value === "ru" ? locale.value = 'uz' : locale.value = 'ru';
    localStorage.setItem('lang', locale.value);
}

const flagSource = computed(()=>{
    return locale.value === 'ru'
    ? new URL('../assets/pictures/free-icon-russia-555451.png', import.meta.url).href
    : new URL('../assets/pictures/free-icon-uzbekistan-5975795.png', import.meta.url).href
})

const langLabel = computed(()=>{
    return locale.value === 'ru'
    ? "Ru"
    : "O'z"
})
</script>

<template>
    <div class="cursor-pointer w-fit" @click="toggleLang">
        <button class="flex gap-2 justify-center items-center">
            <span><img :src="flagSource" :alt="langLabel + '-flag'" class="w-[24px] h-auto"></span>
            {{ langLabel }}
        </button>
    </div>
</template>

<style scoped>

</style>