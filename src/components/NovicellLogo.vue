<template>
    <Asset src="/3dFiles/Nvcl-Logo.glb" :scaling="[scale,scale,50]" :position="[0, -1, 0]">
    <!-- <Material>
      <Texture src="https://www.babylonjs-playground.com/textures/grass.png"></Texture>
    </Material> -->
    </Asset>
</template>

<script>

export default {
  props: {
    scale: Number,
    required: false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
