<template>
    <section id="successes" v-if="successesListInfoData !== null" :class="{'pad_top': $route.path !== '/'}">

            <!-- <div class="container"> -->

                <!-- <h2>{{ successesListInfoData.title }}</h2> -->

                <div v-for="(successes, index) in successesListInfoData.successes" :key="index" class="clients_successes_item" :class="{clients_successes_item_reverse: index % 2 !== 0}">
                    
                    <div class="wrap_img">

                        <picture>
                            <source :srcset="require(`@/assets/images/`+successes.successes_img)" media="(max-width: 1350px)"/>
                            <img :src="require(`@/assets/images/`+successes.successes_img)" :alt="successesListInfoData.title+` — Петрик`">
                        </picture>

                    </div>

                    <div class="clients_successes_block_wrap">

                        <p>{{ successes.successes_name }}</p>

                        <div class="success_point">
                            <p>{{ successes.successes_point }}<span>{{ successes.successes_letter_from }}</span></p>
                        </div>

                        <div class="clients_successes_text">
                            <p>{{ successes.successes_about_from }}</p>
                            <div v-html="successes.successes_svg" class="successes_marker"></div>
                            <div v-html="successes.successes_svg_line" class="successes_line"></div>
                                <!-- <svg stroke="#F79781" stroke-width="3" stroke-dasharray="8 8" width="175" height="245" viewbox="0 0 175 245" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6033 20.0834C10.6033 20.0834 61.2553 -9.27326 86.966 6.8857C114.051 23.9081 88.6486 79.1944 106.934 87.3403C106.934 87.3403 135.471 100.053 153.757 108.199C172.042 116.345 179.617 68.9373 165.283 51.888C154.239 38.7518 139.026 37.9776 122.689 42.793C88.9593 52.7346 131.046 98.908 125.614 134.206C122.118 156.919 121.583 171.195 109.86 190.859C85.3934 231.899 0.402194 242.802 0.402194 242.802"/>
                                </svg> -->
                        </div>

                        <div class="success_point">
                            <p>{{ successes.successes_point }}<span>{{ successes.successes_letter_to }}</span></p>
                        </div>
                        
                        <div class="clients_successes_text">
                            <p>{{ successes.successes_about_to }}</p> 
                            <div>
                            <div v-html="successes.successes_svg" class="successes_marker"></div>
                            </div>
                        </div>

                    </div>

                    
                </div>

                <!-- <div class="clients_successes_item">
                    
                    <div class="wrap_img">
                        <img src="@/assets/images/successes-petrik.jpg" alt="Успіхи наших клієнтів — Петрик">
                    </div>

                    <div class="clients_successes_block_wrap">

                        <p>Петрик</p>

                        <div class="success_point">
                            <p>Точка <span>А</span></p>
                        </div>

                        <div class="clients_successes_text">
                            <p>Тривожний розлад. Виявилось, що Петрик дуже часто тримає емоції в собі. Його вже настільки достобісило хвилюватися за кожен свій крок, що він прийняв рішення змінювати своє життя.</p>
                            <div class="successes_marker">
                                <svg width="43" height="55" viewbox="0 0 43 55" fill="#F79781" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.3703 21.7185C42.3703 10.1701 33.0703 0.870117 21.5219 0.870117C9.97359 0.870117 0.673584 10.1701 0.673584 21.7185C0.673584 33.2668 21.5219 54.8306 21.5219 54.8306C21.5219 54.8306 42.3703 33.2668 42.3703 21.7185ZM11.8131 21.3097C11.8131 15.9954 16.2077 11.6009 21.5219 11.6009C26.8362 11.6009 31.2307 15.8932 31.2307 21.3097C31.2307 26.624 26.9384 31.0185 21.5219 31.0185C16.2077 31.0185 11.8131 26.624 11.8131 21.3097Z"/>
                                </svg>
                            </div>
                        </div>

                        <div class="success_point">
                            <p>Точка <span>Б</span></p>
                        </div>
                        
                        <div class="clients_successes_text">
                            <p>За доволі короткий час хлопець вже був щасливий та  не хвилювався за будь-які дрібниці. Будь, як Петрик, давай зробимо твоє життя менш тривожним.</p> 
                            <div>
                                <svg width="43" height="55" viewbox="0 0 43 55" fill="#F79781" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.3703 21.7185C42.3703 10.1701 33.0703 0.870117 21.5219 0.870117C9.97359 0.870117 0.673584 10.1701 0.673584 21.7185C0.673584 33.2668 21.5219 54.8306 21.5219 54.8306C21.5219 54.8306 42.3703 33.2668 42.3703 21.7185ZM11.8131 21.3097C11.8131 15.9954 16.2077 11.6009 21.5219 11.6009C26.8362 11.6009 31.2307 15.8932 31.2307 21.3097C31.2307 26.624 26.9384 31.0185 21.5219 31.0185C16.2077 31.0185 11.8131 26.624 11.8131 21.3097Z"/>
                                </svg>
                            </div>
                        </div>

                    </div>

                    
                </div>

                <div class="clients_successes_item clients_successes_item_reverse">
                    
                    <div class="wrap_img">
                        <img src="@/assets/images/successes-solomiya.jpg" alt="Успіхи наших клієнтів — Соломійка">
                    </div>

                    <div class="clients_successes_block_wrap">

                        <p>Соломійка</p>

                        <div class="success_point">
                            <p>Точка <span>А</span></p>
                        </div>

                        <div class="clients_successes_text">
                            <p>Вперше Соломійка прийшла до нас дуже засмучена, не проявляла емоцій та хотіла зробити своє життя більш кольоровим.</p>
                            <div class="successes_marker">
                                <svg width="43" height="55" viewbox="0 0 43 55" fill="#F79781" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.3703 21.7185C42.3703 10.1701 33.0703 0.870117 21.5219 0.870117C9.97359 0.870117 0.673584 10.1701 0.673584 21.7185C0.673584 33.2668 21.5219 54.8306 21.5219 54.8306C21.5219 54.8306 42.3703 33.2668 42.3703 21.7185ZM11.8131 21.3097C11.8131 15.9954 16.2077 11.6009 21.5219 11.6009C26.8362 11.6009 31.2307 15.8932 31.2307 21.3097C31.2307 26.624 26.9384 31.0185 21.5219 31.0185C16.2077 31.0185 11.8131 26.624 11.8131 21.3097Z"/>
                                </svg>
                            </div>
                        </div>

                        <div class="success_point">
                            <p>Точка <span>Б</span></p>
                        </div>

                        <div class="clients_successes_text">
                            <p>Після нашої розмови, ми зрозуміли, що Соломійка дуже активна, усміхнена та натхненна дівчинка, тому ми їй допомогли знайти свій унікальний ресурс. За кілька тижнів дівчина змінила своє життя на стільки, що вже й самі почали їй заздрити.</p> 
                            <div>
                                <svg width="43" height="55" viewbox="0 0 43 55" fill="#F79781" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.3703 21.7185C42.3703 10.1701 33.0703 0.870117 21.5219 0.870117C9.97359 0.870117 0.673584 10.1701 0.673584 21.7185C0.673584 33.2668 21.5219 54.8306 21.5219 54.8306C21.5219 54.8306 42.3703 33.2668 42.3703 21.7185ZM11.8131 21.3097C11.8131 15.9954 16.2077 11.6009 21.5219 11.6009C26.8362 11.6009 31.2307 15.8932 31.2307 21.3097C31.2307 26.624 26.9384 31.0185 21.5219 31.0185C16.2077 31.0185 11.8131 26.624 11.8131 21.3097Z"/>
                                </svg>
                            </div>
                        </div>

                    </div>
                    
                </div> -->
            
            <!-- </div> -->

        </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SuccessesList',
    data () {
        return {
            successesListInfoData: null,
        }
    },
    created() {
        axios
            .get('data/successesInfo.json')
            .then(resp=>{
                this.successesListInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    }
}
</script>
