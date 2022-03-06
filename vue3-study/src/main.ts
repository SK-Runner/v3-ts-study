// 1、vue3引入createApp，创建应用，产生应用的实例对象
import { createApp } from 'vue'
// 2、引入App组件，是所有组父的符组件
import App from './App.vue'
import router from './router'
import store from './store'
// 3、抛开use()，创建App应用，返回对应实例对象，再调用mount方法进行挂载
createApp(App).use(store).use(router).mount('#app')
