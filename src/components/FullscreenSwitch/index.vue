<template>
    <el-icon @click="toggle()">
        <el-icon size="20">
            <i-ep-FullScreen />
        </el-icon>
    </el-icon>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen();
</script>

<style scoped lang="scss"></style>