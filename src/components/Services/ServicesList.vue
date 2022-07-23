<template>
    <section id="services" v-if="servicesListInfoData !== null" :class="{'pad_top': $route.path !== '/'}">
            <div class="container">
                <div>
                    <h1>{{ servicesListInfoData.title }}</h1>
                    <p>{{ servicesListInfoData.about_services }}</p>
                </div>

                
                    <div v-for="(services, index) in servicesListInfoData.services" :key="index" class="services_list" :class="{services_list_reverse: index % 2 !== 0}">
                        <div class="wrap_content">
                            
                            <div class="title_wrap">
                                <p>{{ services.services_count }}</p>
                                <h2>{{ services.services_title }}</h2>
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


                
                <!-- <div class="services_list">
                    <div class="wrap_content">
                        
                        <div class="title_wrap">
                            <p>01</p>
                            <h2>Індивідуальні консультації</h2>
                        </div>
                        <p class="services_about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <div class="services_price">
                            <b>Консультація:</b> 
                            <p>від</p> 
                            <span>300 ₴</span>
                        </div>
                        <button type="button" class="btn btn_red">Записатися</button>

                    </div>
    
                    <div class="wrap_img">
                        <img src="@/assets/images/services-01.jpg" alt="Індивідуальні консультації">
                    </div>
                </div>

                <div class="services_list services_list_reverse">
                    <div class="wrap_content">
                        
                        <div class="title_wrap">
                            <p>02</p>
                            <h2>Сімейний психотерапевт</h2>
                        </div>
                        <p class="services_about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <div class="services_price">
                            <b>Консультація:</b> 
                            <p>від</p> 
                            <span>500 ₴</span>
                        </div>
                        <button type="button" class="btn btn_red">Записатися</button>
                    </div>
    
                    <div class="wrap_img">
                        <img src="@/assets/images/services-02.jpg" alt="Сімейний психотерапевт">
                    </div>
                </div>

                <div class="services_list">
                    <div class="wrap_content">
                        
                        <div class="title_wrap">
                            <p>03</p>
                            <h2>Дитячий психотерапевт</h2>
                        </div>
                        <p class="services_about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <div class="services_price">
                            <b>Консультація:</b> 
                            <p>від</p> 
                            <span>300 ₴</span>
                        </div>
                        <button type="button" class="btn btn_red">Записатися</button>
                    </div>
    
                    <div class="wrap_img">
                        <img src="@/assets/images/services-03.jpg" alt="Дитячий психотерапевт">
                    </div>
                </div> -->

            </div>

        <modal-window v-if="showModal" @close="showModal = false">
            <!-- <template v-slot:header></template> -->
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
            .get('/data/servicesInfo.json')
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