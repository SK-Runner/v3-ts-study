<template>
  <h2>子组件</h2>
  <h3>通过props接收父组件传来的数据</h3>
  <h4>数据1：{{data1}}</h4>
  <h4>数据2：{{data2}}</h4>
  <h3>通过emit给父组件传递信息</h3>
  <button @click="toFather">send message</button>
</template>

<script>
export default {
  name: 'children',
  props: ['data1', 'data2'],
  emits: ['hello'],
  setup(props, {emit, slots, attrs}) {
    function toFather() {
      emit('hello', 'children');
    }

    return {
      toFather
    }
  }
}
</script>

<style scoped>
</style>