<template>
  <div>
    <fieldset>
      <legend>原数据</legend>
      firstName: <input type="text" v-model="obj.firstName"><br>
      lastName: <input type="text" v-model="obj.lastName"><br>
    </fieldset>
    <fieldset>
      <legend>computed</legend>
      fullName: <input type="text" v-model="fullName" disabled><br>
    </fieldset>
    <fieldset>
      <legend>watch</legend>
      fullName2: <input type="text" v-model="fullName2"><br>
    </fieldset>
    <fieldset>
      <legend>watchEffect</legend>
      fullName3: <input type="text" v-model="fullName3"><br>
    </fieldset>
    <button @click="stopWatch">停止监听</button>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue'
export default defineComponent({
  name: 'SetupDetailView',
  setup(){
    let obj = reactive({
      firstName: 'Tommy',
      lastName: 'Shelby',
    })
    // 写法一：computed内传入对象，其中有get和set方法
    // let fullName = computed({
    //   get(){
    //     return obj.firstName + '-' + obj.lastName;
    //   },
    //   set(value:string){
    //     console.log(value);
    //     let names = value.split('-');
    //     obj.firstName = names[0];
    //     obj.lastName = names[1];
    //   }
    // })
    // 写法二：computed有两个参数，分别为get和set函数
    let fullName = computed(
      ()=>{
        return obj.firstName + '-' + obj.lastName;
      },
    )


    let fullName2 = ref('');
    /**
     * watch
     * 参数：
     *  来源source：
     *    可以监听ref，直接写入变量名
     *    可以监听reactive对象，监听firstName写法为： () => obj.firstName
     *    多个数据源，将需要监听的数据放入数组中，如[()=>obj.firstName, ()=>obj.lastName]
     *  回调函数：
     *     参数分别为newVal和oldVal，如果有多个数据源，两者都为数据，依次保存更新前后数据
     *  配置对象：
     *    配置deep、immediate等属性
     * 返回值：
     *  返回一个stop函数，在必要时可以手动执行此函数取消监听
     */
    let watchStop = watch([()=>obj.firstName, ()=>obj.lastName],(newVal, oldVal)=>{
      fullName2.value = newVal[0] + '-' + newVal[1];
    },{immediate:true});


    let fullName3 = ref('');
    /**
     * watchEffect
     * 监听所有setup返回的数据
     * 非懒执行
     * 返回stop函数，可以手动停止监听
     */
    let stopWatchEff = watchEffect(() => {
      fullName3.value = obj.firstName + '-' + obj.lastName;
    })

    function stopWatch() {
      watchStop();
      stopWatchEff();
    }

    return {
      obj,
      fullName,
      fullName2,
      fullName3,
      stopWatch
    }
  }
})

</script>
<style scoped>
</style>