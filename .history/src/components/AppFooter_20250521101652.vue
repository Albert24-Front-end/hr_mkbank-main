<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const links = ref([
  { name: 'Bank', href: 'https://mkbank.uz/ru/about/', text: () => t('buttons.bank_info') },
  { name: 'Career', href: '#', text: () => t('buttons.career') },
  { name: 'Vacancies', href: '#', text: () => t('buttons.vacancies') },
])

const contacts = ref([
  {
    name: 'phone',
    link: 'tel:1285',
    text: () => '1285',
    iconPath: new URL('@/assets/icons/MaterialSymbolsCall.svg', import.meta.url).href,
  },
  {
    name: 'hr-site',
    link: 'https://t.me/hrmkbank',
    text: () => 'hr@mkank.uz',
    iconPath: new URL('@/assets/icons/MaterialSymbolsMail.svg', import.meta.url).href,
  },
  {
    name: 'website',
    link: 'https://mkbank.uz/',
    text: () => 'www.mkbank.uz',
    iconPath: new URL('@/assets/icons/MaterialSymbolsGlobe.svg', import.meta.url).href,
  },
  {
    name: 'location',
    link: 'https://www.google.com/maps/place/MKBANK/@41.3100777,69.2753101,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae8ba594d8c345:0x7147eb21a3155320!8m2!3d41.3100737!4d69.277885!16s%2Fg%2F11jsf6rjyd?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D',
    text: () => t('footer_location'),
    iconPath: new URL('@/assets/icons/MaterialSymbolsLocationOn.svg', import.meta.url).href,
  },
]);

const socials = ref([
  {
    name: 'facebook',
    link: 'https://www.facebook.com/mkbank.uz',
    iconPath: new URL('@/assets/icons/EntypoSocialFacebook.svg', import.meta.url).href,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/mkbank.uz',
    iconPath: new URL('@/assets/icons/EntypoSocialInstagram.svg', import.meta.url).href,
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/@mkbankuz',
    iconPath: new URL('@/assets/icons/EntypoSocialYoutube.svg', import.meta.url).href,
  },
  {
    name: 'telegram',
    link: 'https://t.me/mkbankuz',
    iconPath: new URL('@/assets/icons/ic--baseline-telegram.svg', import.meta.url).href,
  },
])
</script>

<template>
  <footer class="footer bg-[#0c5292] text-white">
    <div
      class="container w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      <div class="space-y-4 md:space-y-6">
        <router-link to="/" class="block"
          ><img src="../assets/pictures/footer-logo.svg" alt="footer-logo"
        /></router-link>
        <p class="text-base">{{ $t('footer_logo_subtext') }}</p>
      </div>
      <div class="justify-self-start lg:justify-self-center">
        <h3 class="text-bold text-lg mb-4">{{ $t('footer_divisions') }}</h3>
        <ul class="space-y-3 md:space-y-4 text-base">
          <li class="hover:cursor-pointer hover:underline" v-for="link in links" :key="link.name">
            <a :href="link.href">{{ link.text() }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-bold text-lg mb-4">{{ $t('footer_contacts') }}</h3>
        <ul class="space-y-3 md:space-y-4 text-base">
          <li
            class="hover:cursor-pointer hover:underline flex gap-2"
            v-for="contact in contacts"
            :key="contact.name"
          >
            <span>
              <img :src="contact.iconPath" class="max-w-[24px]" :alt="contact.name + '-icon'"/>
            </span>
            <a :href="contact.link">{{ contact.text() }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-bold text-lg mb-4">{{ $t('footer_form') }}</h3>
        <form class="space-y-4">
          <div class="md:min-w-[250px] w-full inline-flex items-center rounded-md bg-white">
            <input
              type="email"
              value
              :placeholder="$t('footer_input_placeholders.email')"
              required
              autocomplete="off"
              class="w-full rounded-md border-0 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
            />
          </div>
          <div class="md:min-w-[250px] w-full flex items-center rounded-md bg-white">
            <input
              type="tel"
              value
              :placeholder="$t('footer_input_placeholders.phone')"
              required
              autocomplete="off"
              class="w-full rounded-md border-0 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
            />
          </div>
          <div class="md:min-w-[250px] w-full flex items-center rounded-md bg-white">
            <textarea
              :placeholder="$t('footer_input_placeholders.message')"
              required
              class="w-full rounded-md border-0 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            type="submit"
            class="md:min-w-[250px] w-full text-center rounded-md border-0 px-2.5 py-2 bg-white text-lg text-gray-500 hover:cursor-pointer hover:bg-gray-100 transition"
          >
            {{ $t('buttons.send_email') }}
          </button>
        </form>
      </div>
    </div>
    <div
      class="w-full flex justify-center items-center text-center"
      data-orientation="horizontal"
      role="separator"
    >
      <div class="w-full border-gray-200 border-solid border-b"></div>
    </div>
    <div
      class="container w-full mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-6 text-sm text-blue-300"
    >
      <span class="text-center md:text-left">&copy; {{ $t('footer_copyright') }}</span>
      <div class="social-links flex gap-4 mt-4 md:mt-0">
        <span v-for="social in socials" :key="social.name">
            <a :href="social.link">
              <img :src="social.iconPath" class="max-w-[28px] w-full" :alt="social.name + '-icon'">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
              />
            </svg> -->
            </a>
        </span>
        <!-- <span
          ><a href="https://www.instagram.com/mkbank.uz"
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              /></svg></a
        ></span>
        <span
          ><a href="https://www.youtube.com/@mkbankuz"
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
              /></svg></a
        ></span>
        <span
          ><a href="https://t.me/mkbankuz"
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
                fill="currentColor"
              /></svg></a
        ></span> -->
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
