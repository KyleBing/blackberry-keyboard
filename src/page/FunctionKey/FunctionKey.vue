<template>
    <div class="function-key-wrapper">
        <div class="function-key" :style="functionKeyStyle" >
            <img v-if="keyboardModel === EnumModel.bb9900" :src="SVG_ICONS.key_function.bb9900.call" alt="call">
            <img v-if="keyboardModel === EnumModel.bbq20" :src="SVG_ICONS.key_function.bbq20.call" alt="call">
        </div>
        <div class="function-key" :style="functionKeyStyle" >
            <img v-if="keyboardModel === EnumModel.bb9900" :src="SVG_ICONS.key_function.bb9900.blackberry" alt="blackberry">
            <img v-if="keyboardModel === EnumModel.bbq20" :src="SVG_ICONS.key_function.bbq20.blackberry" alt="blackberry">
        </div>
        <Trackpad/>
        <div class="function-key" :style="functionKeyStyle" >
            <img v-if="keyboardModel === EnumModel.bb9900" :src="SVG_ICONS.key_function.bb9900.back" alt="back">
            <img v-if="keyboardModel === EnumModel.bbq20" :src="SVG_ICONS.key_function.bbq20.back" alt="back">
        </div>
        <div class="function-key" :style="functionKeyStyle" >
            <img v-if="keyboardModel === EnumModel.bb9900" :src="SVG_ICONS.key_function.bb9900.hang_up" alt="hang_up">
            <img v-if="keyboardModel === EnumModel.bbq20" :src="SVG_ICONS.key_function.bbq20.hang_up" alt="hang_up">
        </div>
    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {EnumModel, functionKeyWidth, functionPanelHeight} from "../configKeyboard.ts";
import Trackpad from "./Trackpad.vue";
import SVG_ICONS from "@/assets/icons/SVG_ICONS.ts";

const functionKeyStyle = computed(()=>{
    return `width: ${functionKeyWidth}px; height: ${functionPanelHeight}px`
})

interface Props{
    keyboardModel: EnumModel
}
defineProps<Props>()


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
