<template>
    <section id="services" v-if="servicesListInfoData !== null">

        <div>
            <h2>{{ servicesListInfoData.title }}</h2>
            <p>{{ servicesListInfoData.about_services }}</p>
        </div>

        <div v-for="(services, index) in servicesListInfoData.services" :key="index" class="services_list" :class="{services_list_reverse: index % 2 !== 0}">
            <div class="wrap_content">
                
                <div class="title_wrap">
                    <p>{{ '0'+(index+1) }}</p>
                    <h3>{{ services.services_title }}</h3>
                </div>

                <p class="services_about">{{ services.services_about }}</p>
                
                <div class="services_price">
                    <b>{{ services.services_price_type }}</b> 
                    <p>{{ services.services_price_type_from }}</p> 
                    <span>{{ services.services_price }}</span>
                </div>

                <button type="button" class="btn btn_red" @click.prevent="showForm">{{ services.button }}</button>

            </div>

            <div class="wrap_img">
                <img :src="require(`@/assets/images/`+services.img)" :alt="services.services_title">
            </div>

        </div>

        <modal-window v-if="showModal" @close="showModal = false">
            <template #header>
                <button type="button" class="close_modal_btn" @click="showModal = false"></button>
            </template>
            <template #body>
                <FeedbackForm/>
            </template>
            <template #footer>
                <div></div>
            </template>

        </modal-window>

    </section>
</template>

<script>
import axios from 'axios'
import ModalWindow from '@/components/Modules/ModalWindow'
import FeedbackForm from '@/components/Modules/FeedbackForm.vue'

export default {
    name: 'ServicesList',
    components: {
        ModalWindow,
        FeedbackForm
    },
        data () {
        return {
            servicesListInfoData: null,
            showModal: false
        }
    },
    created() {
        axios
            .get('data/servicesInfo.json')
            .then(resp=>{
                this.servicesListInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    },
    methods: {
        showForm() {
            this.showModal = true
        }
    }
}
</script>