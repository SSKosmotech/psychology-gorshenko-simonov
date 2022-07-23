<template>
    <section id="consultation" v-if="consultationInfoData !== null">

            <div class="container">

               <h1>{{ consultationInfoData.title }}</h1>

               <div class="wrap_all_block_consultation">

                    <div  class="consultation_wrap">

                        <div v-for="(consultation, index) in consultationInfoData.consultation_lists" :key="index" class="consultation_item_wrap">
                            <p>{{ consultation.consultation_count }}</p>
                            <h4>{{ consultation.consultation_step }}</h4>
                            <p>{{ consultation.consultation_to_do }}</p>
                        </div> 


                        <!-- <div class="consultation_item_wrap">
                            <p>01</p>
                            <h4>Залишіть заявку</h4>
                            <p>Наш координатор напише вам у вказаний месенджер, щоб підібрати психолога та формат роботи.</p>
                        </div> 
        
                        <div class="consultation_item_wrap">
                            <p>02</p>
                            <h4>Виберіть психолога</h4>
                            <p>Координатор запропонує вам кілька психологів, чия спеціалізація та досвід роботи є найбільш ефективними для вирішення вашої проблеми.</p>
                        </div> 
        
                        <div class="consultation_item_wrap">
                            <p>04</p>
                            <h4>Насолоджуйтеся вільним життям</h4>
                            <p>Відчуйте смак життя без тривоги, депресії та панічних атак. Разом дійдемо до потрібного результату!</p>
                        </div>
        
                        <div class="consultation_item_wrap">
                            <p>03</p>
                            <h4>Почніть спілкування</h4>
                            <p>Після оплати послуги психолог зв'яжеться з вами у вказаному месенджері цього ж дня. Ви домовитеся про дату та час, і почнете роботу.</p>
                        </div> -->
                        
                    </div>

                    <button type="button" class="btn btn_red" @click.prevent="showForm">{{ consultationInfoData.button }}</button>

               </div>
                

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
            .get('/data/consultationInfo.json')
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