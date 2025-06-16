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
    <!-- <img
      src="/src/assets/pictures/intro-bg-min.webp"
      srcset="
        /src/assets/pictures/intro-bg-min-480.webp 480w,
        /src/assets/pictures/intro-bg-min-800.webp 800w,
        /src/assets/pictures/intro-bg-min-1280.webp 1280w,
        /src/assets/pictures/intro-bg-min.webp 1920w
      "
      sizes="(max-width: 639px) 100vw,
         (max-width: 1023px) 90vw,
         (max-width: 1439px) 1280px,
         1920px"
      alt="Hero background"
      class="absolute inset-0 w-full h-full object-cover -z-10"
      loading="eager"
      fetchpriority="high"
    /> -->
    <!-- <picture>
      <source media="(max-width: 480px)" srcset="/src/assets/pictures/intro-bg-min-480.webp" />
      <source media="(max-width: 800px)" srcset="/src/assets/pictures/intro-bg-min-800.webp" />
      <source media="(min-width: 800px) and (max-width: 1439px)" srcset="/src/assets/pictures/intro-bg-min-1280.webp" />
      <source media="(min-width: 1440px)" srcset="/src/assets/pictures/intro-bg-min.webp" />
      <img
        src="/src/assets/pictures/intro-bg-min.webp"
        alt="Hero"
        class="absolute inset-0 w-full h-full object-cover -z-10"
        loading="eager"
        fetchpriority="high"
      />
    </picture> -->
    <div class="container mx-auto px-4 h-full flex">
      <div class="max-w-lg md:px-6 flex flex-col">
        <!-- <h1
          class="mt-40 sm:mb-10 mb-6 uppercase leading-tight md:text-6xl sm:text-4xl text-2xl inline-block font-medium text-primary"
        >
          {{ $t('headings.hero_heading') }}
        </h1> -->
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
