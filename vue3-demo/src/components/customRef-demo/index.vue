<template>
  <div>
    <input type="text" v-model="text">
    <h2>{{text}}</h2>
  </div>
</template>

<script>
import { trigger } from '@vue/reactivity';
import { customRef } from 'vue';

export default {
  name: 'App',
  setup() {

    function myRef(value) {
      return customRef((track, trigger) => {
        return {
          get() {
            console.log('读取数据', value);
            track(); // 通知vue追踪value的变化
            return value;
          },
          set(newVal) {
            console.log('更新数据', newVal);
            value = newVal;
            trigger(); // 通知vue重新解析模板
          }
        }
      })
    }

    const text = myRef('hello')

    return {
      text
    }
  }
}
</script>