<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const items = [
    {
        heading: t('advantages_headings'),
        text: "Овладейте профессией мечты в различных подразделениях и раскройте свой потенциал!"
    },
    {
        heading: t('advantages_headings'),
        text: "Мы ценим дружную атмосферу и стремимся, чтобы вы с первого дня чувствовали себя важным членом команды!"
    },
    {
        heading: t('advantages_headings'),
        text: "В mkBank Academy вы можете повысить квалификацию и навыки более чем по 50 направлениям!"
    },
    {
        heading: t('advantages_headings'),
        text: "Откройте для себя гармонию финансового и карьерного роста!"
    },
]
</script>

<template>
    <section class="w-full py-10 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
            <h1 class="text-lg md:text-3xl text-center text-primary mx-auto mb-8">{{ $t('headings.advantages_heading') }}</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
                <div class="w-full flex flex-col items-center border-[1px] border-gray-300 rounded-xl shadow-lg max-w-full" v-for="(item, i) in items" :key="i" >
                    <h3 class="text-lg font-semibold px-5 py-3 text-center">{{ item.heading }}</h3>
                    <div class="w-full flex justify-center items-center text-center" data-orientation="horizontal" role="separator">
                        <div class="w-full border-gray-400 border-solid border-b"></div>
                    </div>
                    <p class="px-5 py-3 text-center">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>