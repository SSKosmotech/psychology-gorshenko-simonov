<template>
    <section id="accordion_services" v-if="servicesMainInfoData !== null">

        <h2>{{ servicesMainInfoData.title }}</h2>

        <div class="accordion_services_wrap">

            <div class="accordion_services_item">
                <div class="wrap_tab">
                        <vue-collapsible-panel-group accordion>
                        <vue-collapsible-panel v-bind:expanded="index === 0" v-for="(accordion, index) in servicesMainInfoData.accordion_services" :key="index">
                            <template #title>
                            <div class="accordion_services_tab">
                                <h5>{{ accordion.accordion_title }}</h5>
                            </div>
                            </template>
                            <template #content>
                                <div class="accordion_services_info">
                                    <p>{{ accordion.accordion_paragraph }}</p>
                                    <p><span>{{ accordion.accordion_price_name }}</span>{{ accordion.accordion_price_text }}<span>{{ accordion.accordion_price }}</span></p>
                                </div>
                            </template>
                        </vue-collapsible-panel>

                    </vue-collapsible-panel-group>
                </div>

                <div class="wrap_img">
                    <img :src="require(`@/assets/images/`+servicesMainInfoData.image)" :alt="servicesMainInfoData.title+` — Фото`">
                </div>
            </div>

        </div>

    </section>
</template>


<script>
import axios from 'axios'
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'

export default {
    name: 'ServicesMainList',
    components: {
        VueCollapsiblePanelGroup,
        VueCollapsiblePanel
    },
    data () {
        return {
            servicesMainInfoData: null,
        }
    },
    created() {
        axios
            .get('data/servicesMainInfo.json')
            .then(resp=>{
                this.servicesMainInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })
    }
}
</script>