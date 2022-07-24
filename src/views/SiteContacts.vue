<template>
    <div class="container">
        <page-title :title="'Контакти'" />
        <ContactsList />
    </div>
</template>

<script>
import ContactsList from '@/components/ContactsList.vue';
import PageTitle from '@/components/Modules/PageTitle.vue';
export default {
    name: "SiteContacts",
    components: { ContactsList, PageTitle }
}
</script>
