<template>
    <div class="container">
        <PageTitle :title="'Оплата'" />
        <PaymentList />
    </div>
</template>

<script>
import PaymentList from '@/components/PaymentList.vue'
import PageTitle from '@/components/Modules/PageTitle.vue'
export default {
    name: 'SitePayment',
    components: { PaymentList, PageTitle }
}
</script>