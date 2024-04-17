<template>
    <div class="function-key-wrapper" :style="functionKeyWrapperStyle">
        <template v-if="keyboardModel === EnumModel.bb9900">
            <div class="function-key" @click="$emit('switchModel', EnumModel.bbq20)" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bb9900.call" alt="call">
            </div>
            <div class="function-key" @click="$emit('switchModel', EnumModel.bbq10)" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bb9900.blackberry" alt="blackberry">
            </div>
            <Trackpad :is-q10="false"/>
            <div class="function-key" @click="$emit('switchModel', EnumModel.bb9900)" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bb9900.back" alt="back">
            </div>
            <div class="function-key" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bb9900.hang_up" alt="hang_up">
            </div>
        </template>
        <template v-if="keyboardModel === EnumModel.bbq20">
            <div class="function-key" @click="$emit('switchModel', EnumModel.bbq20)" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bbq20.call" alt="call">
            </div>
            <div class="function-key" @click="$emit('switchModel', EnumModel.bbq10)" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bbq20.blackberry" alt="blackberry">
            </div>
            <Trackpad :is-q10="false"/>
            <div class="function-key" @click="$emit('switchModel', EnumModel.bb9900)" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bbq20.back" alt="back">
            </div>
            <div class="function-key" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bbq20.hang_up" alt="hang_up">
            </div>
        </template>
        <template v-if="keyboardModel === EnumModel.bbq10">
            <div class="function-key q10" @click="$emit('switchModel', EnumModel.bbq20)" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bbq10.call" alt="call">
            </div>
            <div class="function-key q10" @click="$emit('switchModel', EnumModel.bbq10)" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bbq10.blackberry" alt="blackberry">
            </div>
            <Trackpad :is-q10="true"/>
            <div class="function-key q10" @click="$emit('switchModel', EnumModel.bb9900)" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bbq10.back" alt="back">
            </div>
            <div class="function-key q10" :style="functionKeyStyle" >
                <img :src="SVG_ICONS.key_function.bbq10.hang_up" alt="hang_up">
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {EnumModel, functionKeyWidth, functionPanelHeight} from "../configKeyboard.ts";
import Trackpad from "./Trackpad.vue";
import SVG_ICONS from "@/assets/icons/SVG_ICONS.ts";

defineEmits(['switchModel'])  // 切换模型事件

const functionKeyStyle = computed(()=>{
    return `width: ${functionKeyWidth}px; height: ${functionPanelHeight}px`
})
const functionKeyWrapperStyle = computed(()=>{
    switch (props.keyboardModel){
        case EnumModel.bbq10:
            return `padding: 0 13px 8px`
        default:
            return `padding: 0`
    }
})

interface Props{
    keyboardModel: EnumModel // 显示什么模型的按键
}
const props = defineProps<Props>()


</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.function-key-wrapper{
    display: flex;
    justify-content: space-between;
}
.function-key{
    flex-grow: 1;
    background-color: black;
    cursor: pointer;
    color: transparentize(white, 0.2);
    position: relative;
    font-family: "Galvji", sans-serif;
    @include border-radius(1px);

    display: flex;
    justify-content: center;
    align-items: center;

    &.q10{
        background-color: transparent;
        img{
            @include border-radius(10px);
            padding: 2px;
            background-color: white;
            display: block;
            width: 64px;
        }
    }

    &:active{
        img{
            @extend .btn-like;
        }
    }
    img{
        display: block;
        width: 42px;
    }
}


</style>
