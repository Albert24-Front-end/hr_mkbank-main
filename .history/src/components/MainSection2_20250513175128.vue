<script setup>
import Dropdown from '../components/DropDown.vue'
import { ref } from 'vue';

const items = ref([
  {
    heading:"Сегодня мы создаем завтра",
    number: 1,
    content: [
      "Мы не просто нанимаем сотрудников — мы формируем будущее банковской отрасли страны",
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
        Почему стоит работать именно с нами
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-6 w-full">
        <div class="w-full bg-white  max-h-auto rounded-lg lg:mb-0 p-6">
          <img src="../assets/pictures/why-we.png" alt="why-we" class="w-full object-contain h-auto max-h-96 " />
        </div>
        <div class="flex flex-col items-center justify-center gap-4 lg:pl-6">
          <!-- <Menu as="div" class="relative inline-block text-left">
          
          <div>
            <MenuButton
              class="inline-flex min-w-full justify-between items-center gap-x-5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
            >
              <div class="flex items-center gap-2.5"><div class="px-2.5 py-1 rounded-md bg-gray-200">1</div> Сегодня мы создаём завтра</div>
              <ChevronDownIcon class="-mr-1 size-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Account settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Support</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >License</a
                  >
                </MenuItem>
                <form method="POST" action="#">
                  <MenuItem v-slot="{ active }">
                    <button
                      type="submit"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm',
                      ]"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex min-w-full justify-between items-center gap-x-5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
            >
              <div class="flex items-center gap-2.5"><div class="px-2.5 py-1 rounded-md bg-gray-200">2</div>Мы развиваем таланты</div>
              <ChevronDownIcon class="-mr-1 size-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Account settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Support</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >License</a
                  >
                </MenuItem>
                <form method="POST" action="#">
                  <MenuItem v-slot="{ active }">
                    <button
                      type="submit"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm',
                      ]"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex min-w-full justify-between items-center gap-x-5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
            >
              <div class="flex items-center gap-2.5"><div class="px-2.5 py-1 rounded-md bg-gray-200">3</div>Мы не просто работодатель, а партнеры</div>
              <ChevronDownIcon class="-mr-1 size-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Account settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Support</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >License</a
                  >
                </MenuItem>
                <form method="POST" action="#">
                  <MenuItem v-slot="{ active }">
                    <button
                      type="submit"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm',
                      ]"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </transition>
        </Menu> -->
          <Dropdown class="w-full h-auto" v-for="(item, index) in items" :key="index" :heading=item.heading :number=item.number :content=""/>
          <!-- <Dropdown heading="Мы развиваем таланты" number="2" class="w-full h-auto"/>
          <Dropdown heading="Мы не просто работодатель, а партнеры" number="3" class="w-full h-auto"/> -->
        </div>
      </div>
    </div>
  </section>
</template>
