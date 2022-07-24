<template >
    <div id="meta_block" v-if="metaInfoData !== null">
        <h3>{{ metaInfoData.gestalt.title }}</h3>
        <p>{{ metaInfoData.gestalt.text }}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ModalGestalt',
    data () {
        return {
            metaInfoData: null,
        }
    },
    created() {
        axios
            .get('/data/modalMetaInfo.json')
            .then(resp=>{
                this.metaInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    }
}
</script>