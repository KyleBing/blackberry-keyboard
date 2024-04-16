<template>
    <div
        :class="['key', {right: isRight}, {left: !isRight}]"
        :style="keyStyle">
        <div class="icon-key" v-if="isIconKey">
            <img v-if="iconName=== 'backspace'"
                 src="../../assets/normal-key/backspace.svg" alt="backspace">
            <img v-if="iconName=== 'enter'"
                 src="../../assets/normal-key/enter.svg" alt="enter">
            <img v-if="iconName=== 'alt'"
                 src="../../assets/normal-key/alt.svg" alt="alt">
        </div>
        <template v-else>
            <div class="main-key">{{ mainKey }}</div>
            <div class="secondary-key">{{ secondaryKey }}</div>
        </template>

    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {normalKeyRatio, keyWidth} from "../Config.ts";

interface Props {
    mainKey: string,
    secondaryKey: string,
    isRight: boolean,
    isIconKey: boolean,
    iconName: string
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
        background: url("../../assets/bg-key/right.svg") no-repeat 100% 100%;
        background-size: cover;
        .secondary-key{
            right: 5px;
        }
        .icon-key{
            padding: 10px 3px 6px 13px;
        }
    }
    &.left{
        background: url("../../assets/bg-key/left.svg") no-repeat 100% 100%;
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
