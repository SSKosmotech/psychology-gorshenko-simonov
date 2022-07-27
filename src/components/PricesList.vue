<template>
    <section id="prices" v-if="pricesListInfoData !== null">

        <carousel :settings="sliderSettings">
            <slide v-for="(prices, index) in pricesListInfoData.prices" :key="index" class="our_prices_slider_item_wrap">
                <div class="our_prices_slider_item">

                    <p>{{ prices.prices_time }}<span>{{ prices.prices_time_name }}</span></p>
                    
                    <h5>{{ prices.prices_title }}<span>{{ prices.prices_title_color }}</span></h5>
    
                    <ul>
                        <li>{{ prices.prices_about_first }}</li>
                        <li>{{ prices.prices_about_second }}</li>
                        <li>{{ prices.prices_about_third }}</li>
                    </ul>
    
                    <div class="slider_prices_wrap">
                        <div class="slider_prices_first_wrap">
                            <p>{{ prices.prices_price_online }}</p>
                            <p>{{ prices.prices_price_online_title }}</p>
                        </div>
                        <div class="slider_prices_second_wrap">
                            <p>{{ prices.prices_price_offline }}</p>
                            <p>{{ prices.prices_price_offline_title }}</p>
                        </div>
                    </div>
    
                    <button type="button" class="btn btn_red" @click.prevent="showForm">{{ prices.button }}</button>

                </div>
            </slide>

            <template #addons>
                <!-- <navigation /> -->
                <pagination />
            </template>
        </carousel>

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
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import ModalWindow from '@/components/Modules/ModalWindow'
import FeedbackForm from '@/components/Modules/FeedbackForm.vue'

export default {
    name: 'PricesList',
    components: {
        Carousel,
        Slide,
        Pagination,
        // Navigation,
        ModalWindow,
        FeedbackForm
  },
    data () {
            return {
                pricesListInfoData: null,
                showModal: false,
                sliderSettings: {
                    itemsToShow: 3,
                    wrapAround: true,
                    snapAlign: 'start',
                    // autoplay: 5000,
                    pauseAutoplayOnHover: true,
                    slideWidth: 540,
                    breakpoints: {
                        // 0px and up
                        0: {
                            itemsToShow: 1,
                            // snapAlign: 'center',
                        },
                        // 1050px and up (1150px because I changed slider css)
                        1050: {
                            itemsToShow: 2,
                            // snapAlign: 'start',
                        },
                        // 1600 and up
                        1600: {
                            itemsToShow: 3,
                            // snapAlign: 'start',
                        },
                    },
                }
            }
        },
        created() {
            axios
                .get('data/pricesInfo.json')
                .then(resp=>{
                    this.pricesListInfoData = resp.data
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