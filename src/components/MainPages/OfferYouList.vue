<template>
    <section id="we_offer_you" v-if="weOfferYouInfoData !== null">
        <!-- <div class="container"> -->

            <h2>{{ weOfferYouInfoData.title }}</h2>

            <div class="offer_wrap">
                <div class="offer_content_wrap">
                    <p>{{ weOfferYouInfoData.offer_paragraph_before }}</p>
                    <p>{{ weOfferYouInfoData.offer_paragraph_text }}</p>
                    <ul>
                        <template v-for="(list, index) in weOfferYouInfoData.we_offer_you" :key="index">
                            <li v-html="list.offer_item"></li>
                        </template>
                        <!-- <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li> -->
                    </ul>
                    <div class="change_life_wrap">
                        <button type="button" class="btn btn_red" @click.prevent="showForm">{{ weOfferYouInfoData.button }}</button>
                        <div class="offer_price_wrap">
                            <p>{{ weOfferYouInfoData.price_name }}</p>
                            <span>{{ weOfferYouInfoData.price }}</span>
                        </div>
                    </div>
                </div>

                <div class="wrap_img">
                    <img :src="require(`@/assets/images/`+weOfferYouInfoData.image)" :alt="weOfferYouInfoData.title+` — Фото`">
                </div>

            </div>
        <!-- </div> -->

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
    name: 'OfferYou',
    components: {
        ModalWindow,
        FeedbackForm
    },
    data () {
        return {
            weOfferYouInfoData: null,
            showModal: false
        }
    },
    created() {
        axios
            .get('data/weOfferYouInfo.json')
            .then(resp=>{
                this.weOfferYouInfoData = resp.data
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