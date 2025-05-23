<script setup>
const items = [
    {
        img: new URL('../assets/pictures/1.png', import.meta.url).href,
        description: "Этап изучения информации",
        alt: "s"
    },
    {
        img: new URL('../assets/pictures/2.png', import.meta.url).href,
        description: "Этап изучения информации",
        alt: "s"
    },
    {
        img: new URL('../assets/pictures/3.png', import.meta.url).href,
        description: "Этап изучения информации",
        alt: "s"
    },
    {
        img: new URL('../assets/pictures/4.png', import.meta.url).href,
        description: "Этап изучения информации",
        alt: "s"
    },
]
</script>
<template>
    <section class="w-full py-10 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
            <h1 class="text-lg md:text-3xl text-center text-primary mx-auto mb-8">Этапы рекрутинга:</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
                <div class="w-full flex flex-col items-cente,r border-[1px] border-gray-300 rounded-xl shadow-lg max-w-full p-6" v-for="(item, i) in items" :key="i">
                    <div class="max-w-24 jsutify-center"><img :src=item.img :alt=item.alt /></div>
                    <h3 class="text-lg font-semibold px-5 py-3 text-center">{{ item.description }}</h3>
                </div>
                <!-- <div class="w-full flex flex-col items-center border-[1px] border-gray-300 rounded-xl shadow-lg max-w-full p-6">
                    <div class="max-w-24"><img src="../assets/pictures/2.png" alt="research"/></div>
                    <h3 class="text-lg font-semibold px-5 py-3 text-center">Мы свяжемся с вами</h3>
                </div>
                <div class="w-full flex flex-col items-center border-[1px] border-gray-300 rounded-xl shadow-lg max-w-full p-6">
                    <div class="max-w-24"><img src="../assets/pictures/3.png" alt="research"/></div>
                    <h3 class="text-lg font-semibold px-5 py-3 text-center">Приглашаем на собеседование в филиал MKBANK или на телефонный звонок с рекрутером</h3>
                </div>
                <div class="w-full flex flex-col items-center border-[1px] border-gray-300 rounded-xl shadow-lg max-w-full p-6">
                    <div class="max-w-24"><img src="../assets/pictures/4.png" alt="research"/></div>
                    <h3 class="text-lg font-semibold px-5 py-3 text-center">Уведомим вас о результате</h3>
                </div> -->
            </div>
        </div>
    </section>
</template>