<template>
    <section id="about_us" v-if="aboutUsListInfoData !== null">

        <div class="about_us_wrap">
            <div class="wrap_img">
                <picture>
                        <source :srcset="require(`@/assets/images/`+aboutUsListInfoData.about_img_mobile)" media="(max-width: 490px)"/>
                        <img :src="require(`@/assets/images/`+aboutUsListInfoData.about_img)" :alt="aboutUsListInfoData.title+` — Фото`">
                </picture>
                </div>

            <div class="about_us_title_wrap">
                <h2>{{ aboutUsListInfoData.title }}</h2>
                <p>{{ aboutUsListInfoData.about_first_paragraph }}</p>
                <p>{{ aboutUsListInfoData.about_second_paragraph }}</p>
            </div>
        </div>

        <div class="five_reasons">

            <h2><span>{{ aboutUsListInfoData.about_reasons_times }}</span>{{ aboutUsListInfoData.about_reasons_title }}</h2>
            
            <div class="reasons_top">
                    <div class="reason_wrap">
                        <div v-html="aboutUsListInfoData.about_reasons_icon_01"></div>
                        <p>{{ aboutUsListInfoData.about_reasons_type_01 }}</p>
                    </div>
                    <div class="reason_wrap">
                        <div v-html="aboutUsListInfoData.about_reasons_icon_02"></div>
                        <p>{{ aboutUsListInfoData.about_reasons_type_02 }}</p>
                    </div>
                    <div class="reason_wrap">
                        <div v-html="aboutUsListInfoData.about_reasons_icon_03"></div>
                        <p>{{ aboutUsListInfoData.about_reasons_type_03 }}</p>
                    </div>
            </div>

            <div class="reasons_bottom">
                    <div class="reason_wrap">
                        <div v-html="aboutUsListInfoData.about_reasons_icon_04"></div>
                        <p>{{ aboutUsListInfoData.about_reasons_type_04 }}</p>
                    </div>
                    <div class="reason_wrap">
                        <div v-html="aboutUsListInfoData.about_reasons_icon_05"></div>
                        <p>{{ aboutUsListInfoData.about_reasons_type_05 }}</p>
                    </div>
            </div>
        
        </div>

    </section>

</template>

<script>
import axios from 'axios'

export default {
    name: 'AboutUsList',
    data () {
        return {
            aboutUsListInfoData: null,
        }
    },
    created() {
        axios
            .get('data/aboutUsInfo.json')
            .then(resp=>{
                this.aboutUsListInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })
    }
}
</script>