<template>
  <div>
    <p>姓名： {{name}}</p>
    <p>年龄： {{age}}</p>
    <p>职业： {{person.job[0].name}}</p>
    <p>薪水： {{person.job[0].salary}}</p>
    <button @click="person.age++">click me change age</button>
    <button @click="person.job[0].salary++">click me change salary</button>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs, watchEffect } from 'vue';
export default {
  name: 'toref-demo',
  setup() {
    let person = reactive({
      name: '小张',
      age: 18,
      job: [
        {
          name: '打工',
          salary: 1000
        }
      ]
    })

    // toRef或者toRefs是将复杂对象中的属性拆分成独立的属性，并且依然保持数据关联
    let name = toRef(person, 'name'); // 此时，模板中不需要person.
    let age = toRef(person, 'age');
    
    return {
      person,
      // name,
      // age
      ...toRefs(person), // 返回person的响应式属性，每一个属性都是ref或者proxy
    }
  }
}
</script>
<style scoped>
</style>