<script setup>
import { computed } from 'vue'
import VacancyCard from '@/components/VacancyCard.vue'
import useVacanciesListFilterData from '@/composables/useVacanciesListFilterData'
import { useI18n } from 'vue-i18n'
import useVacancyCardData from '@/composables/useVacancyCardData'

const {headings, cities,salaries, descriptions} = useVacancyCardData()
const {t} = useI18n()

const vacancies = computed(()=>{
  console.log(headings[0]);
  return [
    {
      heading: headings.filter(h=>),
      city: cities[0],
      salary: salaries[0],
      description: descriptions[0]
    }
  ]
})

const { directions, locations } = useVacanciesListFilterData()

</script>

<template>
  <section class="w-full py-20 bg-gray-50" id="vacancies-list">
    <div class="@container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl lg:text-3xl font-medium mb-8">{{ t('vacancies-list.heading') }}</h1>
      <div class="flex items-center gap-3">
        <input
          type="text"
          class="py-2 px-2 bg-white flex-grow rounded-md disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
          :placeholder="t('vacancies-list.input_placeholder')"
        />
        <button
          type="submit"
          class="py-2 px-4 text-sm text-white bg-primary rounded-lg hover:cursor-pointer hover:bg-primary/50"
        >
        {{ t('vacancies-list.search_btn') }}
        </button>
      </div>
      <div class="mt-10 grid grid-cols-1 lg:grid-cols-8 gap-6">
        <div class="lg:col-span-2">
          <form class="w-full px-5 py-5 space-y-4 bg-white shadow-lg rounded-md">
            <div class="flex justify-between items-center gap-10">
              <h3 class="">{{ t('filter.title') }}</h3>
              <button type="button" class="text-red-500 hover:cursor-pointer hover:underline hover:underline-offset-2" id="remove" >{{ t('filter.clear') }}</button>
            </div>
            <div class="py-5 flex flex-col gap-4 text-sm">
              <div class="flex flex-col gap-2 ">
                <label for="direction-select">{{ t('filter.labels.direction') }}</label>
                <select name="directions" id="direction-select" class="w-full rounded-md outline-solid outline-1 px-2 py-1 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
                  <!-- <option value="all" selected>Все</option> -->
                  <option v-for="(d, i) in directions" :key="i" :value="d">{{ d }}</option>
                </select>
              </div>
              <div class="flex flex-col gap-2">
                <label for="location-select">{{ t('filter.labels.location') }}</label>
                <select name="location" id="location-select" class="w-full rounded-md outline-solid outline-1 px-2 py-1 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
                  <!-- <option value="tashkent" selected>Ташкент</option> -->
                  <option v-for="(l, i) in locations" :key="i" :value="l">{{ l }}</option>
                </select>
              </div>
            </div>
            <button type="button" class="py-2 px-4 text-sm text-white bg-primary rounded-lg hover:cursor-pointer hover:bg-primary/50" id="filter">{{ t('filter.filtrate') }}</button>
          </form>
        </div>
        <div class="lg:col-span-6 w-full space-y-4">
          <VacancyCard v-for="(v, i) in vacancies" :key="i"
            :heading="v.heading"
            :city="v.city"
            :salary="v.salary"
            :description="v.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>
