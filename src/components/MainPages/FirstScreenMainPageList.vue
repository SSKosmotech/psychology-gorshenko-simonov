<template>

    <section id="first_screen_main_page" v-if="firstScreenInfoData !== null">
            <!-- <div class="container"> -->

                <div class="wrap_first_screen">
                    <div class="wrap_img">
                            <img :src="require(`@/assets/images/`+firstScreenInfoData.first_screen_img)" :alt="firstScreenInfoData.type+` `+firstScreenInfoData.name+` — Фото`">
                        </div>
    
                    <div class="first_screen_content_wrap">
    
                        <h3>{{firstScreenInfoData.type}}</h3>
                        <h1>{{firstScreenInfoData.name}}</h1>
                        <h2>{{firstScreenInfoData.surname}}</h2>
                        <p>{{firstScreenInfoData.quote}}</p>
                        <div class="sign_up_wrap">
                            <button type="button" class="btn btn_red" @click.prevent="showForm">{{firstScreenInfoData.button}}</button>
                            <div class="sign_up_price_wrap">
                                <div class="sign_up_text">
                                    <p>{{firstScreenInfoData.promotion}}</p>
                                    <p>{{firstScreenInfoData.promotion_text}}</p>
                                </div>
                                <div class="sign_up_price">
                                    <p>{{firstScreenInfoData.promotion_price}}</p>
                                    <p>{{firstScreenInfoData.promotion_old_price}}</p>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>

            <!-- </div> -->
        </section>

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

</template>

<script>
import axios from 'axios'
import ModalWindow from '@/components/Modules/ModalWindow'
import FeedbackForm from '@/components/Modules/FeedbackForm.vue'


export default {
    name: "FirstScreenMainPageList",
    components: {
        ModalWindow,
        FeedbackForm
    },
    data () {
        return {
            firstScreenInfoData: null,
            showModal: false
        }
    },
    created() {
        axios
            .get('data/firstScreenMainPageInfo.json')
            .then(resp=>{
                this.firstScreenInfoData = resp.data
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