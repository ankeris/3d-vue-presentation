<template>
  <div class="hello">
    <section>
      <Scene>
        <Property name="autoClear" :any="false"></Property>
        <Property name="autoClearDepthAndStencil" :any="false"></Property>
        <Property name="clearColor" color="#FFF"></Property>
        <DirectionalLight diffuse="#fff" :direction="[1,-1,-3]"></DirectionalLight>
        <Camera v-model="camera" :position="[-12, 15, 25]" :target="[1, 10, -10]" type="deviceOrientation"></Camera>
        <Asset src="https://srv-file1.gofile.io/download/OVE5SY/faceGLTF.gltf" :scaling="[1,1,1]" :position="[0, 0, -10]"></Asset>
        <Entity>
          <Asset v-if="picked == '1'" src="https://srv-file4.gofile.io/download/4QtXn2/mustache1.gltf" :scaling="[Number(moustacheSize),Number(moustacheSize),Number(moustacheSize)]" :position="[0, 8, -0.5]"></Asset>
          <Asset v-if="picked == '2'" src="https://srv-file4.gofile.io/download/DaYKum/mustache2.gltf" :scaling="[Number(moustacheSize),Number(moustacheSize),Number(moustacheSize)]" :position="[0, 8, -0.5]"></Asset>
          <Asset v-if="picked == '3'" src="https://srv-file4.gofile.io/download/DaYKum/mustache3.gltf" :scaling="[Number(moustacheSize),Number(moustacheSize),Number(moustacheSize)]" :position="[0, 8.5, -0.7]"></Asset>
          <Asset v-if="picked == '4'" src="https://srv-file4.gofile.io/download/DaYKum/mustache4.gltf" :scaling="[Number(moustacheSize),Number(moustacheSize),Number(moustacheSize)]" :position="[0, 8.7, -0.5]"></Asset>
          <Asset v-if="picked == '5'" src="https://srv-file4.gofile.io/download/DaYKum/mustache5.gltf" :scaling="[Number(moustacheSize),Number(moustacheSize),Number(moustacheSize)]" :position="[0, 8.1, -0.9]"></Asset>
        </Entity>
      </Scene>
      <div class="range-box">
        <label for="one">Moustache 1</label>
        <input v-model="picked" type="radio" name="moustache" id="one" value="1">
        <label for="two">Moustache 2</label>
        <input v-model="picked" type="radio" name="moustache" id="two" value="2">
        <label for="three">Moustache 3</label>
        <input v-model="picked" type="radio" name="moustache" id="three" value="3">
        <label for="four">Moustache 4</label>
        <input v-model="picked" type="radio" name="moustache" id="four" value="4">
        <label for="five">Moustache 5</label>
        <input v-model="picked" type="radio" name="moustache" id="five" value="5">
      </div>
      <input type="range" min="0" max="100" step="1" v-model="moustacheSize">
    </section>
  </div>
  
</template>

<script>
import {BABYLON} from 'vue-babylonjs';
import Novicell from '../components/NovicellLogo.vue';
import NovicellExtra from '../components/NovicellExtraLogo.vue';

export default {
  components: {
    Novicell,
    NovicellExtra
  },
  name: '',
  data() {
    return {
      scene: null,
      picked: "1",
      camera: null,
      moustacheSize: 50
    }
  },
  props: {
    msg: String
  },
  mounted() {
  },
  watch: {
    camera(e) {
        console.log(e);
    },
    scene(e) {

    }
    // sceneComplete({scene}) {
    //   const sceneN = scene;
    //   console.log(sceneN);
      
    //   // BABYLON.SceneLoader.Append("./", "novicell-logo.obj", scene, function (scene) {
    //   //   // do something with the scene
    //   //   console.log(scene);
    //   // });
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.range-box > input {
  margin: 10px;
}
</style>
