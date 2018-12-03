<template>
  <!--<div>123456</div>-->
  <canvas ref="canvas" :style="{background:bgcolor}" style="width:100%;height:100%;z-index:100;" />
</template>

<script>
import DrawParticle from './particle'
export default {
  props: {
    bgcolor: {
      type: String,
      default: function() {
        return '#515a6e70'
      }
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    new DrawParticle({
      el: this.$refs.canvas
    })
  }
}
</script>

<style>

</style>
