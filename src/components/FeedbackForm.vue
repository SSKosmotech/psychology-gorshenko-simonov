<template>
    <div id="feedback_form" v-if="feedbackFormInfoData !== null">
       <h2>{{ feedbackFormInfoData.title }}</h2>
       <p>{{ feedbackFormInfoData.feedback_form_text }}</p>

       <form action="#" class="form_feedback">
                <input type="text" id="name" name="name" :placeholder="feedbackFormInfoData?.placeholders?.name" required>
                <label for="name"></label>
                
                <input type="text" id="tel" name="tel" :placeholder="feedbackFormInfoData?.placeholders?.phone" required>
                <label for="text"></label>
                
                <input type="text" id="worries" name="worries" :placeholder="feedbackFormInfoData?.placeholders?.worries" required>
                <label for="worries"></label>

                <button type="submit" class="btn btn_xs">{{ feedbackFormInfoData.button }}</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'FeedbackForm',
    data () {
        return {
            feedbackFormInfoData: null,
        }
    },
    created() {
        axios
            .get('/data/feedbackFormInfo.json')
            .then(resp=>{
                this.feedbackFormInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    }
}
</script>