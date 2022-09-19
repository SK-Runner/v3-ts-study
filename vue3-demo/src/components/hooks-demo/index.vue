<template>
  <h2>当前点击时鼠标的坐标为x:{{ point.x }} y:{{ point.y }}</h2>
</template>

<script>// @ts-nocheck

import usePoint from './hooks/usePoint'
export default {
  name: "hooks",
  setup() {
    let point = usePoint();

    return {
      point,
    }
  }
}
</script>