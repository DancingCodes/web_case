<template>
    <el-icon @click="changeIsCollapse()">
        <el-icon size="20">
            <i-ep-DArrowRight v-if="isCollapse" />
            <i-ep-DArrowLeft v-if="!isCollapse" />
        </el-icon>
    </el-icon>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { AsideCollapseSwitch } from '@/store/AsideCollapseSwitch.ts'
const { isCollapse } = storeToRefs(AsideCollapseSwitch())
const { changeIsCollapse } = AsideCollapseSwitch()
</script>

<style scoped lang="scss"></style>