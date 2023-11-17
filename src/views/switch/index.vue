<template>
  <div class="viewBox" :class="[switchState ? 'rightStyle' : 'leftStyle']">
    <div class="switch" @click="changeSwitchState">
      <div class="switchBotton" :class="[switchState ? 'right' : 'left']">
        <div class="round" :class="[switchState ? 'openRound' : 'closeRound']"></div>
      </div>
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
$switchWidth: 200px;
// 开关高度
$switchHeight: calc($switchWidth / 2);
// 关闭时颜色
$closeColor: white;
// 开启时颜色
$openColor: black;

.viewBox {
  height: 100%;
  transition: background-color 1s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.leftStyle {
  background-color: $closeColor;
}

.rightStyle {
  background-color: $openColor;
}


.switch {
  width: $switchWidth;
  height: $switchHeight;
  border: 2px solid var(--el-border-color);
  border-radius: $switchHeight;
  margin: 0 auto;
  overflow: hidden;

  .switchBotton {
    width: $switchHeight;
    height: 100%;
    border-radius: 50%;
    transition: all 1s;

    .round {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: all 1s;
    }

    .closeRound {
      transform: translate(-100%, -100%);
      background-color: $closeColor;
    }

    .openRound {
      transform: translate(-36%, -36%);

      background-color: $openColor;
    }
  }

  .left {
    background-color: $openColor;
    transform: translateX(0);
  }

  .right {
    background-color: $closeColor;
    transform: translateX(calc($switchWidth - $switchHeight));
  }

}
</style>