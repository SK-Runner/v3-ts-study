<template>
  <h1>APP component</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">say</button>
</template>

<script>
import { h } from 'vue'
export default {
  name: 'SetUpDemo',

  setup() {
    let name = '张三'
    let age = 18

    function sayHello() {
      alert(`my name is ${name}, and I'm ${age} years old!`)
    }

    // return 普通对象
    // return {
    //   name,
    //   age,
    //   sayHello,
    // }

    // 返回渲染函数
    return () => h('h1', '渲染函数')
  }
}
</script>
