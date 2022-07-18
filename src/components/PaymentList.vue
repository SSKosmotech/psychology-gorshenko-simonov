<template>
    <section id="payment">
            <div class="container">
                <h1>{{ paymentListInfoData.title }}</h1>


                <div v-for="(paymants, index) in paymentListInfoData.payments" :key="index" class="payment_method" :class="{payment_method_reverse: index%2 !== 0}">
                    <div class="wrap_content">
                        <div class="title_wrap">
                            <p>{{ paymants.counts }}</p>
                            <h2>{{ paymants.payments_title }}</h2>
                        </div>
                        <p>{{ paymants.payments_text }}</p>
                        <button type="button" class="btn btn_red">{{ paymants.button_text }}</button>
                    </div>
    
                    <div class="wrap_img">
                        <!-- <img :src="require(`@/assets/images/`+payments.img)" alt="Оплата на картку"> -->
                        <picture>
                            <source :srcset="require(`@/assets/images/`+paymants.img_mobile)" media="(max-width: 1350px)"/>
                            <img :src="require(`@/assets/images/`+paymants.img)" :alt="paymants.button_text+` — Фото`">
                        </picture>
                    </div>
                </div>
                
                
                
                <!-- <div class="payment_method" :class="{payment_method_reverse: index%2 === 0}"> -->
                    <!-- <div class="wrap_content">
                        <div class="title_wrap">
                            <p>01</p>
                            <h2>На картку</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type="button" class="btn btn_red">Сплатити</button>
                    </div> -->
    
                    <!-- <div class="wrap_img">
                        <picture>
                            <source srcset="@/assets/images/payment-card-1350.jpg" media="(max-width: 1350px)"/>
                            <img src="@/assets/images/payment-card.jpg" alt="example"/>
                        </picture> -->
                        <!-- <img src="@/assets/images/payment-card.jpg" alt="Оплата на картку"> -->
                    <!-- </div>
                </div> -->
                <!-- <div class="payment_method flex_row_reverse payment_method_reverse"> -->
                <!-- <div class="payment_method">
                    <div class="wrap_content">
                        <div class="title_wrap">
                            <p>02</p>
                            <h2>Готівка</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type="button" class="btn btn_red">Сплатити</button>
                    </div> -->
    
                    <!-- <div class="wrap_img wrap_img_reverse">
                        <picture>
                            <source srcset="@/assets/images/payment-cash-1350.jpg" media="(max-width: 1350px)"/>
                            <img src="@/assets/images/payment-cash.jpg" alt="example"/>
                        </picture> -->
                        <!-- <img src="@/assets/images/payment-cash.jpg" alt="Оплата готівкою"> -->
                    <!-- </div>
                </div> -->
                <!-- <div class="payment_method">
                    <div class="wrap_content">
                        <div class="title_wrap">
                            <p>03</p>
                            <h2>На рахунок</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type="button" class="btn btn_red">Сплатити</button>
                    </div> -->
    
                    <!-- <div class="wrap_img">
                        <picture>
                            <source srcset="@/assets/images/payment-check-1350.jpg" media="(max-width: 1350px)"/>
                            <img src="@/assets/images/payment-check.jpg" alt="example"/>
                        </picture> -->
                        <!-- <img src="@/assets/images/payment-check.jpg" alt="Оплата на рахунок"> -->
                    <!-- </div>
                </div> -->


            </div>
        </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'PaymentList',
    data () {
        return {
            paymentListInfoData: [],
        }
    },
    created() {
        axios
            .get('/data/paymentsInfo.json')
            .then(resp=>{
                this.paymentListInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    }
}
</script>