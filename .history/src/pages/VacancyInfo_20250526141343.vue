<script setup>
import useVacancyCardData from '@/composables/useVacancyCardData'
import { useRoute } from 'vue-router'
const {vacancies} = useVacancyCardData()

const route = useRoute()

const vacancyId = Number(route.params.id)

const vacancy = vacancies.value.find(v => v.id === vacancyId)

</script>

<template>
    <section class="w-full py-20 bg-gray-50" id="vacancies-list">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">


      <div class="mt-10 grid grid-cols-1 lg:grid-cols-6 gap-12">
        <div class="lg:col-span-2">

          <form class="w-full flex flex-col px-5 py-5 space-y-4 bg-white shadow-lg rounded-xl">
            <h3 class="text-lg lg:text-xl font-medium mb-5">{{ $t('vacancy_response_form.heading') }}</h3>
            <div class="py-5 flex flex-col gap-4 text-sm">
              <div class="flex flex-col gap-2 ">
                <label for="surname">{{ $t('vacancy_response_form.input_placeholders.surname') }}</label>
                <input type="text" :placeholder="$t('vacancy_response_form.input_placeholders.surname')" id="surname" class="w-full rounded-md outline-solid outline-1 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
              </div>
              <div class="flex flex-col gap-2 ">
                <label for="name">{{ $t('vacancy_response_form.input_placeholders.name') }}</label>
                <input type="text" :placeholder="$t('vacancy_response_form.input_placeholders.name')" id="name" class="w-full rounded-md outline-solid outline-1 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
              </div>
              <div class="flex flex-col gap-2 ">
                <label for="email">{{ $t('vacancy_response_form.input_placeholders.email') }}</label>
                <input type="text" :placeholder="$t('vacancy_response_form.input_placeholders.email')" id="email" class="w-full rounded-md outline-solid outline-1 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
              </div>
              <div class="flex flex-col gap-2 ">
                <label for="phone">{{ $t('vacancy_response_form.input_placeholders.phone') }}</label>
                <input type="text" :placeholder="$t('vacancy_response_form.input_placeholders.phone')" id="phone" class="w-full rounded-md outline-solid outline-1 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out">
              </div>
              <div class="flex flex-col gap-2 ">
                <label for="CV">{{ $t('vacancy_response_form.resume_label') }}&nbsp;<span>(pdf, docx)</span></label>
                <label class="relative flex items-center justify-center w-full rounded-md outline-dashed outline-1 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out cursor-pointer hover:bg-green-50 transition">
                  {{ $t('vacancy_response_form.file_input') }}
                  <input type="file" accept=".pdf, .docx" name="CV" id="CV" class="invisible absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                </label>
              </div>
              <div class="flex gap-2 ">
                <input type="checkbox" id="accept" required>
                <label for="accept">{{ $t('vacancy_response_form.agree_text') }}</label>
              </div>
            </div>
            <button type="submit" class="py-2 px-4 text-sm text-white bg-primary rounded-lg hover:cursor-pointer hover:bg-primary/50" id="filter">{{ $t('vacancy_response_form.response_btn') }}</button>
          </form>
        </div>
        <div class="lg:col-span-4 w-full space-y-4">
            <h1 class="text-2xl lg:text-3xl font-medium mb-3">{{ vacancy.heading }}</h1>
            <div class="w-full flex justify-center items-center text-center mb-6" data-orientation="horizontal" role="separator">
              <div class="w-full border-gray-400 border-solid border-b"></div>
            </div>
            <div>{{ vacancy.date }}&nbsp;&middot;&nbsp;{{ vacancy.location }}&nbsp;&middot;&nbsp;ЗП:&nbsp;{{ vacancy.salary }}</div>
            <div class="mb-10">
              <h2 class="text-xl lg:text-2xl font-medium mb-5">{{ $t('vacancies_details.responsibilities') }}</h2>
              <ul class="list-disc pl-4">
                <li>123</li>
                <li>123</li>
                <li>123</li>
              </ul>
            </div>
            <div class="mb-10">
              <h2 class="text-xl lg:text-2xl font-medium mb-5">{{ $t('vacancies_details.requirements') }}</h2>
              <ul class="list-disc pl-4">
                <li>123</li>
                <li>123</li>
                <li>123</li>
              </ul>
            </div>
            <div class="mb-10">
              <h2 class="text-xl lg:text-2xl font-medium mb-5">{{ $t('vacancies_details.conditions') }}</h2>
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