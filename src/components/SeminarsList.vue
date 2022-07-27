<template>
    <section id="seminars" v-if="seminarsListInfoData !== null">
            
            <div class="container">

                <div v-for="(seminars, index) in seminarsListInfoData.seminars" :key="index" class="seminars" :class="{seminars_reverse: index%2 !== 0}">

                    <div class="wrap_content">
                        
                        <p>{{ seminars.seminars_theme }}</p>
                        <h2>{{ seminars.seminars_title }}</h2>
                        <p>{{ seminars.seminars_text }}</p>
                        <div class="price_seminars_wrap">
                            <p>{{ seminars.seminars_text_price }}</p>
                            <p>{{ seminars.seminars_price }}</p>
                        </div>                        
                        <button type="button" class="btn btn_red" @click.prevent="showForm">{{ seminars.button }}</button>
                    </div>
    
                    <div class="wrap_img">
                        <img :src="require(`@/assets/images/`+seminars.img)" :alt="`Семінари — `+seminars.seminars_title">
                    </div>
                    
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
    name: 'SeminarsList',
    components: {
        ModalWindow,
        FeedbackForm
    },
    data () {
        return {
            seminarsListInfoData: null,
            showModal: false
        }
    },
    created() {
        axios
            .get('data/seminarsInfo.json')
            .then(resp=>{
                this.seminarsListInfoData = resp.data
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