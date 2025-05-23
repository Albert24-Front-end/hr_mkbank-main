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
                    <li class="hover:cursor-pointer hover:underline py-1"><a>О банке</a></li>
                    <li class="hover:cursor-pointer hover:underline py-1"><a>Карьера</a></li>
                    <li class="hover:cursor-pointer hover:underline py-1"><a>Вакансии</a></li>
                    <li class="hover:cursor-pointer hover:underline py-1"><a>Контакты</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-bold text-lg mb-4">Контакты</h3>
                <ul class="space-y-4 md:space-y-6 text-base">
                    <li class="hover:cursor-pointer hover:underline py-1"><a>О банке</a></li>
                    <li class="hover:cursor-pointer hover:underline py-1"><a>Карьера</a></li>
                    <li class="hover:cursor-pointer hover:underline py-1"><a>Вакансии</a></li>
                    <li class="hover:cursor-pointer hover:underline py-1"><a>Контакты</a></li>
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