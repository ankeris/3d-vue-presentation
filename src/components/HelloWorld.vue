<template>
  <div class="hello">
    <h1>3D and Vue</h1>
    <h3>Vue-babylonjs</h3>
    <section>
      <Scene @complete="sceneComplete">
      <Camera type="arcRotate"></Camera>
      <Entity>
        <!-- <Animation property="rotation.z" :duration="15">
          <Key frame="0%" :value="1"></Key>
          <Key frame="50%" :value="3"></Key>
          <Key frame="100%" :value="1"></Key>
        </Animation> -->
        <DirectionalLight specular="#fff" diffuse="#b3153e" :position="[-10, 15, -5]" :direction="[0,-1,-5]"></DirectionalLight>
      </Entity>
      <Entity :scaling="[1, 1, 1]">
        <Ground :scaling="[35,1,15]" :rotation="[1.55,0,0]" :position="[0,1,-5]">
          <Material emissive="#fff"></Material>
        </Ground>
        <Entity>
          <Animation v-model="myModel" property="scaling.z" :duration="5">
            <Key frame="0%" :value="1"></Key>
          <Key frame="50%" :value="3"></Key>
          <Key frame="100%" :value="1"></Key>
          </Animation>
          <Novicell></Novicell>
        </Entity>
      </Entity>
    </Scene>
    </section>
  </div>
  
</template>

<script>
import {BABYLON} from 'vue-babylonjs';
import Novicell from './NovicellLogo.vue';

export default {
  components: {
    Novicell
  },
  name: '',
  data() {
    return {
      myModel: null
    }
  },
  props: {
    msg: String
  },
  mounted() {
    console.log(BABYLON);
    
  },
  watch: {
    myModel(e) {
      console.log(e);
    }
  },
  methods: {
    sceneComplete({scene}) {
      console.log(scene);
      // BABYLON.SceneLoader.Append("./", "novicell-logo.obj", scene, function (scene) {
      //   // do something with the scene
      //   console.log(scene);
      // });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
