<script setup>
import { computed, watch, ref } from 'vue'

const products = ref([
    {title: "Oranges", price: "10", weight: 1, id: 1},
    {title: "Apples", price: "4", weight: 2, id: 2},
    {title: "Pears", price: "6", weight: 1.5, id: 3},
    {title: "Bananas", price: "9", weight: 0.5, id: 4},
    {title: "Peaches", price: "8", weight: 0.8, id: 5},

])

const query = ref('')
const queryText = ref('')
const queryItems = computed(()=>{
  let p = products.value
  let search = query.value
  // if(search) {
  //   return p = p.filter((fruit)=> fruit.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  // }
  //   return
  return products ? products.value.filter(v=> {
    const titleMatch = !search || v.toLowerCase().includes(search)
    return titleMatch
  }) : []
})

function handleQuery(){
  query.value = query.value.trim().toLowerCase()
}
</script>

<template>
  <section class="w-full py-20 bg-gray-50" id="vacancies-list">
    <div class="@container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl lg:text-3xl font-medium mb-8">{{ $t('vacancies-list.heading') }}</h1>
      <form class="flex items-center gap-3 mb-10" @submit.prevent="">
        <input
          type="text"
          class="py-2 px-2 bg-white flex-grow rounded-md disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
          :placeholder="$t('vacancies-list.input_placeholder')"
          v-model="query"
        />
        <button
          type="submit"
          class="py-2 px-4 text-sm text-white bg-primary rounded-lg hover:cursor-pointer hover:bg-primary/50"
          @click="handleSearchBtnClick"
        >
          {{ $t('vacancies-list.search_btn') }}
        </button>
      </form>
      <ul class="list-disc pl-4 space-y-2">
        <li v-for="product in queryItems" :key="product.id">{{ product.title }} &nbsp;-&nbsp; ${{ product.price }} &nbsp;-&nbsp;  {{ product.weight }} kg</li>
      </ul>
    </div>
  </section>
</template>
