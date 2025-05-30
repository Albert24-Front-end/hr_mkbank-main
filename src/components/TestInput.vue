<script setup>
import { computed, watch, ref } from 'vue'
</script>

<template>
  <div>
    <h1 class="text-2xl lg:text-3xl font-medium mb-8">{{ $t('vacancies-list.heading') }}</h1>
    <div class="flex items-center gap-3">
      <input
        type="text"
        class="py-2 px-2 bg-white flex-grow rounded-md disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
        :placeholder="$t('vacancies-list.input_placeholder')"
        v-model="searchField"
      />
      <button
        type="submit"
        class="py-2 px-4 text-sm text-white bg-primary rounded-lg hover:cursor-pointer hover:bg-primary/50"
        @click="handleSearchBtnClick"
      >
        {{ $t('vacancies-list.search_btn') }}
      </button>
    </div>
  </div>
</template>
