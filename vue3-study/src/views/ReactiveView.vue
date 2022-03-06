<template>
  <div>
    <h2 @click="lifeChange">{{time}}</h2>
    <p>{{person.name}}{{person.age}}岁时的老婆是{{person.wife.name}}，开的车是{{person.car[0]}}</p>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'ReactiveView',
  setup() {
    let flag = ref(false);

    let time = ref('十年前');

    const obj = {
      name: '老王',
      age: 25,
      wife: {
        name: '小王'
      },
      car: ['奥拓']
    };

    let person = reactive(obj);

    function lifeChange() {
      flag.value = !flag.value;
      if(flag.value) {
        person.age += 10;
        person.wife.name = '小刘',
        person.car[0] = '奥迪'
        time.value = '十年后'
      }else{
        person.age -= 10;
        person.wife.name = '小王',
        person.car[0] = '奥拓'
        time.value = '十年前'
      }
    }

    return {
      time,
      person,
      lifeChange
    }
  },
}

</script>