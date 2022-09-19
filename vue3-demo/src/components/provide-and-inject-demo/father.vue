<template>
  <div style="width: 500px; height: 500px; background-color: bisque;">
    <h2>父</h2>
    <Grandson></Grandson>
  </div>
</template>

<script>
import Grandson from './grandson.vue';
export default {
  name: 'father',
  components: { Grandson },
  setup() {
  }
}
</script>
<style scoped>
</style>