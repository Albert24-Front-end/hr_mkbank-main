<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import AppFooter from './components/AppFooter.vue'
import MainSection1 from './components/HeroSection.vue'
import MainSection2 from './components/WhyWeSection.vue'
import MainSection3 from './components/AdvantagesSection.vue'
import MainSection4 from './components/RecruitingSection.vue'
</script>

<template>
  <div class="font-primary">
    <AppBar />
    <main>
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <MainSection4 />
    </main>
    <AppFooter />
    <RouterView/>
  </div>
</template>
