<script setup>
import VacancyCard from '@/components/VacancyCard.vue'
</script>

<template>
  <section class="w-full lg:px-8 py-20 bg-gray-50" id="vacancies-list">
    <div class="container mx-auto px-4 sm:px-6">
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
      <div class="py-15 flex justify-start gap-5">
        <form action="" class="px-5 py-5 bg-white">
          <div class="flex justify-between items-center">
            <h3 class="">Фильтр</h3>
            <button class="" id="remove">Очистить</button>
          </div>
          <label for=""></label>
          <select name="" id="">
            <option value="">ddd</option>
            <option value="">vvv</option>
          </select>
          <label for=""></label>
          <select name="" id="">
            <option value="">aaa</option>
            <option value="">bbb</option>
          </select>
        </form>
        <VacancyCard />
      </div>
    </div>
  </section>
</template>
