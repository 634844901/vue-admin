<template>
  <div>
    <renderd :list="list"/>
  </div>
</template>

<script>
import renderd from './renderDom'
export default {
  name: '',
  components: {
    renderd
  },
  data() {
    return {
      list: [
        { name: 'render' },
        { name: '沈高锋' },
        { name: 'VUE' }
      ],
      a: ['1', '2', '3']
    }
  }
}
</script>

<style scoped>

</style>
