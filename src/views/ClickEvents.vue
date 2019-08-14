<template>
    <section>
        <h1>Click on scene</h1>
        <Scene @complete="complete">
            <Camera v-model="camera" :position="[-12, 15, 20]" :target="[0,0,0]" type="deviceOrientation"></Camera>
            <DirectionalLight diffuse="#b3153e" :position="[10, 15, 5]" :direction="[0,-1,5]"></DirectionalLight>
            <Box v-for="position in clickedPositions" :position="[position.x, 0, position.z]" :key="position.x+position.z">
                <Material emissive="#fff"></Material>
            </Box>
            <Box :scaling="[35,0.5,15]" :position="[0,-1,0]">
                <Material emissive="#000"></Material>
            </Box>
        </Scene>
    </section>
</template>

<script>
import * as BABYLON from 'babylonjs';

export default {
    data() {
        return {
            camera: null,
            positionX: 0,
            positionZ: 0,
            clickedPositions: []
        }
    },
    methods: {
        complete({scene}) {
            let inputMap = {};
            window.addEventListener("click", (evt) => {
                const pickResult = scene.pick(evt.clientX, evt.clientY);
                const {pickedPoint} = pickResult;
                
                this.clickedPositions.push({x: pickedPoint.x, z: pickedPoint.z});
            });
        }
    },
}
</script>

<style lang="scss" scoped>

</style>