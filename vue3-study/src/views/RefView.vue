<template>
  <div>
    <button @click="updateCount">数字+1</button>
    {{count}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'RefView',
  setup() {
    const count = ref(0);
    
    function updateCount() {
      count.value++;
    }

    return {
      count,
      updateCount
    }
  }
})
</script>