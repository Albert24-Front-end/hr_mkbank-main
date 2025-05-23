<script setup>
defineProps({
  heading: String,
  text: String,
  image: String,
  description: String,
})
</script>

<template>
  <div class="w-full flex flex-col items-center border-[1px] border-gray-300 rounded-xl shadow-lg max-w-full p-6"
  >
    <div class="max-w-24"><img src="../assets/pictures/1.png" alt="research" /></div>
    <h3 class="text-lg font-semibold px-5 py-3 text-center">Этап изучения информации</h3>
  </div>
</template>
