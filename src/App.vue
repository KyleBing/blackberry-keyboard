<template>
    <router-view/>
</template>
<script lang="ts" setup>
import {useProjectStore} from "./pinia";
const storeProject = useProjectStore()
import {onBeforeMount, onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()

onBeforeMount(() => {
    // 日记项目载入后，隐藏 preloading
    (document.querySelector('.preloading') as HTMLDivElement).style.display = 'none'

    // 获取当前颜色模式
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        storeProject.colorMode = 'dark'
    } else {
        storeProject.colorMode = 'dark'
    }

    // 颜色模式监听
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        storeProject.colorMode = event.matches ? "dark" : "light"
    })
})


onMounted(()=> {
    window.onresize = () => {
        storeProject.insets = {
            windowsHeight: document.documentElement.clientHeight,
            windowsWidth: document.documentElement.clientWidth,
            heightPanel: document.documentElement.clientHeight - 45, // 除 navbar 的高度
        }
        if (storeProject.isInMobileMode){

        } else {
            if (route.name === 'List'){
                router.push({
                    name: 'EditNew'
                })
            }
        }
    }
})
</script>

<style lang="scss">
@import "scss/main";
</style>

