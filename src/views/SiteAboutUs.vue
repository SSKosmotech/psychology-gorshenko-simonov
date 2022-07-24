<template>
    <div class="container">
        <AboutUsList />
        <OurSpecialistsList />
    </div>
</template>

<script>
import AboutUsList from '@/components/AboutUsList.vue'
import OurSpecialistsList from '@/components/OurSpecialistsList.vue'
export default {
    name: 'SiteAboutUs',
    components: { AboutUsList, OurSpecialistsList }
}
</script>