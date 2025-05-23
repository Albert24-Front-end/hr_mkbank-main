<script setup>

</script>

<template>
    <section class="w-full py-20 bg-gray-50" id="vacancies-list">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">


      <div class="mt-10 grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div class="lg:col-span-2">

          <form class="w-full px-5 py-5 space-y-4 bg-white shadow-lg rounded-xl">
            <h3 class="text-lg lg:text-xl font-medium mb-5">Отклик на вакансию</h3>
            <div class="py-5 flex flex-col gap-4 text-sm">
              <div class="flex flex-col gap-2 ">
                <label for="department-select">Фамилия</label>
                <input type="text" placeholder="Фамилия" class="w-full rounded-md outline-solid outline-1  px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
              </div>
              <div class="flex flex-col gap-2 ">
                <label for="location-select">Имя</label>
                <input type="text" placeholder="Имя" class="w-full rounded-md outline-solid outline-1  px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
              </div>
              <div class="flex flex-col gap-2 ">
                <label for="location-select">Email</label>
                <input type="text" placeholder="Email" class="w-full rounded-md outline-solid outline-1  px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
              </div>
              <div class="flex flex-col gap-2 ">
                <label for="location-select">Телефон</label>
                <input type="text" placeholder="Телефон" class="w-full rounded-md outline-solid outline-1  px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
              </div>
              <div class="flex flex-col gap-2 ">
                <label for="location-select">Резюме&nbsp;<span>(pdf,docx)</span></label>
                <input type="file" class="w-full rounded-md outline-solid outline-1  px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
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
            <div class="mb-10">
              <h2 class="text-xl lg:text-2xl font-medium mb-5">Обязанности</h2>
              <ul class="list-disc pl-4">
                <li>123</li>
                <li>123</li>
                <li>123</li>
              </ul>
            </div>
            <div class="mb-10">
              <h2 class="text-xl lg:text-2xl font-medium mb-5">Требования</h2>
              <ul class="list-disc pl-4">
                <li>123</li>
                <li>123</li>
                <li>123</li>
              </ul>
            </div>
            <div class="mb-10">
              <h2 class="text-xl lg:text-2xl font-medium mb-5">Условия</h2>
              <ul class="list-disc pl-4">
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