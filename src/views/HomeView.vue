<template>
  <div class="home">
    <!-- <div class="container"> -->
      <!-- <h1 style="padding-top: 240px">Hello Serhii</h1> -->
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <!-- <br> -->
      <!-- <br> -->
      <!-- <br> -->
      <!-- <br> -->
    <!-- </div> -->
    <FirstScreenMainPage />
    <ServicesMain />
    <PricesList />
    <SuccessesList />
    <ContactsList />
  </div>
</template>

<script>
import ContactsList from '@/components/ContactsList.vue';
import SuccessesList from '@/components/SuccessesList.vue';
import PricesList from '@/components/PricesList.vue';
import ServicesMain from '@/components/Services/ServicesMain.vue';
import FirstScreenMainPage from '@/components/MainPages/FirstScreenMainPage.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    ContactsList,
    SuccessesList,
    PricesList,
    ServicesMain,
    FirstScreenMainPage
}
}
</script>
