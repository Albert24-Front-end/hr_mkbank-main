<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const {t} = useI18n()

const links = ref([
  {name: 'Bank', href: 'https://mkbank.uz/ru/about/', text: "{{ t('buttons.bank_info') }}"}
])

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}
const handleWidth = () => {
  if (window.innerWidth >= 768) {
    closeMenu()
  }
}
onMounted(() => {
  window.addEventListener('resize', handleWidth)
})
onBeforeMount(() => {
  window.removeEventListener('resize', handleWidth)
})
</script>

<template>
  <nav
    class="container w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 flex justify-between items-center gap-2"
  >
    <div class="flex items-center">
      <router-link to="/" aria-current="page"
        ><img src="../assets/pictures/logo_2.svg" alt="logo" class="h-10 w-auto"
      /></router-link>
    </div>
    <div class="desktop-menu hidden md:flex">
      <ul
        class="w-full flex justify-between items-center gap-3 md:gap-5 lg:gap-7 text-base lg:text-lg"
      >
        <li class="py-1 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg">
          <router-link v-for="link in links" :to="https://mkbank.uz/ru/about/">{{ t('buttons.bank_info') }}</router-link>
        </li>
        // <li class="py-1 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg">
        //   <router-link to="/">{{ t('buttons.career') }}</router-link>
        // </li>
        // <li class="py-1 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg">
        //   <router-link to="/">{{ t('buttons.vacancies') }}</router-link>
        // </li>
        // <li class="py-1 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg">
        //   <router-link to="/">{{ t('buttons.contacts') }}</router-link>
        // </li>
        // <li class="hover:cursor-pointer hover:bg-sky-100 rounded-lg"><LanguageSwitcher/></li>
      </ul>
    </div>
    <div class="burger-menu-button md:hidden mt-2">
      <button @click="toggleMenu">
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="oklch(72.3% 0.219 149.579)" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
            </svg></span>
      </button>
    </div>
    <div
      class="mobile-menu flex-column md-hidden absolute top-3 right-3 px-3 py-3 bg-slate-50 z-10"
      v-if="isMenuOpen"
    >
      <button class="flex justify-self-end" @click="closeMenu">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="oklch(72.3% 0.219 149.579)"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
          </svg>
        </span>
      </button>
      <ul
        class="w-full flex-column justify-between items-center gap-3 md:gap-5 lg:gap-7 py-6 text-base lg:text-lg"
      >
        <li class="py-4 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg font-xl">
          <router-link to="https://mkbank.uz/ru/about/">О банке</router-link>
        </li>
        <li class="py-4 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg font-xl">
          <router-link to="/">Карьера</router-link>
        </li>
        <li class="py-4 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg font-xl">
          <router-link to="/">Вакансии</router-link>
        </li>
        <li class="py-4 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg font-xl">
          <router-link to="/">Контакты</router-link>
        </li>
        <li class="hover:cursor-pointer hover:bg-sky-100 rounded-lg"><LanguageSwitcher /></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
