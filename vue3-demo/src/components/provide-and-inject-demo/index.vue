<template>
  <div style="width: 700px; height: 700px; background-color: antiquewhite;">
    <h2>祖先---------车名：{{name}}，价格：{{price}}</h2>
    <Father></Father>
  </div>
</template>

<script>// @ts-nocheck

import { provide, reactive, toRefs } from 'vue';
import Father from './father.vue';
export default {
  name: 'grandFather',
  components: {Father},
  setup() {
    let car = reactive({
      name: '奥迪',
      price: '50W',
    })

    provide('car', car)

    return {
      ...toRefs(car),
    }
  }
}
</script>
<style scoped>
</style>