<template>
    <section id="prices" v-if="pricesListInfoData !== null" :class="{'pad_top': $route.path !== '/'}">
            <div class="container">
                <h1>{{ pricesListInfoData.title }}</h1>

                <carousel :settings="sliderSettings">
                    <slide v-for="(prices, index) in pricesListInfoData.prices" :key="index" class="our_prices_slider_item_wrap">
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
                    </slide>

                    <template #addons>
                        <!-- <navigation /> -->
                        <pagination />
                    </template>
                </carousel>

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

        </section>
</template>

<script>
import axios from 'axios'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
    name: 'PricesList',
    components: {
        Carousel,
        Slide,
        Pagination,
        // Navigation,
  },
    data () {
            return {
                pricesListInfoData: null,
                sliderSettings: {
                    itemsToShow: 3,
                    wrapAround: true,
                    snapAlign: 'start',
                    // autoplay: 5000,
                    pauseAutoplayOnHover: true,
                    slideWidth: 540,
                    breakpoints: {
                        // 0px and up
                        0: {
                            itemsToShow: 1,
                            // snapAlign: 'center',
                        },
                        // 1050px and up (1150px because I changed slider css)
                        1050: {
                            itemsToShow: 2,
                            // snapAlign: 'start',
                        },
                        // 1600 and up
                        1600: {
                            itemsToShow: 3,
                            // snapAlign: 'start',
                        },
                    },
                }
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