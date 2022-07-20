<template>
    <section id="we_offer_you">
        <div class="container">

            <h1>{{ weOfferYouInfoData.title }}</h1>

            <div class="offer_wrap">
                <div class="offer_content_wrap">
                    <p>{{ weOfferYouInfoData.offer_paragraph_before }}</p>
                    <p>{{ weOfferYouInfoData.offer_paragraph_text }}</p>
                    <ul>
                        <template v-for="(list, index) in weOfferYouInfoData.we_offer_you" :key="index">
                            <li v-html="list.offer_item"></li>
                        </template>
                        <!-- <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li> -->
                    </ul>
                    <div class="change_life_wrap">
                        <button type="button" class="btn btn_red">{{ weOfferYouInfoData.button }}</button>
                        <div class="offer_price_wrap">
                            <p>{{ weOfferYouInfoData.price_name }}</p>
                            <span>{{ weOfferYouInfoData.price }}</span>
                        </div>
                    </div>
                </div>

                <div v-for="(img, index) in weOfferYouInfoData.img" :key="index" class="wrap_img">
                    <img :src="require(`@/assets/images/`+img.image)" :alt="weOfferYouInfoData.title+` — Фото`">
                </div>

            </div>
        </div>

    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'OfferYou',
    data () {
        return {
            weOfferYouInfoData: [],
        }
    },
    created() {
        axios
            .get('/data/weOfferYouInfo.json')
            .then(resp=>{
                this.weOfferYouInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })
    }
}
</script>