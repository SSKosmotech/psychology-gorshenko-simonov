<template>
    <div class="container">
        <page-title :title="'Успіхи наших клієнтів'" />
        <SuccessesList />
    </div>
</template>

<script>
import SuccessesList from '@/components/SuccessesList.vue'
import PageTitle from '@/components/Modules/PageTitle.vue'
export default {
    name: 'SiteSuccesses',
    components: { SuccessesList, PageTitle }
}
</script>