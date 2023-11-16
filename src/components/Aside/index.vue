<template>
    <el-menu class="elMenu" :collapse="isCollapse" :default-active="defaultActive" :router="true">
        <div class="menuHeader">
            <h3 style="text-align: center;">
                Menu
            </h3>
        </div>
        <MenuItem v-for="(item, index) in routes" :key="index" v-show="item.meta?.asideShow" :menuItem="item"
            :menuIndex="item.path" />
    </el-menu>
</template>
  
<script lang="ts" setup>
import { watch } from 'vue'
import MenuItem from "@/components/MenuItem/index.vue"
import { storeToRefs } from 'pinia'


// 菜单状态
import { AsideCollapseSwitch } from '@/store/AsideCollapseSwitch.ts'
const { isCollapse } = storeToRefs(AsideCollapseSwitch())


// 默认选中菜单
import router from '@/router/index.ts'
const routes = router.options.routes
// 首次进入获取UrlPath,如果匹配到菜单就设置默认选中
const routePath = window.location.pathname
const defaultActive = routes.find(item => item.path === routePath)?.path


// 切换列表时设置菜单面包屑
import { MenuHomepage } from '@/store/MenuHomepage.ts'
const { setMenuHomepageList } = MenuHomepage()
import { useRoute } from "vue-router"
let route = useRoute()
watch(route, (newValue) => {
    setMenuHomepageList(newValue.matched)
})

</script>

<style scoped lang="scss">
.elMenu {
    height: 100%;
    overflow-y: scroll;

    .menuHeader {
        position: relative;

        .collapseIcon {
            position: absolute;
            right: 0;
            top: 0;
        }
    }
}

.elMenu:not(.el-menu--collapse) {
    width: 200px;
}
</style>