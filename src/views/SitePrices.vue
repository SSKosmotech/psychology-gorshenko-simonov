<template>
    <div class="container">
        <page-title :title="'Ціни'"/>
        <PricesList />
    </div>
</template>

<script>
import PricesList from '@/components/PricesList.vue'
import PageTitle from '@/components/Modules/PageTitle.vue'
export default {
    name: 'SitePrices',
    components: { PricesList, PageTitle }
}
</script>