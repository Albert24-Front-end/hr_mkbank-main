<script setup>
import { RouterLink } from 'vue-router'


defineProps({
  heading: String,
  city: String
})


</script>

<template>
    <article class="py-4 sm:px-5 bg-white shadow-lg rounded-md">
        <div>
            <h2 class="text-2xl font-semibold mb-4">{{ heading }}</h2>
            <div class="flex justify-between mb-4">
                <span class="flex">
                    <img src="../assets/icons/MaterialSymbolsMyLocation.svg" class="max-w-[16px]" alt="location-icon">&nbsp;
                    {{ city}}
                </span>
                <span>ЗП:&nbsp;не указана</span>
            </div>
            <div class="w-full flex justify-center items-center text-center mb-6" data-orientation="horizontal" role="separator">
              <div class="w-full border-gray-400 border-solid border-b"></div>
            </div>
            <div class="descr overflow-x-hidden text-ellipsis line-clamp-3 max-w-auto max-h-[72px]">
                Lorem
            </div>
            <div class="flex justify-between items-end">
                <router-link
                    to="/vacancy"
                    class="py-2 px-4 text-sm text-white bg-primary rounded-lg hover:cursor-pointer hover:bg-primary/50 mt-15"
                >
                Подробнее
                </router-link>
                <span class="flex">
                    <img src="../assets/icons/MaterialSymbolsCalendarAddOnOutlineSharp.svg" class="max-w-[16px]" alt="location-icon">&nbsp;
                    20.04.2025
                </span>
            </div>
        </div>
    </article>
</template>