<template>
    <div class="container not_found">
        <p>404</p>
        <p>Дуже шкода, але таку сторінку не знайдено.</p>
        <router-link to="/" class="btn">Повернутися на головну</router-link>
    </div>
</template>

<script>
export default {
    name: "NotFound",
}
</script>