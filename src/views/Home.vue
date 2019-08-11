<template>
  <div class="hello">
    <section>
      <Scene>
      <Camera :position="[0, 3, 18]" :target="[-0.2,1.5,0]" type="free"></Camera>
      <Entity>
        <DirectionalLight diffuse="#b3153e" :position="[-10, 15, -5]" :direction="[0,-1,-5]"></DirectionalLight>
      </Entity>
      <Entity :scaling="[1, 1, 1]" :position="[-0.6, 0, 0]">
        <Ground :scaling="[35,1,15]" :rotation="[1.55,0,0]" :position="[0,1,-5]">
          <Material emissive="#fff"></Material>
        </Ground>
        <Entity>
          <Animation v-model="myModel" property="scaling.z" :duration="5">
            <Key frame="0%" :value="1"></Key>
            <Key frame="50%" :value="3"></Key>
            <Key frame="100%" :value="1"></Key>
          </Animation>
          <Novicell :scale="Number(logoScale)"></Novicell>
          <NovicellExtra v-if="showExtra"></NovicellExtra>
        </Entity>
          <Asset src="https://srv-file1.gofile.io/download/OVE5SY/faceGLTF.gltf" :scaling="[1,1,1]" :position="[0.5, 5.5, -10]"></Asset>
      </Entity>
    </Scene>
    <div class="range-box">
      <input type="range" min="0" max="150" step="1" v-model="logoScale">
      <label for="online">Add extra</label>
      <input v-model="showExtra" name="online" type="checkbox">
    </div>
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
      myModel: null,
      logoScale: 50,
      showExtra: false
    }
  },
  props: {
    msg: String
  },
  mounted() {
  },
  methods: {
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
