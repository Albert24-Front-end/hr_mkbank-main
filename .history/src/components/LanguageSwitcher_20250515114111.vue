<script setup>
import ref from 'vue'

const currentLang = ref('ru');

const toggleLang = () =>{
    currentLang.value = currentLang.value === 'ru' ? 'uz' : 'ru'
}

const flagSource = computed(()=>{
    return currentLang.value === 'ru'
    ? new URL('../assets/pictures/free-icon-russia-555451.png', import.meta.url).href
    : new URL('../assets/pictures/free-icon-uzbekistan-5975795.png', import.meta.url).href
})

const langLabel = computed(()=>{
    return currentLang.value === 'ru'
    ? "RU"
    : "O'z"
})
</script>

<template>
    <div class="cursor-pointer ">
        <button class="flex gap-2 justify-center items-center">
            <span><img src= alt="russian-flag" class="w-[24px] h-auto"></span>
            {{ langLabel }}
        </button>
    </div>
</template>

<style scoped>

</style>