<template>
  <canvas :width="style.width" :height="style.height" class="bubble"/>
</template>

<script>
import myLizi from './myLizi'
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
      style: {
        width: `${document.body.clientWidth}px`,
        height: `${document.body.clientHeight}px`
      }
    }
  },
  mounted() {
    myLizi()
  }
}
</script>

<style>

</style>
