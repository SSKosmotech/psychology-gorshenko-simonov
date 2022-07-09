<template>
  <!-- <div class="about"> -->
  <div>
    <!-- <h1>This is an contacts page</h1> -->
    
    <ContactsList />

  </div>
</template>

<script>
import ContactsList from '@/components/ContactsList.vue';
export default {
    name: "SiteContacts",
    components: { ContactsList }
}
</script>
