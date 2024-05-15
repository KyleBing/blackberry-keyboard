<template>
    <div class="container">
        <router-view/>
    </div>
    <div class="github-link">
        <a href="https://github.com/KyleBing/blackberry-keyboard">github</a>
    </div>
</template>
<script lang="ts" setup>
import {useProjectStore} from "./pinia";
const storeProject = useProjectStore()
import {onBeforeMount, onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()

onBeforeMount(() => {
    // 项目载入后，隐藏 preloading
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
.container{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.github-link{
    position: fixed;
    bottom: 10px;
    right: 10px;
    a{
        font-size: 12px;
        text-decoration: underline;
        color: white;
    }
}
</style>

