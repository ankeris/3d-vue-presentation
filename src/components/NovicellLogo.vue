<template>
    <Asset src="https://srv-file1.gofile.io/download/zbfO8Q/Nvcl-Logo.glb" :scaling="[50,50,50]" :position="[0, -1, 0]">
    <!-- <Material diffuse="#008800"></Material> -->
    <Material>
      <Texture src="https://www.babylonjs-playground.com/textures/grass.png"></Texture>
    </Material>
    </Asset>
</template>

<script>

export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
