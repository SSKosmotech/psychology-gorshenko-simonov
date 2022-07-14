<template>
    <section id="for_psychologists">
            <div class="container">
                <div class="psychologists_content_wrap">
                    <div class="wrap_img" v-for="(img, index) in psychologistsInfoData.image" :key="index">
                        <img :src="require(`@/assets/images/`+img.img)" :alt="psychologistsInfoData.title" />
                        <!-- <img :src="require('@/assets/images/'+pic)" :alt="title" /> -->
                        <!-- <img src="@/assets/images/for-psychologists.jpg" alt="Для психологів" /> -->
                    </div>

                    <div class="wrap_content">
                        <h1>{{ psychologistsInfoData.title }}</h1>
                        <p>{{ psychologistsInfoData.text_first }}</p>
                        <p>{{ psychologistsInfoData.text_second }}</p>
                    </div>
                </div>
               
            </div>
    </section>

    <section id="for_psychologists_form">
        <div class="container">

            <h2>{{ psychologistsInfoData.title_form }}</h2>

            <form action="#">
                <input type="text" id="name" name="name" :placeholder="psychologistsInfoData?.placeholders?.name" required>
                <label for="name"></label>
                
                <input type="tel" id="tel" name="tel" :placeholder="psychologistsInfoData?.placeholders?.phone" required>
                <label for="tel"></label>
                
                <button type="submit" class="btn btn_m">{{ psychologistsInfoData.button }}</button>
            </form>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ForPsychologistsList',
    data () {
        return {
            psychologistsInfoData: []
        }
    },
    created() {
        axios
            .get('/data/psychologistsInfoData.json')
            .then(resp=>{
                this.psychologistsInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    }
}
</script>