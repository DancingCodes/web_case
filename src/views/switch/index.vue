<template>
  <div class="viewBox" :class="[switchState ? 'rightStyle' : 'leftStyle']">
    <div class="switch" @click="changeSwitchState">
      <div class="switchBotton" :class="[switchState ? 'right' : 'left']"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const switchState = ref(false)
const changeSwitchState = (): void => {
  switchState.value = !switchState.value
}
</script>

<style scoped lang="scss">
// 开关宽度
$switchWidth: 100px;
// 开关按钮宽度
$switchButtonWidth: 40px;

.viewBox {
  height: 100%;
  transition: background-color 1s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.leftStyle {
  background-color: white;
}

.rightStyle {
  background-color: black;
}


.switch {
  width: $switchWidth;
  height: 40px;
  border: 1px solid var(--el-border-color);
  border-radius: 40px;
  margin: 0 auto;

  .switchBotton {
    width: $switchButtonWidth;
    height: 100%;
    border-radius: 50%;
    transition: all 1s;
  }

  .left {
    background-color: black;
    transform: translateX(0);
  }

  .right {
    background-color: white;
    transform: translateX(calc($switchWidth - $switchButtonWidth));
  }

}
</style>