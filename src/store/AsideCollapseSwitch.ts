import { defineStore } from 'pinia'
import { ref } from 'vue'
// 第三个参数: 开启持久化 { persist: true }
export const AsideCollapseSwitch = defineStore('AsideCollapseSwitch', () => {
    // 菜单展示状态
    const isCollapse = ref(true)
    // 切换菜单展示状态
    const changeIsCollapse = () => {
        isCollapse.value = !isCollapse.value
    }

    return { isCollapse, changeIsCollapse }
}, { persist: true })