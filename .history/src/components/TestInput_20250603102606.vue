<script setup>
import { computed, watch, ref } from 'vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <label for="surname">{{ label }}</label>
    <input
      :type=type
      :placeholder=placeholder
      :id=id
      class="w-full rounded-md outline-solid outline-1 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
    />
  </div>
</template>
