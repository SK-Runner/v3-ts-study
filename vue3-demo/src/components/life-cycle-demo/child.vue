<template>
  <div>{{sum}}</div>
  <button @click="sum++">add 1</button>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';
export default {
  name: "child",
  setup() {
    let sum = ref(0);

    onBeforeMount(() => {
      console.log('Vue 3 onBeforeMount');
    })
    onMounted(() => {
      console.log('Vue 3 onMounted');
    })
    onBeforeUpdate(() => {
      console.log('Vue 3 onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('Vue 3 onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('Vue 3 onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('Vue 3 onUnmounted');
    })

    return {
      sum,
    }
  }
}
</script>