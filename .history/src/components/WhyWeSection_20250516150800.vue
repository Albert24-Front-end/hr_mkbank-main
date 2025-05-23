<script setup>
import Dropdown from '../components/DropDown.vue'
import { ref } from 'vue';

const items = ref([
  {
    heading:"Сегодня мы создаем завтра",
    number: 1,
    content: [
      `{{ $t('buttons.join_us') }}`,
      "В MKBANK Bы становитесь частью Kоманды, которая внедряет инновации, трансформирует процессы и внедряет цифровые решения. Каждый проект, каждый вклад сотрудника влияет на устойчивое развитие не только Банка, но и финансовой системы Узбекистана",
      "Мы инвестируем в будущее — начиная с людей"
    ]
  },
  {
    heading:"Мы развиваем таланты",
    number: 2,
    content: [
      "Карьерный рост — это не абстрактное обещание, а чётко выстроенный путь.",
      "Программы обучения и наставничества с первого дня. Развитие soft и hard skills на всех этапах карьеры. Внутренние и внешние курсы, сертификации, участие в форумах",
      "Мы верим, что сильная команда — это команда, которая растёт вместе с компанией"
    ]
  },
  {
    heading:"Мы не просто работодатель, а партнеры",
    number: 3,
    content: [
      "В MKBANK важен каждый сотрудник. Мы поддерживаем баланс между работой и личной жизнью, слушаем и учитываем мнение команды, развиваем корпоративную культуру на основе доверия и уважения",
      "Мы рядом не только в достижениях, но и в вызовах",
      "Вы не просто работаете в Банке — Вы создаёте его вместе с нами"
    ]
  },
])
</script>
<template>
  <section class="relative w-full py-10 bg-gray-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h1 class="text-lg md:text-3xl text-center text-primary mx-auto mb-8">
        {{ $t('headings.why_we_heading') }}
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-6 w-full">
        <div class="w-full bg-white  max-h-auto rounded-lg lg:mb-0 p-6">
          <img src="../assets/pictures/why-we.png" alt="why-we" class="w-full object-contain h-auto max-h-96 " />
        </div>
        <div class="flex flex-col items-center justify-center gap-4 lg:pl-6">
          <Dropdown class="w-full h-auto" v-for="(item, index) in items" :key="index" :heading=item.heading :number=item.number :content=item.content />
        </div>
      </div>
    </div>
  </section>
</template>
