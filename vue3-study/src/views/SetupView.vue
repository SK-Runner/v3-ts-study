<template>
  <div>
    {{test}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SetupView',
  setup() {
    const test = 'hello,setup'
    return {
      test
    }
  }
})
</script>