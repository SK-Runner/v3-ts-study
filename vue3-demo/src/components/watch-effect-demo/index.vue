<template>
  <div>
    <p>sum: {{sum}}</p>
    <button @click="sum++">click me to add 1</button>

    <p>message: {{message}}</p>
    <button @click="message+='!'">change message</button>
    <p>message2: {{message2}}</p>
    <button @click="message2+='@'">change message</button>

    <p>姓名： {{person.name}}</p>
    <p>年龄： {{person.age}}</p>
    <p>职业： {{person.job[0].name}}</p>
    <p>薪水： {{person.job[0].salary}}</p>
    <button @click="person.age++">click me change age</button>
    <button @click="person.job[0].salary++">click me change salary</button>
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue';
export default {
  name: 'watch-demo',
  setup() {
    let sum = ref(0);
    let message = ref('你好')
    let message2 = ref('你好啊')

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

    // 回调里用到哪些属性，就监视哪些
    watchEffect(() => {
      // 没有用到person的age属性
      const x1 = sum.value;
      const x2 = message.value;
      const x3 = message2.value;
      const x4 = person.job[0].salary;
      console.log('watchEffect 回调执行');
    })
    
    return {
      sum,
      message,
      message2,
      person
    }
  }
}
</script>
<style scoped>
</style>