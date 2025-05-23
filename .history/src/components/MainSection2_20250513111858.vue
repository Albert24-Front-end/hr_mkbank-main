<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>
<template>
  <section class="relative w-full py-10 bg-gray-200">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h1 class="text-lg md:text-3xl text-center text-primary mx-auto mb-8">
        Почему стоит работать именно с нами
      </h1>
      <div class="bg-white min-w-[250px] max-h-auto rounded-lg mb-10">
        <img src="../assets/pictures/why-we.png" alt="why-we" class="w-[250px] sm:w-[300px]" />
      </div>
      <div class="w-3/5 min-w-[185px] sm:w-1/2 grid grid-cols-1 justify-center gap-5">
        <Dropdown/>
      </div>
    </div>
  </section>
</template>
