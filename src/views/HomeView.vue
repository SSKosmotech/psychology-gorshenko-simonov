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
    <ConsultationList/>
    <ServicesMain />
    <TurnToUs />
    <OfferYouList/>
    <WhyWe />
    <PricesList />
    <SuccessesList />
    <ContactsList />
  </div>
</template>

<script>
import ContactsList from '@/components/ContactsList.vue';
import SuccessesList from '@/components/SuccessesList.vue';
import PricesList from '@/components/PricesList.vue';
import ServicesMain from '@/components/Services/ServicesMainList.vue';
import FirstScreenMainPage from '@/components/MainPages/FirstScreenMainPageList.vue';
import TurnToUs from '@/components/MainPages/TurnToUsList.vue';
import WhyWe from '@/components/MainPages/WhyWeList.vue';
import OfferYouList from '@/components/MainPages/OfferYouList.vue';
import ConsultationList from '@/components/MainPages/ConsultationList.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    ContactsList,
    SuccessesList,
    PricesList,
    ServicesMain,
    FirstScreenMainPage,
    TurnToUs,
    WhyWe,
    OfferYouList,
    ConsultationList
}
}
</script>
