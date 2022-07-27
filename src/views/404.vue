<template v-if="notFoundInfoData !== null">
    <div class="container not_found">
        <p>{{ notFoundInfoData.notFound_title }}</p>
        <p>{{ notFoundInfoData.notFound_paragraph }}</p>
        <router-link to="/" class="btn">{{ notFoundInfoData.notFound_link_home }}</router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "NotFound",
    data () {
        return {
            notFoundInfoData: null,
        }
    },
    created() {
        axios
            .get('data/notFoundInfo.json')
            .then(resp=>{
                this.notFoundInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    },
}
</script>