import { defineStore } from 'pinia'
import { ref } from 'vue'
// 第三个参数: 开启持久化 { persist: true }
export const MenuHomepage = defineStore('MenuHomepage', () => {
    // 菜单面包屑列表
    const menuHomepageList: any = ref([])
    // 设置菜单面包屑列表
    const setMenuHomepageList = (MenuHomepageList: any) => {
        menuHomepageList.value = MenuHomepageList
    }

    return { menuHomepageList, setMenuHomepageList }
}, { persist: true })