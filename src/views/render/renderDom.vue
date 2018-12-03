<template>
  <div>
    <ul>
      <li v-for="(i, index) in list" :key="index">
        <renderdom :name="i.name"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Renderdom from './render-dom'
export default {
  name: '',
  components: {
    Renderdom
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
