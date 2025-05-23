<script setup>
import Dropdown from '../components/DropDown.vue'
import { computed } from 'vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const items = computed(() => {
  return [
    {
      heading: t('dropdown_headings.first'),
      number: 1,
      content: [
        t('first_dropdown_text.first'),
        t('first_dropdown_text.second'),
        t('first_dropdown_text.third'),
      ],
    },
    {
      heading: t('dropdown_headings.second'),
      number: 2,
      content: [
        t('second_dropdown_text.first'),
        t('second_dropdown_text.second'),
        t('second_dropdown_text.third'),
      ],
    },
    {
      heading: t('dropdown_headings.third'),
      number: 3,
      content: [
        t('third_dropdown_text.first'),
        t('third_dropdown_text.second'),
        t('third_dropdown_text.third'),
      ],
    },
  ]
})
</script>
<template>
  <section class="relative w-full h-screen py-10 bg-gray-100" id="why-we">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <h1 class="text-lg md:text-3xl text-center text-primary mx-auto mb-8">
        {{ t('headings.why_we_heading') }}
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-6 w-full">
        <div class="w-full bg-white max-h-auto rounded-lg lg:mb-0 p-6">
          <img
            src="../assets/pictures/why-we.png"
            alt="why-we"
            class="w-full object-contain h-auto max-h-96"
          />
        </div>
        <div class="flex flex-col items-center justify-center gap-4 lg:pl-6">
          <Dropdown
            class="w-full h-auto"
            v-for="(item, index) in items"
            :key="index"
            :heading="item.heading"
            :number="item.number"
            :content="item.content"
          />
        </div>
      </div>
    </div>
  </section>
</template>
