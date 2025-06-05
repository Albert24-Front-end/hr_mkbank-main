<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const items = computed(()=>{
    return [
        {
            heading: t('advantages_headings.first'),
            text: t('advantages_texts.first'),
        },
        {
            heading: t('advantages_headings.second'),
            text: t('advantages_texts.second'),
        },
        {
            heading: t('advantages_headings.third'),
            text: t('advantages_texts.third'),
        },
        {
            heading: t('advantages_headings.fourth'),
            text: t('advantages_texts.fourth'),
        },
    ]
})
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