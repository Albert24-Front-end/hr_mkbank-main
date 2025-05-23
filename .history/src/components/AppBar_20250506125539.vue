<script setup>
    
</script>

<template>
    <nav class="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 flex justify-between items-center">
        <div class="flex items-center">
                <a href="/" aria-current="page"><img src="../assets/pictures/logo_2.svg" alt="logo" class="h-10 w-auto"></a>
        </div>
        <div class="hidden md:flex">
            <ul class=" w-full flex justify-between items-center gap-3 md:gap-5 lg:gap-7 text-sm lg:text-base">
                <li class="py-1 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg"><a href="https://mkbank.uz/ru/about/">О банке</a></li>
                <li class="py-1 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg"><a href="">Карьера</a></li>
                <li class="py-1 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg"><a href="">Вакансии</a></li>
                <li class="py-1 px-2 hover:cursor-pointer hover:bg-sky-100 rounded-lg"><a href="">Контакты</a></li>
            </ul>
        </div>
        <div class="md:hidden">
            <button>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="npm " d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg></span>
            </button>
        </div>
    </nav>
</template>

<style scoped>

</style>