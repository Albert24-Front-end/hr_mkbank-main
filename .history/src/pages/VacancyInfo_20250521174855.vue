<script setup>

</script>

<template>
    <section class="w-full py-20 bg-gray-50" id="vacancies-list">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">


      <div class="mt-10 grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div class="lg:col-span-2">
          <form class="w-full px-5 py-5 space-y-4 bg-white shadow-lg rounded-md">
            <div class="flex justify-between items-center gap-10">
              <h3 class="">Фильтр</h3>
              <button type="button" class="text-red-500 hover:cursor-pointer hover:underline hover:underline-offset-2" id="remove" >Очистить</button>
            </div>
            <div class="py-5 flex flex-col gap-4 text-sm">
              <div class="flex flex-col gap-2 ">
                <label for="department-select">Направления</label>
                <select name="departments" id="department-select" class="">
                  <option value="all" selected>Все</option>
                  <option value="marketing">Маркетинг</option>
                  <option value="management">Менеджмент</option>
                  <option value="social-credit">Социальное кредитование</option>
                </select>
              </div>
              <div class="flex flex-col gap-2 ">
                <label for="location-select">Локация</label>
                <select name="location" id="location-select" class="">
                  <option value="tashkent" selected>Ташкент</option>
                  <option value="urgench">Ургенч</option>
                  <option value="khiva">Хива</option>
                </select>
              </div>
            </div>
            <button type="button" class="py-2 px-4 text-sm text-white bg-primary rounded-lg hover:cursor-pointer hover:bg-primary/50" id="filter">Фильтровать</button>
          </form>
        </div>
        <div class="lg:col-span-4 w-full space-y-4">
            <h1 class="text-2xl lg:text-3xl font-medium mb-3">Копирайтер</h1>
            <div class="w-full flex justify-center items-center text-center mb-6" data-orientation="horizontal" role="separator">
              <div class="w-full border-gray-400 border-solid border-b"></div>
            </div>
            <div class="">
              <h2 class="text-xl lg:text-2xl font-medium mb-5">Обязанности</h2>
              <ul class="list-disc">
                <li>123</li>
                <li>123</li>
                <li>123</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>