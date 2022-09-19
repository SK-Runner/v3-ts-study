<template>
  <button @click="isMounted = !isMounted">{{isMounted ? '卸载' : '挂载'}}</button>
  <Child v-if="isMounted"></Child>
</template>

<script>
import { ref } from "vue";
import Child from "./child.vue";

export default {
  name: "life-cycle-demo",
  components: { Child },

  setup() {
    let isMounted = ref(true);
    return {
      isMounted,
    }
  }
}
</script>