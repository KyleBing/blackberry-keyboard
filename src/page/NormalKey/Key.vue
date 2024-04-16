<template>
    <div
        :class="['key', {right: isRight}, {left: !isRight}]"
        :style="keyStyle">
        <div class="icon-key" v-if="isIconKey">
            <img v-if="iconName === EnumKeyIconName.backspace"
                 :src="SVG_ICONS.key_normal.backspace" alt="backspace">
            <img v-if="iconName === EnumKeyIconName.enter"
                 :src="SVG_ICONS.key_normal.enter" alt="enter">
            <img v-if="iconName === EnumKeyIconName.alt"
                 :src="SVG_ICONS.key_normal.alt" alt="alt">
        </div>
        <template v-else>
            <div class="main-key">{{ mainKey }}</div>
            <div class="secondary-key">{{ secondaryKey }}</div>
        </template>

    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {normalKeyRatio, keyWidth} from "../configKeyboard.ts";
import {EnumKeyIconName} from "../keyMap.js";
import SVG_ICONS from "@/assets/icons/SVG_ICONS.ts";

interface Props {
    mainKey: string,
    secondaryKey: string,
    isRight: boolean,
    isIconKey: boolean,
    iconName: EnumKeyIconName
}
defineProps<Props>()

const keyStyle = computed(()=>{
    return `width: ${keyWidth}px; height: ${keyWidth * normalKeyRatio}px`
})

</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.key{
    flex-shrink: 0;
    cursor: pointer;
    border-left: 1px solid $bg-color;
    border-right: 1px solid $bg-color;
    color: $text-main;
    position: relative;
    font-family: "SF Pro Display", sans-serif;
    @include border-radius(0);
    @extend .btn-like;
    &.right{
        background: url("../../assets/icons/bg-key/right.svg") no-repeat 100% 100%;
        background-size: cover;
        .secondary-key{
            right: 5px;
        }
        .icon-key{
            padding: 10px 3px 6px 13px;
        }
    }
    &.left{
        background: url("../../assets/icons/bg-key/left.svg") no-repeat 100% 100%;
        background-size: cover;
        .secondary-key {
            left: 5px;
        }
        .icon-key{
            padding: 10px 13px 6px 3px;
        }
    }
    &:active{
        color: white
    }
    .main-key {
        text-align: center;
        width: 100%;
        font-size: $fz-key-main;
        position: absolute;
        left: 0;
        bottom: 5px;
    }
    .secondary-key {
        top: 3px;
        font-size: $fz-key-second;
        position: absolute;
    }
    .icon-key{
        img{
            display: block;
            width: 100%;
        }
    }
}

</style>
