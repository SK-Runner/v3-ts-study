<template>
  <div>{{count}}</div>
  <button @click="add">更新数据</button>
  <div>观察与V2相比生命周期执行顺序</div>
</template>

<script lang='ts'>
import { ref, defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue'
export default defineComponent({
  name: 'leftCycleView',
  setup() {
    let count = ref(0);
    const add = function(){
      count.value++;
    }

    console.log('V3 setup');
    onBeforeMount(()=>{
      console.log('V3 before mount');
    })
    onMounted(()=>{
      console.log('v3 mounted');
    })
    onBeforeUpdate(()=>{
      console.log('V3 before update');
    })
    onUpdated(()=>{
      console.log('V3 updated');
    })
    onBeforeUnmount(()=>{
      console.log('V3 before unmount');
    })
    onUnmounted(()=>{
      console.log('V3 unmounted');
    })
    
    return {
      count,
      add,
    }
  },
  beforeCreate(){
    console.log('V2 before create');
  },
  created(){
    console.log('V2 created');
  },
  beforeMount(){
    console.log('V2 before mount');
  },
  mounted(){
    console.log('V2 mounted');
  },
  beforeUpdate () {
    console.log('V2 before update');
  },
  updated(){
    console.log('V2 updated');
  },
})

</script>
<style scoped>
</style>