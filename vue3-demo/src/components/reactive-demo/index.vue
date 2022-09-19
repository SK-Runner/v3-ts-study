<template>
  <h1>APP component</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工作：{{job.type}}</h2>
  <h2>工作：{{job.salary}}</h2>
  <h2>爱好： {{hobby.join(',')}}</h2>
  <button @click="changeInfo">update info</button>
</template>

<script>
  import { ref, reactive } from "vue";
  export default {
    name: 'App',

    setup() {
      let name = ref('张三');
      let age = ref(28);
      let job = reactive({
        type: 'frontend',
        salary: '30k'
      })
      let hobby = reactive(['smock', 'drink', 'play']);

      function sayHello() {
        alert(`my name is ${name}, and I'm ${age} years old!`)
      }

      function changeInfo() {
        name.value = '里斯';
        age.value = 27;
        job.type = 'UI';
        job.salary = '60K';
        hobby[0] = 'study'
      }

      // return 普通对象
      return {
        name,
        age,
        job,
        hobby,
        sayHello,
        changeInfo
      }
    }
  }
</script>
