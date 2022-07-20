<template>
    
        <section id="accordion_services">

            <div class="container">

                <h2>Наші Послуги</h2>

                <div class="accordion_services_wrap">

                    <div class="accordion_services_item">

                        <div class="wrap_tab">
                             <vue-collapsible-panel-group accordion>
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
                                </vue-collapsible-panel>
                            </vue-collapsible-panel-group>
                        </div>


                        <div class="wrap_img">
                            <img src="@/assets/images/main-services-01.jpg" alt="Індивідуальні заняття — фото">
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
    name: 'ServicesMain',
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
            .get('/data/servicesInfo.json')
            .then(resp=>{
                this.servicesMainInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    }
}
</script>