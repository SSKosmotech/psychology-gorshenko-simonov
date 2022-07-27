<template>
    <section id="specialists" v-if="ourSpecialistsListInfoData !== null">

        <h2>{{ ourSpecialistsListInfoData.title }}</h2>


        <div v-for="(specialists, index) in ourSpecialistsListInfoData.specialists" :key="index" class="specialists_item_wrap" :class="{specialists_item_wrap_reverse: index%2 !== 0}">

            <div class="wrap_img">
                <img :src="require(`@/assets/images/`+specialists.specialists_img)" :alt="`Спеціаліст: `+specialists.specialists_name+` - фото`">
            </div>

            <div class="specialists_wrap">
                <h3>{{ specialists.specialists_name }}</h3>
                <div class="icons_wrap">
                    <div class="icon_wrap">
                        <div v-html="specialists.svg_education"></div>
                        <p>{{ specialists.specialists_education }}</p>
                    </div>
                    <div class="icon_wrap">
                        <div v-html="specialists.svg_qualification"></div>
                        <p>{{ specialists.specialists_qualification }}</p>
                    </div>
                    <div class="icon_wrap">
                        <div v-html="specialists.svg_support"></div>
                        <p>{{ specialists.specialists_support }}</p>
                    </div>
                </div>
                <p>{{ specialists.specialists_about }}</p>
                <div class="meta_wrap">
                    <p @click.prevent="showFormRelations">{{ specialists.specialists_meta_01 }}</p>
                    <p @click.prevent="showFormGestalt">{{ specialists.specialists_meta_02 }}</p>
                    <p @click.prevent="showFormPsychotrauma">{{ specialists.specialists_meta_03 }}</p>
                    <p @click.prevent="showFormFears">{{ specialists.specialists_meta_04 }}</p>
                </div>
                <button type="button" class="btn btn_red" @click.prevent="showForm">{{ specialists.button }}</button>
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

        <modal-window v-if="showModalMeta" @close="showModalMeta = false">

            <template #header>
                <button type="button" class="close_modal_btn" @click="showModalMeta = false"></button>
            </template>
            <template #body>
                <div v-if="showRelations">
                    <ModalRelations/>
                </div>
                    
                <template v-if="showGestalt">
                    <ModalGestalt/>
                </template>

                <template v-if="showPsychotrauma">
                    <ModalPsychotrauma/>
                </template>

                <template v-if="showFears">
                    <ModalFears/>
                </template>
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
import ModalRelations from '@/components/Modules/ModalRelations.vue'
import ModalGestalt from '@/components/Modules/ModalGestalt.vue'
import ModalPsychotrauma from '@/components/Modules/ModalPsychotrauma.vue'
import ModalFears from '@/components/Modules/ModalFears.vue'


export default {
    name: 'OurSpecialistsList',
    components: {
    ModalWindow,
    FeedbackForm,
    ModalRelations,
    ModalGestalt,
    ModalPsychotrauma,
    ModalFears
},
    data () {
        return {
            ourSpecialistsListInfoData: null,
            showModal: false,
            showModalMeta: false,
            showRelations: false,
            showGestalt: false,
            showPsychotrauma: false,
            showFears: false
        }
    },
    created() {
        axios
            .get('data/ourSpecialistsInfo.json')
            .then(resp=>{
                this.ourSpecialistsListInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })
    },
    methods: {
        showForm() {
            this.showModal = true
        },
        showFormRelations() {
            this.metaFalse(),
            this.showModalMeta = true
            this.showRelations = true
        },
        showFormGestalt() {
            this.metaFalse(),
            this.showModalMeta = true,
            this.showGestalt = true
        },
        showFormPsychotrauma() {
            this.metaFalse(),
            this.showModalMeta = true,
            this.showPsychotrauma = true
        },
        showFormFears() {
            this.metaFalse(),
            this.showModalMeta = true,
            this.showFears = true
        },
        metaFalse() {
            this.showRelations = this.showGestalt = this.showPsychotrauma = this.showFears = false
        }
    }
}
</script>