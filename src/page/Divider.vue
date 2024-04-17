<template>
    <div class="divider" :style="dividerStyle"/>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {EnumModel} from "@/page/configKeyboard.ts";

const dividerStyle = computed(()=>{
    switch (props.keyboardModel){
        case EnumModel.bbq10:
            return `width: 102%; margin-left: -1%`
        default:
            break
    }
})

interface Props{
    keyboardModel: EnumModel // 显示什么模型的按键
}
const props = defineProps<Props>()


</script>

<style lang="scss" scoped>
@import "../scss/plugin";
.divider{
    height: 4px;
    width: 100%;
    background-color: white;
}

</style>
