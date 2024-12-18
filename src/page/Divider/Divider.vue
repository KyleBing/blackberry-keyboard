<template>
    <div class="divider" :style="dividerStyle"/>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {EnumKeyboardModel} from "@/page/configKeyboard.js";

const dividerStyle = computed(()=>{
    switch (props.keyboardModel){
        case EnumKeyboardModel.bbq10:
            return `width: 102%; margin-left: -1%`
        default:
            break
    }
})

interface Props{
    keyboardModel: EnumKeyboardModel // 显示什么模型的按键
}
const props = defineProps<Props>()


</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.divider{
    pointer-events: none;
    height: 4px;
    width: 100%;
    background-color: white;
    @include border-radius(1px)
}

</style>
