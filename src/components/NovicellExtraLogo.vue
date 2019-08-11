<template>
    <Asset v-model="logo" src="https://srv-file1.gofile.io/download/DOam2I/Nvcl-Logo-Extra.glb" :scaling="[50,50,50]" :position="[0.5, -2, 0]">
    <!-- <Material>
      <Texture src="https://www.babylonjs-playground.com/textures/grass.png"></Texture>
    </Material> -->
    </Asset>
</template>

<script>

export default {
    data() {
        return {
            logo: null
        }
    },
  props: {
  },
  watch: {
      logo(e) {
          console.log(e)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
