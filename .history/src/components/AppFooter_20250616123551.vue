<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const links = ref([
  { name: 'Bank', href: 'https://mkbank.uz/ru/about/', text: () => t('buttons.bank_info') },
  { name: 'Career', href: '#why-we', text: () => t('buttons.career') },
  { name: 'Vacancies', href: '/vacancies', text: () => t('buttons.vacancies') },
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
])

const socials = ref([
  {
    name: 'facebook',
    link: 'https://www.facebook.com/mkbank.uz',
    iconPath: new URL('@/assets/icons/EntypoSocialFacebook.svg', import.meta.url).href,
    iconId: 'icon-facebook',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/mkbank.uz',
    iconPath: new URL('@/assets/icons/EntypoSocialInstagram.svg', import.meta.url).href,
    iconId: 'icon-instagram',
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/@mkbankuz',
    iconPath: new URL('@/assets/icons/EntypoSocialYoutube.svg', import.meta.url).href,
    iconId: 'icon-youtube',
  },
  {
    name: 'telegram',
    link: 'https://t.me/mkbankuz',
    iconPath: new URL('@/assets/icons/ic--baseline-telegram.svg', import.meta.url).href,
    iconId: 'icon-telegram',
  },
])
</script>

<template>
  <footer class="footer bg-green text-white" id="contacts">
    <div
      class="container w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      <div class="space-y-4 md:space-y-6">
        <router-link to="/" class="block"
          ><img src="../assets/pictures/footer-logo.svg" alt="footer-logo" loading="lazy"
        /></router-link>
        <p class="text-base">{{ $t('footer_logo_subtext') }}</p>
      </div>
      <div class="justify-self-start lg:justify-self-center">
        <h3 class="text-bold text-lg mb-4">{{ $t('footer_divisions') }}</h3>
        <ul class="space-y-3 md:space-y-4 text-base">
          <li class="hover:cursor-pointer hover:underline" v-for="link in links" :key="link.name">
            <router-link :to="link.href">{{ link.text() }}</router-link>
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
              <img :src="contact.iconPath" class="max-w-[24px]" :alt="contact.name + '-icon'" />
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
            aria-label="Send an email"
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
            <!-- <img :src="social.iconPath" class="max-w-[28px]" :alt="social.name + '-icon'"> -->
            <svg class="w-7 h-7 fill-white hover:fill-blue-400 transition" aria-hidden="true">
              <use :xlink:href="`/assets/icons/social-sprite.svg#${social.iconId}`" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
