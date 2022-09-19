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
import { reactive, ref, watch } from 'vue';
export default {
  name: 'watch-demo',
  setup() {
    let sum = ref(0);
    // 监听ref定义的响应式数据
    watch(sum, (newVal, oldVal) => {
      console.log('监听sum变化',newVal, oldVal);
    })

    // 监视ref定义的多个响应式数据
    let message = ref('你好')
    let message2 = ref('你好啊')
    // 监听的目标放进数组中，回调的val也是一个数组，分别对应监听对象的新旧数据
    watch([message, message2], (newVal, oldVal) => {
      console.log('监听message或message2的变化',newVal, oldVal);
    })

    // 监听对象
    // 问题1:newVal和oldVal都一样（都是最新的数据）
    // 问题2:强制开启深度监听，配置无效
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
    watch(person, (newVal, oldVal) => {
      console.log('监听person的变化',newVal, oldVal);
    }, { immediate: true, deep: false })

    // 监听某个对象属性, 参数必须函数的返回值
    watch(() => person.age, (newVal, oldVal) => {
      console.log('监听person.age的变化',newVal, oldVal);
    })

    // 监听对象中多个属性, 监听的属性放入数组
    watch([() => person.age, () => person.name], (newVal, oldVal) => {
      console.log('监听person.age或person.name的变化', newVal, oldVal);
    });

    // 监听对象中复杂类型的属性，deep配置有效，deep默认false
    watch(() => person.job, (newVal, oldVal) => {
      console.log('监听person.job的变化', newVal, oldVal); // 不输出
    });

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