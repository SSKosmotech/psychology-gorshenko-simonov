<template>
    <section id="seminars" v-if="seminarsListInfoData !== null">
            <div class="container">


                <div v-for="(seminars, index) in seminarsListInfoData.seminars" :key="index" class="seminars" :class="{seminars_reverse: index%2 !== 0}">

                    <div class="wrap_content">
                        
                        <p>{{ seminars.seminars_theme }}</p>
                        <h2>{{ seminars.seminars_title }}</h2>
                        <p>{{ seminars.seminars_text }}</p>
                        <div class="price_seminars_wrap">
                            <p>{{ seminars.seminars_text_price }}</p>
                            <p>{{ seminars.seminars_price }}</p>
                        </div>                        
                        <button type="button" class="btn btn_red">{{ seminars.button }}</button>
                    </div>
    
                    <div class="wrap_img">
                        <!-- <img src="@/assets/images/seminars-son.jpg" alt="Семінари, як виростити сина"> -->
                        <img :src="require(`@/assets/images/`+seminars.img)" :alt="`Семінари — `+seminars.seminars_title">
                    </div>
                    
                </div>


                <!-- <div class="seminars">
                    <div class="wrap_content">
                        
                        <p>Лекція/Діти</p>
                        <h2>Як виростити сина, аби він став крутим, як Ілон Маск</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="price_seminars_wrap">
                            <p>Ціна:</p>
                            <p>200 ₴</p>
                        </div>                        
                        <button type="button" class="btn btn_red">Придбати</button>
                    </div>
    
                    <div class="wrap_img">
                        <img src="@/assets/images/seminars-son.jpg" alt="Семінари, як виростити сина">
                    </div>
                    
                </div>

                <div class="seminars seminars_reverse">
                    <div class="wrap_content">
                        
                        <p>Лекція</p>
                        <h2>Як позбутися синдрому фантомної сирени</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="price_seminars_wrap">
                            <p>Ціна:</p>
                            <p>200 ₴</p>
                        </div>
                        <button type="button" class="btn btn_red">Придбати</button>
                    </div>
    
                    <div class="wrap_img">
                        <img src="@/assets/images/seminars-sirens.jpg" alt="Семінари, як позбутися синдрому фантомної сирени">
                    </div>
                    
                </div>

                <div class="seminars">
                    <div class="wrap_content">
                        
                        <p>Лекція/Діти</p>
                        <h2>Як виростити сина, аби він став крутим, як Ілон Маск</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="price_seminars_wrap">
                            <p>Ціна:</p>
                            <p>200 ₴</p>
                        </div>                        
                        <button type="button" class="btn btn_red">Придбати</button>
                    </div>
    
                    <div class="wrap_img">
                        <img src="@/assets/images/seminars-son.jpg" alt="Семінари, як виростити сина">
                    </div>
                    
                </div>

                <div class="seminars seminars_reverse">
                    <div class="wrap_content">
                        
                        <p>Лекція</p>
                        <h2>як позбутися синдрому фантомної сирени</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="price_seminars_wrap">
                            <p>Ціна:</p>
                            <p>200 ₴</p>
                        </div>
                        <button type="button" class="btn btn_red">Придбати</button>
                    </div>
    
                    <div class="wrap_img">
                        <img src="@/assets/images/seminars-sirens.jpg" alt="Семінари, як позбутися синдрому фантомної сирени">
                    </div>
                    
                </div>

                <div class="seminars">
                    <div class="wrap_content">
                        
                        <p>Лекція/Діти</p>
                        <h2>Як виростити сина, аби він став крутим, як Ілон Маск</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="price_seminars_wrap">
                            <p>Ціна:</p>
                            <p>200 ₴</p>
                        </div>
                        <button type="button" class="btn btn_red">Придбати</button>
                    </div>
    
                    <div class="wrap_img">
                        <img src="@/assets/images/seminars-son.jpg" alt="Семінари, як виростити сина">
                    </div>
                    
                </div> -->


            </div>
        </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SeminarsList',
    data () {
        return {
            seminarsListInfoData: null,
        }
    },
    created() {
        axios
            .get('/data/seminarsInfo.json')
            .then(resp=>{
                this.seminarsListInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })
    }

}
</script>