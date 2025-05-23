<script setup>
import { RouterView } from 'vue-router'
import AppBar from '@/components/AppBar.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <div>
    <AppBar />
    <RouterView/>
    <AppFooter />
  </div>
</template>
