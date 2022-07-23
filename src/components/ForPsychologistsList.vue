<template>

<div v-if="psychologistsInfoData !== null">

    <section id="for_psychologists">
            <div class="container">
                <div class="psychologists_content_wrap">
                    <div class="wrap_img">
                        <img :src="require(`@/assets/images/`+psychologistsInfoData.img)" :alt="psychologistsInfoData.title" />
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

    <ForPsychologistsForm />

</div>
    
</template>

<script>
import axios from 'axios'
import ForPsychologistsForm from '@/components/Modules/ForPsychologistsForm.vue'

export default {
    name: "ForPsychologistsList",
    data() {
        return {
            psychologistsInfoData: null,
        };
    },
    created() {
        axios
            .get("/data/psychologistsInfoData.json")
            .then(resp => {
            this.psychologistsInfoData = resp.data;
        })
            .catch(err => {
            this.$toast.error(err);
        });
    },
    components: { ForPsychologistsForm }
}
</script>