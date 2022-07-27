<template>
  <div class="container">
    <FirstScreenMainPage />
    <TurnToUs />
    <WhyWe />
    <OurSpecialistsList/>
    <ServicesMain />
    <h2 class="h2_main_page">Ціни</h2>
    <PricesList />
    <OfferYouList/>
    <ConsultationList/>
    <h2 class="h2_main_page">Успіхи наших клієнтів</h2>
    <SuccessesList />
    <h2 class="h2_main_page">Контакти</h2>
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
import OurSpecialistsList from '@/components/OurSpecialistsList.vue';
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
    ConsultationList,
    OurSpecialistsList
  }
}
</script>
