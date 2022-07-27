<template>
    <section id="why_we" v-if="whyWeListInfoData !== null">
            
        <h2>{{ whyWeListInfoData.title }}</h2>

        <div class="why_we_list_wrap">

            <div class="our_lists_wrap">
                
                <div class="our_lists_detail_wrap">
                    <ul>
                        <template v-for="(list, index) in whyWeListInfoData.why_we_lists" :key="index">
                            <li v-html="list.list_item"></li>
                        </template>
                    </ul>

                    <router-link to="/about-us" target="_blank" :title="whyWeListInfoData.title">
                        {{ whyWeListInfoData.link_text }}
                    </router-link>
                </div>

                <div class="wrap_img">
                    <img :src="require(`@/assets/images/`+whyWeListInfoData.img_reasons)" :alt="whyWeListInfoData.title+`_01 — Фото`">
                </div>

            </div>

            <div class="interesting_offer">
                
                <div class="wrap_interesting_img">
                    <img :src="require(`@/assets/images/`+whyWeListInfoData.img_interesting_offer)" :alt="whyWeListInfoData.title+`_02 — Фото`">
                </div>

                <div class="interesting_offer_text_wrap">
                    <p v-html="whyWeListInfoData.interesting_offer_01"></p>
                    <p>{{ whyWeListInfoData.interesting_offer_02 }}</p>
                </div>
                
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'WhyWeList',
    data () {
        return {
            whyWeListInfoData: null,
        }
    },
    created() {
        axios
            .get('data/whyWeInfo.json')
            .then(resp=>{
                this.whyWeListInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })
    }
}
</script>