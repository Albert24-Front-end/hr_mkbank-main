<script setup>

</script>

<template>
    <footer class="footer">
        <div class="container w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 flex justify-between items-start">
            <div class="space-y-4 md:space-y-6">
                <a href="/" class="block"><img src="../assets/pictures/footer-logo.svg" alt="footer-logo"></a>
                <p class="text-base">Платформа разработана АТБ «Mikrokreditbank».</p>
            </div>
            <div>
                <h3 class="text-bold text-lg mb-4">Разделы</h3>
                <ul class="space-y-4 md:space-y-6 text-base">
                    <li class="hover:cursor-pointer hover:underline py-1"><a href="https://mkbank.uz/ru/about/">О банке</a></li>
                    <li class="hover:cursor-pointer hover:underline py-1"><a href="">Карьера</a></li>
                    <li class="hover:cursor-pointer hover:underline py-1"><a href="">Вакансии</a></li>
                    <li class="hover:cursor-pointer hover:underline py-1"><a href="">Контакты</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-bold text-lg mb-4">Контакты</h3>
                <ul class="space-y-4 md:space-y-6 text-base">
                    <li class="hover:cursor-pointer hover:underline py-1 flex gap-2">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg></span>
                        <a class="" href="tel:1285">1285</a>
                    </li>
                    <li class="hover:cursor-pointer hover:underline py-1 flex gap-2"><a href=""></a></li>
                    <li class="hover:cursor-pointer hover:underline py-1 flex gap-2"><a href=""></a></li>
                    <li class="hover:cursor-pointer hover:underline py-1"><a href=""></a></li>
                </ul>
            </div>
            <div>
                <h3>Оставить сообщение</h3>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
        background-color: #0c5292;
        color: #fff;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>