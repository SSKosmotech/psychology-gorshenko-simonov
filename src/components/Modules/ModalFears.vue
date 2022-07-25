<template >
    <div id="meta_block" v-if="metaInfoData !== null">
        <h3>{{ metaInfoData.fears.title }}</h3>
        <p>{{ metaInfoData.fears.text }}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ModalFears',
    data () {
        return {
            metaInfoData: null,
        }
    },
    created() {
        axios
            .get('data/modalMetaInfo.json')
            .then(resp=>{
                this.metaInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    }
}
</script>