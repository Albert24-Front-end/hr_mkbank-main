<script setup>
import { computed, watch, ref } from 'vue'
import VacancyCard from '@/components/VacancyCard.vue'
import useVacanciesListFilterData from '@/composables/useVacanciesListFilterData'
import useVacancyCardData from '@/composables/useVacancyCardData'
import { useI18n } from 'vue-i18n'


const { locale } = useI18n()

const searchField = ref('')
const searchText = ref('')
// const confirmedSearch = ref('')
const searchActivator = ref(false)

// const confirmedSearch = computed(() => {
//   let jobs = vacancies.value
//   if(searchField.value) {
//     jobs.filter((v)=> {return v.heading.indexOf(searchField.value) !== -1})
//   }
//   return jobs
// })

// const rules = computed(() => ({
//   searchField: {
//     minLength: helpers.withMessage('Минимальная длина: 5 символов', minLength(5))
//   }
// }))

// const v = useVuelidate(rules, {searchField})

// function confirmSearch() {
//   v.value.$touch()
//   if (!v.value.$invalid) {
//     confirmedSearch.value = searchField.value.trim().toLowerCase()
//   }
// }

// watch(searchField, ((oldValue, newVal)=>{
//   if(newVal !== confirmedSearch.value) {
//     confirmedSearch.value = ''
//   }
// }))
const { vacancies } = useVacancyCardData()

const { directions, locations } = useVacanciesListFilterData()

const selectedLocation = defineModel('selectedLocation', {default: ''})
const selectedDirection = defineModel('selectedDirection', {default: ''})

function handleSearchBtnClick() {
  // searchActivator.value = true
  searchText.value = searchField.value.trim().toLowerCase()
}

const filteredVacancies = computed(() => {
  // let jobs = vacancies.value
  // if(searchField.value) {
  //   jobs.filter((v)=> {return v.heading.indexOf(searchField.value) !== -1})
  // }
  return vacancies ? vacancies.value.filter(v => {
    const locationMatch = !selectedLocation.value || v.location === selectedLocation.value
    const directionMatch = !selectedDirection.value || v.direction === selectedDirection.value
    const searchMatch = !searchActivator.value || !searchField.value || v.heading.toLowerCase().includes(searchField.value.toLowerCase())
    const titleMatch = !searchText.value || v.heading.toLowerCase().includes(searchText.value)

    return locationMatch && directionMatch && searchMatch && titleMatch
  }) : []
})

function removeFilters() {
 selectedDirection.value = ''
 selectedLocation.value = ''
 searchField.value = ''
 searchText.value = ''
//  searchActivator.value = false
}

watch(locale, ( newLocale, oldLocale) => {
  removeFilters();
})

</script>

<template>
  <section class="w-full py-20 bg-gray-50" id="vacancies-list">
    <div class="@container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl lg:text-3xl font-medium mb-8">{{ $t('vacancies-list.heading') }}</h1>
      <div class="flex items-center gap-3">
        <input
          type="text"
          class="py-2 px-2 bg-white flex-grow rounded-md disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
          :placeholder="$t('vacancies-list.input_placeholder')"
          v-model="searchField"


        />
        <button
          type="submit"
          class="py-2 px-4 text-sm text-white bg-primary rounded-lg hover:cursor-pointer hover:bg-primary/50"
          @click="handleSearchBtnClick"
        >
        {{ $t('vacancies-list.search_btn') }}
        </button>
      </div>
      <!-- <TransitionGroup>
        <div v-for="e in v.value.searchField.$errors" :key="e.$uid" ><p>{{ e.$message }}</p></div>
      </TransitionGroup> -->
      <div class="mt-10 grid grid-cols-1 lg:grid-cols-8 gap-6">
        <div class="lg:col-span-2">
          <div class="w-full px-5 py-5 space-y-4 bg-white shadow-lg rounded-md">
            <div class="flex justify-between items-center gap-10">
              <h3 class="">{{ $t('filter.title') }}</h3>
              <button type="button" @click="removeFilters" class="text-red-500 hover:cursor-pointer hover:underline hover:underline-offset-2" id="remove" >{{ $t('filter.clear') }}</button>
            </div>
            <div class="py-5 flex flex-col gap-4 text-sm">
              <div class="flex flex-col gap-2 ">
                <label for="direction-select">{{ $t('filter.labels.direction') }}</label>
                <select name="directions" id="direction-select" v-model="selectedDirection" class="w-full rounded-md outline-solid outline-1 px-2 py-1 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
                  <!-- <option value="all" selected>Все</option> -->
                  <option :value="''">{{ $t('filter.all_option') }}</option>
                  <option v-for="(d, i) in directions" :key="i" :value="d">{{ d }}</option>
                </select>
              </div>
              <div class="flex flex-col gap-2">
                <label for="location-select">{{ $t('filter.labels.location') }}</label>
                <select name="location" id="location-select" v-model="selectedLocation" class="w-full rounded-md outline-solid outline-1 px-2 py-1 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
                  <!-- <option value="tashkent" selected>Ташкент</option> -->
                  <option :value="''">{{ $t('filter.all_option') }}</option>
                  <option v-for="(l, i) in locations" :key="i" :value="l">{{ l }}</option>
                </select>
              </div>
            </div>
            <!-- <button type="button" @click="filterVacancies" class="py-2 px-4 text-sm text-white bg-primary rounded-lg hover:cursor-pointer hover:bg-primary/50" id="filter">{{ $t('filter.filtrate') }}</button> -->
          </div>
        </div>
        <div class="lg:col-span-6 w-full space-y-4">
          <VacancyCard v-for="v in filteredVacancies" :key="v.id"
            :heading="v.heading"
            :city="v.location"
            :region="v.region"
            :description="v.description"
            :date="v.date"
            :id="v.id"
          />
        </div>
      </div>
    </div>
  </section>
</template>
