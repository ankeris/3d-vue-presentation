<template>
    <Entity :position="position" name="3">
            <Box :position="[0,0,0]" :scaling="[1,5,1]"></Box>
            <Box :position="[2,0,0]" :scaling="[1,5,1]"></Box>
            <Box :position="[4,0,0]" :scaling="[1,5,1]"></Box>
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
