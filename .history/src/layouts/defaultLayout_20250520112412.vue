<script setup>
import { RouterView } from 'vue-router'
import AppBar from '@/components/AppBar.vue';
import AppFooter from '@/components/AppFooter.vue';
import MainPage from '@/pages/MainPage.vue'
</script>

<template>
  <div>
    <AppBar />
    <MainPage />
    <AppFooter />
  </div>
</template>
