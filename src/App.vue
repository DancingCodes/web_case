<template>
  <div class="app">
    <Aside />
    <div class="rightContent">
      <Header />
      <div class="main">
        <Main />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Aside from "@/components/Aside/index.vue";
import Header from "@/components/Header/index.vue";
import Main from "@/components/Main/index.vue";
</script>
<style lang="scss" scoped>
.app {
  height: 100vh;
  display: flex;

  .rightContent {
    flex: 1;
    display: flex;
    flex-direction: column;

    .main {
      position: relative;
      padding: 10px;
      flex: 1;
      overflow-y: scroll;
    }
  }
}
</style>