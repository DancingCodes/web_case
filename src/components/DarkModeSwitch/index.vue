<template>
    <el-icon @click="toggleDark()">
        <el-icon size="20">
            <i-ep-Moon v-if="isDark" />
            <i-ep-Sunny v-if="!isDark" />
        </el-icon>
    </el-icon>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped lang="scss"></style>