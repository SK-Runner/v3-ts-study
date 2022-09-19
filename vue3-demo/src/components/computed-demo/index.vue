<template>
  <h1>全名拼接</h1>
  姓：<input type="text" name="firstName" v-model="person.firstName"><br>
  名：<input type="text" name="laststName" v-model="person.lastName"><br>
  <p>全名：{{fullName}}</p>
  修改计算属性：<input type="text" name="fullName" v-model="person.fullName">
</template>

<script>// @ts-nocheck

import { computed, reactive } from 'vue';

export default {
  name: 'computedDemo',
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三',
    })

    // 简写形式，此时fullName是只读的
    let fullName = computed(() => {
      return person.firstName + person.lastName
    })

    // @ts-ignore
    person.fullName = computed({
      get() {
        return `${person.firstName}-${person.lastName}`;
      },
      set(value) {
        let arr = value.split('-');
        person.firstName = arr[0];
        person.lastName = arr[1];
      }
    });

    return {
      person,
      fullName
    }
  }
}
</script>
<style scoped>
</style>