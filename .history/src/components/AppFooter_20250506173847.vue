<script setup>

</script>

<template>
    <footer class="footer">
        <div class="container w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 flex justify-between items-start">
            <div class="space-y-4 md:space-y-6">
                <a href="/" class="block"><img src="../assets/pictures/footer-logo.svg" alt="footer-logo"></a>
                <p class="text-sm">Платформа разработана АТБ «Mikrokreditbank».</p>
            </div>
            <div>
                <h3 class="text-semibold mb-4">Разделы</h3>
                <ul class="">
                    <li class="space"><a>О банке</a></li>
                    <li class="space"><a>Карьера</a></li>
                    <li class="space"><a>Вакансии</a></li>
                    <li class="space"><a>Контакты</a></li>
                </ul>
            </div>
            <div>
                <h3>Контакты</h3>
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