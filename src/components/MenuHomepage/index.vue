<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in menuHomepageList" :key="index">
            {{ item.meta.asideName }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
// 菜单面包屑
import { MenuHomepage } from '@/store/MenuHomepage.ts'
const { menuHomepageList } = storeToRefs(MenuHomepage())
</script>

<style scoped></style>