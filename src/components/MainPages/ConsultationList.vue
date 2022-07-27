<template>
    <section id="consultation" v-if="consultationInfoData !== null">

        <h2>{{ consultationInfoData.title }}</h2>

        <div class="wrap_all_block_consultation">

            <div  class="consultation_wrap">

                <div v-for="(consultation, index) in consultationInfoData.consultation_lists" :key="index" class="consultation_item_wrap">
                    <p>{{ consultation.consultation_count }}</p>
                    <h4>{{ consultation.consultation_step }}</h4>
                    <p>{{ consultation.consultation_to_do }}</p>
                </div> 

            </div>

            <button type="button" class="btn btn_red" @click.prevent="showForm">{{ consultationInfoData.button }}</button>

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
    name: 'ConsultationList',
    components: {
        ModalWindow,
        FeedbackForm
    },
    data () {
        return {
            consultationInfoData: null,
            showModal: false
        }
    },
    created() {
        axios
            .get('data/consultationInfo.json')
            .then(resp=>{
                this.consultationInfoData = resp.data
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