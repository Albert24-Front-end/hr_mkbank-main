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
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <div class="font-(family-name:--font-family)">
    <AppBar />
    <main>
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <MainSection4 />
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<style scoped></style>
