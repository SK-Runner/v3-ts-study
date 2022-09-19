import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive } from 'vue';

export default function () {
  let point = reactive({
    x: 0,
    y:0
  })

  function getPoint(e) {
    point.x = e.pageX;
    point.y = e.pageY;
  }

  onMounted(() => {
    window.addEventListener('click', getPoint)
  })

  onUnmounted(() => {
    window.removeEventListener('click', getPoint)
  })

  // 必须返回响应式数据，供setup使用
  return point;
}