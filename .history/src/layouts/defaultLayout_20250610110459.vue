<script setup>
import AppBar from '@/components/AppBar.vue';
import AppFooter from '@/components/AppFooter.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <AppBar />
    <main>
      <router-view></router-view>
    </main>
    <AppFooter />
  </div>
</template>
