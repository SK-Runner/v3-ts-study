<template>
  <h1>APP component</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工作：{{job.type}}</h2>
  <h2>工作：{{job.salary}}</h2>
  <button @click="changeInfo">update info</button>
</template>

<script>
  import { ref } from "vue";
  export default {
    name: 'RefDemo',

    setup() {
      let name = ref('张三');
      let age = ref(28);
      let job = ref({
        type: 'frontend',
        salary: '30k'
      })

      function sayHello() {
        alert(`my name is ${name}, and I'm ${age} years old!`)
      }

      function changeInfo() {
        name.value = '里斯';
        age.value = 27;
        job.value.type = 'UI';
        job.value.salary = '60K'
      }

      // return 普通对象
      return {
        name,
        age,
        job,
        sayHello,
        changeInfo
      }
    }
  }
</script>
