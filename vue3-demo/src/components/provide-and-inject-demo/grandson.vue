<template>
  <div style="width: 300px; height: 300px; background-color: brown;">
    <h2>孙-------{{car}}</h2>
  </div>
</template>

<script>// @ts-nocheck

import { inject } from 'vue';
export default {
  name: 'grandson',
  setup() {
    let car = inject('car');
    return {
      car
    }
  }
}
</script>
<style scoped>
</style>