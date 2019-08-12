<template>
    <section>
        <Scene>
            <Camera v-model="camera" :position="[cameraX, 0, -40]" type="free"></Camera>
            <DirectionalLight diffuse="#b3153e" :position="[10, 15, 5]" :direction="[0,-1,5]"></DirectionalLight>
            <Entity :scaling="[1, 1, 1]" :position="[0, 0, 0]">
                <Ground :scaling="[35,-1,15]" :position="[0,0,0]">
                    <Material emissive="#fff"></Material>
                </Ground>
            </Entity>
            <Entity v-for="(number, idx) in numbersArr" :position="[idx+idx*8, 0, 0]" :key="idx">
                <One v-if="number == 1"></One>
                <Two v-if="number == 2"></Two>
                <Three v-if="number == 3"></Three>
                <Four v-if="number == 4"></Four>
                <Five v-if="number == 5"></Five>
                <Six v-if="number == 6"></Six>
                <Seven v-if="number == 7"></Seven>
                <Eight v-if="number == 8"></Eight>
                <Nine v-if="number == 9"></Nine>
            </Entity>
        </Scene>
        <input type="number" v-model="numbersStr">
    </section>
</template>

<script>
    import One from '../components/numbers/One.vue';
    import Two from '../components/numbers/Two.vue';
    import Three from '../components/numbers/Three.vue';
    import Four from '../components/numbers/Four.vue';
    import Five from '../components/numbers/Five.vue';
    import Six from '../components/numbers/Six.vue';
    import Seven from '../components/numbers/Seven.vue';
    import Eight from '../components/numbers/Eight.vue';
    import Nine from '../components/numbers/Nine.vue';
    import Ten from '../components/numbers/Ten.vue';
    
    export default {
        components: { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten },
        data() {
            return {
                camera: null,
                numbersStr: null,
                numbersArr: [],
                cameraX: 0
            }
        },
        watch: {
            numbersStr(newVal, oldVal) {
                this.numbersArr = newVal.split('').map(Number);
                this.cameraX = this.numbersArr.length * 8;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>