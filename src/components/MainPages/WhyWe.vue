<template>
    <section id="why_we">
            <div class="container">
            
                <h1>{{ whyWeListInfoData.title }}</h1>

                <div class="why_we_list_wrap">

                    <div class="our_lists_wrap">
                        
                        <div class="our_lists_detail_wrap">
                            <ul>
                                <template v-for="(list, index) in whyWeListInfoData.why_we_lists" :key="index">
                                    <li v-html="list.list_item"></li>
                                </template>
                                <!-- <li><b>75%</b> людей залишаються з нами й надалі</li> -->
                                <!-- <li><b>24/7</b> - час, який можемо тобі присвятити</li> -->
                                <!-- <li>Ми <b>персонально</b> під тебе складемо план нашої роботи</li> -->
                                <!-- <li>Наші фахівці вивчають <b>нові підходи</b> до терапії</li> -->
                                <!-- <li><b>Європейські</b> методи терапії</li> -->
                            </ul>
                            <a :href="whyWeListInfoData.link" target="_blank">
                                {{ whyWeListInfoData.link_text }}
                            </a>
                        </div>

                        <div v-for="(img, index) in whyWeListInfoData.image" :key="index" class="wrap_img">
                            <img :src="require(`@/assets/images/`+img.img_reasons)" :alt="whyWeListInfoData.title+`_01 — Фото`">
                        </div>

                    </div>

                    <div class="interesting_offer">
                        
                        <div v-for="(img, index) in whyWeListInfoData.image" :key="index" class="wrap_interesting_img">
                            <img :src="require(`@/assets/images/`+img.img_interesting_offer)" :alt="whyWeListInfoData.title+`_02 — Фото`">
                        </div>

                        <div class="interesting_offer_text_wrap">
                            <p v-html="whyWeListInfoData.interesting_offer_01"></p>
                            <p>{{ whyWeListInfoData.interesting_offer_02 }}</p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'WhyWe',
    data () {
        return {
            whyWeListInfoData: [],
        }
    },
    created() {
        axios
            .get('/data/whyWeInfo.json')
            .then(resp=>{
                this.whyWeListInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    }
}
</script>