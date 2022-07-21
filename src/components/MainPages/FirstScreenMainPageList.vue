<template>

    <section id="first_screen_main_page" v-if="firstScreenInfoData !== null">
            <div class="container">

                <div class="wrap_first_screen">
                    <div class="wrap_img">
                        <img :src="require(`@/assets/images/`+firstScreenInfoData.first_screen_img)" :alt="firstScreenInfoData.type+` `+firstScreenInfoData.name+` — Фото`">
                    </div>
    
                    <div class="first_screen_content_wrap">
    
                        <h3>{{firstScreenInfoData.type}}</h3>
                        <h1>{{firstScreenInfoData.name}}</h1>
                        <h2>{{firstScreenInfoData.surname}}</h2>
                        <p>{{firstScreenInfoData.quote}}</p>
                        <div class="sign_up_wrap">
                            <button type="button" class="btn btn_red">{{firstScreenInfoData.button}}</button>
                            <div class="sign_up_price_wrap">
                                <div class="sign_up_text">
                                    <p>{{firstScreenInfoData.promotion}}</p>
                                    <p>{{firstScreenInfoData.promotion_text}}</p>
                                </div>
                                <div class="sign_up_price">
                                    <p>{{firstScreenInfoData.promotion_price}}</p>
                                    <p>{{firstScreenInfoData.promotion_old_price}}</p>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>

            </div>
        </section>

</template>

<script>
import axios from 'axios'

export default {
    name: "FirstScreenMainPageList",
    data () {
        return {
            firstScreenInfoData: null,
        }
    },
    created() {
        axios
            .get('/data/firstScreenMainPageInfo.json')
            .then(resp=>{
                this.firstScreenInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    }
}
</script>