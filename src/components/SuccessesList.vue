<template>
    <section id="successes" v-if="successesListInfoData !== null">
            
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
