<template>
  <div class="home">
    <div class="container">
      <h1 >Hello Serhii</h1>
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <br>
      <br>
      <br>
      <br>
    </div>
    <ContactsList />
  </div>
</template>

<script>
import ContactsList from '@/components/ContactsList.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    ContactsList
}
}
</script>
