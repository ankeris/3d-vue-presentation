<template>
    <Entity :position="position" name="4">
            <Box :position="[0,0,0]" :scaling="[1,5,1]"></Box>
            <Box :position="[2,0,0]" :scaling="[1,5,1]" :rotation="[0,0,0.2]"></Box>
            <Box :position="[3.4,0,0]" :scaling="[1,5,1]" :rotation="[0,0,-0.2]"></Box>
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
