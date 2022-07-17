<template>
    <section id="prices">
            <div class="container">
                <h1>{{ pricesListInfoData.title }}</h1>


                <!-- <carousel :items-to-show="1.5">
                    <slide v-for="slide in 10" :key="slide">
                        {{ slide }}
                    </slide>

                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel> -->


                <div v-for="(prices, index) in pricesListInfoData.prices" :key="index" class="our_prices_slider">


                    <div class="our_prices_slider_item">

                        <p>{{ prices.prices_time }}<span>{{ prices.prices_time_name }}</span></p>
                        
                        <h5>{{ prices.prices_title }}<span>{{ prices.prices_title_color }}</span></h5>
        
                        <ul>
                            <li>{{ prices.prices_about_first }}</li>
                            <li>{{ prices.prices_about_second }}</li>
                            <li>{{ prices.prices_about_third }}</li>
                        </ul>
        
                        <div class="slider_prices_wrap">
                            <div class="slider_prices_first_wrap">
                                <p>{{ prices.prices_price_online }}</p>
                                <p>{{ prices.prices_price_online_title }}</p>
                            </div>
                            <div class="slider_prices_second_wrap">
                                <p>{{ prices.prices_price_offline }}</p>
                                <p>{{ prices.prices_price_offline_title }}</p>
                            </div>
                        </div>
        
                        <button type="button" class="btn btn_red">{{ prices.button }}</button>

                    </div>


                    <!-- <div class="our_prices_slider_item">

                        <p>60<span>хвилин</span></p>
                        
                        <h5>Консультація у власниці центру</h5>
        
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
        
                        <div class="slider_prices_wrap">
                            <div class="slider_prices_top_wrap">
                                <p>500₴</p>
                                <p>Онлайн</p>
                            </div>
                            <div class="slider_prices_bottom_wrap">
                                <p>700₴</p>
                                <p>Офлайн</p>
                            </div>
                        </div>
        
                        <button type="button" class="btn">Записатися</button>

                    </div>

                    <div class="our_prices_slider_item">

                        <p>60<span>хвилин</span></p>
                        
                        <h5>Перша <span>консультація</span></h5>
        
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
        
                        <div class="slider_prices_wrap">
                            <div class="slider_prices_top_wrap">
                                <p>400₴</p>
                                <p>Онлайн</p>
                            </div>
                            <div class="slider_prices_bottom_wrap">
                                <p>500₴</p>
                                <p>Офлайн</p>
                            </div>
                        </div>
        
                        <button type="button" class="btn">Записатися</button>

                    </div>

                    <div class="our_prices_slider_item">

                        <p>60<span>хвилин</span></p>
                        
                        <h5>Наступна <span>консультація</span></h5>
        
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
        
                        <div class="slider_prices_wrap">
                            <div class="slider_prices_top_wrap">
                                <p>300₴</p>
                                <p>Онлайн</p>
                            </div>
                            <div class="slider_prices_bottom_wrap">
                                <p>400₴</p>
                                <p>Офлайн</p>
                            </div>
                        </div>
        
                        <button type="button" class="btn">Записатися</button>

                    </div> -->


                </div>
            </div>

        </section>
</template>

<script>
import axios from 'axios'
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    name: 'PricesList',
//     components: {
//         Carousel,
//         Slide,
//         Pagination,
//         Navigation,
//   },
    data () {
            return {
                pricesListInfoData: [],
            }
        },
        created() {
            axios
                .get('/data/pricesInfo.json')
                .then(resp=>{
                    this.pricesListInfoData = resp.data
                })
                .catch(err=>{
                    this.$toast.error(err)
                })

        }
}
</script>