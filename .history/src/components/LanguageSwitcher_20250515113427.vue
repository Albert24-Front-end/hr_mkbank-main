<script setup>
import ref from 'vue'

const currentLang = ref('ru');

const toggleLang = () =>{
    currentLang.value = currentLang.value === 'ru' ? 'uz' : 'ru'
}

const flagSource = computed(()=>{
    return currentLang.value === 'ru' ? 
})

const toggleFlag = () =>{
    return 
}
</script>

<template>
    <div>
        <button class="flex gap-2 justify-center items-center">
            <span><img src="../assets/pictures/free-icon-russia-555451.png" alt="russian-flag" class="w-[24px] h-auto"></span>
            RU
        </a>
        <button class="flex gap-2 justify-center items-center">
            <span><img src="../assets/pictures/free-icon-uzbekistan-5975795.png" alt="uzbek-flag" class="w-[24px] h-auto"></span>
            O'z
        </a>
    </div>
</template>

<style scoped>

</style>