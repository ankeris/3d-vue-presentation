<template>
    <section>
        <h1>use 'W' 'A' 'S' 'D' to move</h1>
        <Scene @complete="complete">
            <Camera v-model="camera" :direction="[0,0,0]" type="arcRotate"></Camera>
            <DirectionalLight diffuse="#b3153e" :position="[10, 15, 5]" :direction="[0,-1,5]"></DirectionalLight>
            <Box :position="[positionX, 0, positionZ]"></Box>
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
            positionZ: 0
        }
    },
    methods: {
        complete({scene}) {
            let inputMap = {};
            scene.actionManager = new BABYLON.ActionManager(scene);
            scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {								
                inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
            }));
            scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {								
                inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
            }));

            scene.onBeforeRenderObservable.add(()=>{
                if(inputMap["w"] || inputMap["ArrowUp"]){
                    this.positionZ += 0.05;
                    // console.log('W');
                } 
                if(inputMap["a"] || inputMap["ArrowLeft"]){
                    this.positionX -= 0.05;
                    // console.log('A');
                } 
                if(inputMap["s"] || inputMap["ArrowDown"]){
                    this.positionZ -= 0.05;
                    // console.log('S');
                } 
                if(inputMap["d"] || inputMap["ArrowRight"]){
                    this.positionX += 0.05;
                    // console.log('D');
                }    
            })

            // window.addEventListener("click", function () {
            //     var pickResult = scene.pick(scene.pointerX, scene.pointerY);
            //     console.log(pickResult);
            // });
        }
    },
}
</script>

<style lang="scss" scoped>

</style>