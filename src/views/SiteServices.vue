<template>
    <div class="container">
        <ServicesList />
    </div>
</template>

<script>
import ServicesList from '@/components/Services/ServicesList.vue';
export default {
    name: "SiteServices",
    components: { ServicesList }
}
</script>