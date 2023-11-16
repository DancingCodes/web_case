<template>
    <template v-if="props.menuItem.meta.menuType === 'menu'">
        <el-sub-menu :index="props.menuItem.path">
            <template #title>
                <span>
                    {{ props.menuItem.meta?.asideName }}
                </span>
            </template>
            <MenuItem v-for="(item, index) in props.menuItem.children" :key="index" v-show="item.meta?.asideShow"
                :menuItem="item" :menuIndex="`${props.menuIndex}/${item.path}`" />
        </el-sub-menu>
    </template>

    <template v-else-if="props.menuItem.meta.menuType === 'group'">
        <el-menu-item-group :title="props.menuItem.meta.asideName" v-show="props.menuItem.meta?.asideShow">
            <MenuItem v-for="(item, index) in props.menuItem.children" :key="index" v-show="item.meta?.asideShow"
                :menuItem="item" :menuIndex="`${props.menuItem.meta.path}/${item.path}`" />
        </el-menu-item-group>
    </template>

    <template v-else>
        <el-menu-item :index="props.menuIndex">
            <!-- <el-icon><i-ep-menu /></el-icon> -->
            <template #title>
                {{ props.menuItem.meta?.asideName }}
            </template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
import MenuItem from "@/components/MenuItem/index.vue"
const props = defineProps(['menuItem', "menuIndex"])
</script>

<style scoped></style>