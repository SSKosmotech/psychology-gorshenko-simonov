<template>
    <h1 class="page_title" >{{ title }}</h1>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        title: {
            type: String,
            default: 'Центр практичної психології'
        }
    }
}
</script>

