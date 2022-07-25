<template>
    <section id="turn_to_us" v-if="turnToUsListInfoData !== null">
            <!-- <div class="container"> -->

                <h2>{{turnToUsListInfoData.title}}</h2>

                <div class="turn_to_us_lists_wrap">


                    <div v-for="(turn_to_us, index) in turnToUsListInfoData.turn_to_us" :key="index" class="turn_to_us_img_wrap" :class="{turn_to_us_img_wrap_reverse: index % 2 !== 0}">

                        <div class="wrap_img">
                            <img :src="require(`@/assets/images/`+turn_to_us.img)" :alt="turn_to_us.turn_to_us_name+` — Фото`">
                        </div>

                        <div class="turn_to_us_text_wrap">
                            <h4>{{ turn_to_us.turn_to_us_name }}</h4>
                            <p>{{ turn_to_us.turn_to_us_text }}</p>
                        </div>
                        
                    </div>
                    
                    <!-- <div class="turn_to_us_img_wrap">

                        <div class="wrap_img">
                            <img src="@/assets/images/turn_to_us_anxiety.jpg" alt="">
                        </div>

                        <div class="turn_to_us_text_wrap">
                            <h4>Відчуваєш тривогу в режимі нонстоп?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>

                    </div>

                    <div class="turn_to_us_img_wrap turn_to_us_img_wrap_reverse">
                        
                        <div class="wrap_img">
                            <img src="@/assets/images/turn_to_us_precious.jpg" alt="">
                        </div>
                    
                        <div class="turn_to_us_text_wrap">
                            <h4>Чому хтось цінніший за тебе?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                        </div>
                    
                    </div>

                    <div class="turn_to_us_img_wrap">
                        
                        <div class="wrap_img">
                            <img src="@/assets/images/turn_to_us_control.jpg" alt="">
                        </div>
                    
                        <div class="turn_to_us_text_wrap">
                            <h4>Контролюєш себе?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                        </div>
                    
                    </div>

                    <div class="turn_to_us_img_wrap turn_to_us_img_wrap_reverse">
                        
                        <div class="wrap_img">
                            <img src="@/assets/images/turn_to_us_afraid.jpg" alt="">
                        </div>
                    
                        <div class="turn_to_us_text_wrap">
                            <h4>Боїшся за своє майбутнє?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                        </div>
                    
                    </div>

                    <div class="turn_to_us_img_wrap">
                        
                        <div class="wrap_img">
                            <img src="@/assets/images/turn_to_us_not_understand.jpg" alt="">
                        </div>
                    
                        <div class="turn_to_us_text_wrap">
                            <h4>Тебе не розуміють?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
                        </div>
                    
                    </div> -->

                </div>
                <div class="turn_to_us_bottom_info">
                    <p>{{ turnToUsListInfoData.bottom_info }}</p>
                </div>
                <button type="button" class="btn btn_red" @click.prevent="showForm">{{ turnToUsListInfoData.button }}</button>
            <!-- </div> -->

            <modal-window v-if="showModal" @close="showModal = false">
            <!-- <template v-slot:header></template> -->
            <template #header>
                <button type="button" class="close_modal_btn" @click="showModal = false"></button>
            </template>
            <template #body>
                <FeedbackForm />
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
    name: "TurnToUsList",
    components: { 
        ModalWindow,
        FeedbackForm
    },
    data() {
        return {
            turnToUsListInfoData: null,
            showModal: false
        };
    },
    created() {
        axios
            .get("data/turnToUsInfo.json")
            .then(resp => {
            this.turnToUsListInfoData = resp.data;
        })
            .catch(err => {
            this.$toast.error(err);
        });
    },
    methods: {
        showForm() {
            this.showModal = true
        }
    }
    
}
</script>