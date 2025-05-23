<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import AppFooter from './components/AppFooter.vue'
import MainSection1 from './components/MainSection1.vue'
import MainSection1 from './components/MainSection1.vue'

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
  <AppBar/>
  <main>
    <MainSection1/>
    <MainSection2/>
  </main>
  <AppFooter></AppFooter>
</template>

<style scoped>

</style>
