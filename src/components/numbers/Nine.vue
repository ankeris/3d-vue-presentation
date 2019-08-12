<template>
    <Entity :position="position" name="9">
            <Box :position="[0,0,0]" :scaling="[1,5,1]"></Box>
            <Box :position="[3,0,0]" :scaling="[1,5.2,1]" :rotation="[0,0,0.5]"></Box>
            <Box :position="[3,0,0]" :scaling="[1,5.2,1]" :rotation="[0,0,-0.5]"></Box>
        </Entity>
</template>

<script>
import base from './numbers-base';

export default {
    mixins: [base]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
