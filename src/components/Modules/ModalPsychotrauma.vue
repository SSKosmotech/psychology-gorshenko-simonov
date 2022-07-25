<template >
    <div id="meta_block" v-if="metaInfoData !== null">
        <h3>{{ metaInfoData.psychotrauma.title }}</h3>
        <p>{{ metaInfoData.psychotrauma.text }}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ModalPsychotrauma',
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