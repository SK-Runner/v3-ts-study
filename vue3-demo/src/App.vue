<template>
  <div id="app">
    <ProvideAndInjectDemo></ProvideAndInjectDemo>
  </div>
</template>

<script>// @ts-nocheck

import ProvideAndInjectDemo from './components/provide-and-inject-demo/index.vue';

export default {
  name: "App",
  components: { ProvideAndInjectDemo },
}
</script>
