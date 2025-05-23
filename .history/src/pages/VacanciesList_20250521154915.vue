<script setup>
import VacancyCard from '@/components/VacancyCard.vue'
</script>

<template>
  <section class="w-full py-20 bg-gray-50" id="vacancies-list">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl lg:text-3xl font-medium mb-8">Вакансии</h1>
      <div class="flex items-center gap-3">
        <input
          type="text"
          class="py-2 px-2 bg-white flex-grow rounded-md disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
          placeholder="Введите подходящую вам вакансию"
        />
        <button
          type="submit"
          class="py-2 px-4 text-sm text-white bg-primary rounded-lg hover:cursor-pointer hover:bg-primary/50"
        >
          Поиск
        </button>
      </div>
      <div class="mt-10 grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div class="lg:col-span-2">
          <form class="w-full px-5 py-5 space-y-4 bg-white shadow-lg rounded-md">
            <div class="flex justify-between items-center gap-10">
              <h3 class="">Фильтр</h3>
              <button class="text-red-500 hover:cursor-pointer" id="remove">Очистить</button>
            </div>
            <div class="py-4"></div>

          </form>
        </div>
        <div class="lg:col-span-4 w-full space-y-4">
          <VacancyCard />
        </div>
      </div>
    </div>
  </section>
</template>
