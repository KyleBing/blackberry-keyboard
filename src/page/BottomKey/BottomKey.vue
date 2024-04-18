<template>
    <div class="bottom-key-panel" :style="`padding: 0 ${keyWidth}px`">
        <div class="bottom-key-wrapper">
            <div class="bottom-key left" :style="bottomKeyStyle" >
                <img :src="SVG_ICONS.key_bottom.shift" alt="shift">
            </div>
            <div class="bottom-key left zero" :style="bottomKeyStyle" >
                <div class="main-key">0</div>
            </div>
            <div class="space-key" :style="spaceKeyStyle">
                <img :src="SVG_ICONS.key_bottom.space" alt="space">
            </div>
            <div class="bottom-key sym right" :style="bottomKeyStyle" >
                <img :src="SVG_ICONS.key_bottom.sym" alt="sym">
            </div>
            <div class="bottom-key right" :style="bottomKeyStyle" >
                <img :src="SVG_ICONS.key_bottom.shift" alt="shift">
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import {computed} from "vue";
import {keyWidth, bottomKeyRatio} from "../configKeyboard.ts";
import SVG_ICONS from "@/assets/icons/SVG_ICONS.ts";

const bottomKeyStyle = computed(()=>{
    return `width: ${keyWidth * 1.2}px; height: ${keyWidth * bottomKeyRatio}px`
})
const spaceKeyStyle = computed(()=>{
    return `width: ${keyWidth * (8-1.2*4)}px; height: ${keyWidth * bottomKeyRatio}px`
})

</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.bottom-key-wrapper{
    //background-color: black;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    -webkit-mask-image: url("../../assets/icons/bg-function-key.svg");
    mask-image: url("../../assets/icons/bg-function-key.svg");
}
.bottom-key{
    flex-shrink: 0;
    border: 1px solid $bg-color;
    cursor: pointer;
    color: transparentize(white, 0.2);
    position: relative;
    font-family: "Galvji", sans-serif;
    @include border-radius(1px);
    @extend .btn-like;
    display: flex;
    justify-content: center;
    align-items: center;
    &.left{
        background: url("../../assets/icons/bg-key/left.svg") no-repeat;
        background-size: cover;
    }
    &.right{
        background: url("../../assets/icons/bg-key/right.svg") no-repeat;
        background-size: cover;
    }
    &.zero{
        .main-key{
            padding-top: 5px;
            padding-right: 8px;
        }
    }
    &.sym{
        padding: 5px 3px 4px 13px;
    }
    img{
        position: absolute;
        display: block;
        width: 30px;
    }
    &:first-child{
        @include border-radius(0 0 0 40px );
        img{
            left: 12px;
            top: 6px;
        }
    }
    &:last-child{
        @include border-radius(0 0 40px 0);
        img{
            right: 12px;
            top: 6px;
        }
    }
    .main-key{
        font-size: $fz-key-main;
    }

}
.space-key{
    @extend .btn-like;
    flex-shrink: 0;
    background-color: black;
    border: 1px solid $bg-color;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        display: block;
        width: 80px;
    }
}

</style>
