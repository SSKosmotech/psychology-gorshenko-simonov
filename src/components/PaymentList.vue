<template>
    <section id="payment" v-if="paymentListInfoData !== null">

        <div v-for="(paymants, index) in paymentListInfoData.payments" :key="index" class="payment_method" :class="{payment_method_reverse: index%2 !== 0}">
            <div class="wrap_content">
                <div class="title_wrap">
                    <p>{{ '0'+(index+1) }}</p>
                    <h2>{{ paymants.payments_title }}</h2>
                </div>
                <p>{{ paymants.payments_text }}</p>
                    <a class="btn btn_red" :href="paymants.Link" rel="nofollow, noreferrer" target="_blank" :title="paymentListInfoData.title+` `+paymants.payments_title">
                            {{ paymants.button_text }}
                    </a>
            </div>

            <div class="wrap_img">
                <picture>
                    <source :srcset="require(`@/assets/images/`+paymants.img_mobile)" media="(max-width: 1350px)"/>
                    <img :src="require(`@/assets/images/`+paymants.img)" :alt="paymants.button_text+` — Фото`">
                </picture>
            </div>
        </div>
                
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'PaymentList',
    data () {
        return {
            paymentListInfoData: null,
        }
    },
    created() {
        axios
            .get('data/paymentsInfo.json')
            .then(resp=>{
                this.paymentListInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    }
}
</script>