<script setup></script>

<template>
  <div class="flex flex-col gap-2">
    <label for="direction-select">{{ $t('filter.labels.direction') }}</label>
    <select
      name="directions"
      id="direction-select"
      class="w-full rounded-md outline-solid outline-1 px-2 py-1 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
    >
      <!-- <option value="all" selected>Все</option> -->
      <option v-for="(d, i) in directions" :key="i" :value="d">{{ d }}</option>
    </select>
  </div>
</template>
