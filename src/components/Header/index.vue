<template>
    <div class="header">
        <AsideCollapseSwitch />
        <MenuHomepage class="MenuHomepage" />
        <FullscreenSwitch />
        <DarkModeSwitch class="DarkModeSwitch" />
    </div>
</template>

<script setup lang="ts">
// 菜单折叠开关
import AsideCollapseSwitch from '@/components/AsideCollapseSwitch/index.vue'
// 菜单面包屑
import MenuHomepage from '@/components/MenuHomepage/index.vue'
// 暗黑模式开关
import DarkModeSwitch from '@/components/DarkModeSwitch/index.vue'
// 大屏模式开关
import FullscreenSwitch from '@/components/FullscreenSwitch/index.vue'

</script>

<style scoped>
.header {
    border-bottom: 1px solid var(--el-border-color);
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;

    .MenuHomepage {
        flex: 1;
        padding: 0 20px;
    }

    .DarkModeSwitch {
        margin-left: 20px;
    }
}
</style>