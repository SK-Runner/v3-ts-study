<template>
  <div>
    <Children data1="数据******" data2="数据******2" @hello="hello"></Children>
  </div>
</template>

<script>
// @ts-ignore
import Children from './Children.vue';
export default {
  name: "prop-demo",
  components: { Children },
  setup() {
    function hello(messge) {
      alert(`来自子组件的消息：${messge}`);
    }
    return {
      hello,
    }
  }
}
</script>