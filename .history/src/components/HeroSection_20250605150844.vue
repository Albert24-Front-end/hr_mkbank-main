<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="section relative w-full h-screen overflow-hidden">
    <!-- <img
    src="/src/assets/pictures/intro-bg-min.webp"
    alt="Hero background"
    class="absolute inset-0 max-w-[1920px] w-full h-full object-cover -z-10"
    loading="eager"
    fetchpriority="high"
  /> -->
    <img
      src="/assets/hero-1920w.webp"
      srcset="
        /assets/hero-480w.webp 480w,
        /assets/hero-800w.webp 800w,
        /assets/hero-1280w.webp 1280w,
        /assets/hero-1920w.webp 1920w
      "
      sizes="(max-width: 639px) 100vw,
         (max-width: 1023px) 90vw,
         (max-width: 1439px) 1280px,
         1920px"
      alt="Hero background"
      class="absolute inset-0 w-full h-full object-cover -z-10"
      loading="eager"
      fetchpriority="high"
    />
    <div class="container mx-auto px-4 h-full flex">
      <div class="max-w-lg md:px-6 flex flex-col">
        <h1
          class="mt-40 sm:mb-10 mb-6 uppercase leading-tight md:text-6xl sm:text-4xl text-2xl inline-block font-medium text-primary"
        >
          {{ $t('headings.hero_heading') }}
        </h1>
        <RouterLink
          to="/vacancies"
          class="max-w-fit py-3 px-7 sm:py-4 sm:px-9 bg-primary rounded-lg text-center text-white font-medium text-[14px] md:text-lg"
        >
          {{ $t('buttons.join_us') }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
