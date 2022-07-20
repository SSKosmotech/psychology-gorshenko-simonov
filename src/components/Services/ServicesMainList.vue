<template>
    
        <section id="accordion_services">

            <div class="container">

                <h2>{{ servicesMainInfoData.title }}</h2>

                <div class="accordion_services_wrap">

                    <div class="accordion_services_item">

                        <div class="wrap_tab">
                             <vue-collapsible-panel-group accordion >
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

                                <!--vue-collapsible-panel-group accordion>
                                <vue-collapsible-panel>
                                    <template #title>
                                    <div class="accordion_services_tab">
                                        <h5>Індивідуальні заняття</h5>
                                    </div>
                                    </template>
                                    <template #content>
                                        <div class="accordion_services_info">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p><span>Ціна: </span>від <span>700 ₴</span></p>
                                        </div>
                                    </template>
                                </vue-collapsible-panel>
                                <vue-collapsible-panel :expanded="false">
                                    <template #title>
                                        <div class="accordion_services_tab">
                                            <h5>Сімейний психотерапевт</h5>
                                        </div>
                                    </template>
                                    <template #content>
                                    <div class="accordion_services_info">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p><span>Ціна: </span>від <span>400 ₴</span></p>
                                        </div>
                                    </template>
                                </vue-collapsible-panel>
                                <vue-collapsible-panel :expanded="false">
                                    <template #title>
                                        <div class="accordion_services_tab">
                                            <h5>Дитячий психотерапевт</h5>
                                        </div>
                                    </template>
                                    <template #content>
                                    <div class="accordion_services_info">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p><span>Ціна: </span>від <span>500 ₴</span></p>
                                        </div>
                                    </template>
                                </vue-collapsible-panel> -->
                            </vue-collapsible-panel-group>
                        </div>


                        <div v-for="(img, index) in servicesMainInfoData.img" :key="index" class="wrap_img">
                            <img :src="require(`@/assets/images/`+img.image)" :alt="servicesMainInfoData.title+` — Фото`">
                        </div>
                    </div>

                    <!-- 

                        <div class="wrap_tab">
                            <div class="accordion_services_tab">
                                <h5>Індивідуальні заняття</h5>
                            </div>
                            <div class="accordion_services_info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p><span>Ціна: </span>від <span>700 ₴</span></p>
                            </div>
                            <div class="accordion_services_tab">
                                <h5>Сімейний психотерапевт</h5>
                            </div>
                            <div class="accordion_services_tab">
                                    <h5>Дитячий психотерапевт</h5>
                            </div>
                        </div>








                    <div class="accordion_services_item">
                        <div class="wrap_tab">
                            <div class="accordion_services_tab">
                                <h5>Сімейний психотерапевт</h5>
                            </div>
                            <div class="accordion_services_info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p><span>Ціна: </span>від <span>500 ₴</span></p>
                            </div>
                        </div>
                        <div class="wrap_img">
                            <img src="@/assets/images/services-02.jpg" alt="Сімейний психотерапевт — фото">
                        </div>
                    </div>
                        
                    <div class="accordion_services_item">
                        <div class="wrap_tab">
                            <div class="accordion_services_tab">
                                    <h5>Дитячий психотерапевт</h5>
                            </div>
                            <div class="accordion_services_info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p><span>Ціна: </span>від <span>400 ₴</span></p>
                            </div>
                        </div>
                        <div class="wrap_img">
                            <img src="@/assets/images/services-03.jpg" alt="Дитячий психотерапевт — фото">
                        </div>
                    </div> -->

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
            servicesMainInfoData: [],
        }
    },
    created() {
        axios
            .get('/data/servicesMainInfo.json')
            .then(resp=>{
                this.servicesMainInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    }
}
</script>