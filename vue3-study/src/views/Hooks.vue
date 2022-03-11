<template>
  <div>X：{{x}}</div>
  <div>Y：{{y}}</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import getMousePoint from '../hook/getPagePoint'
export default defineComponent({
  name: 'HookApi',
  setup(){
    let {x,y} = getMousePoint();
    return {
      x,
      y
    }
  }
})

</script>
<style scoped>
</style>