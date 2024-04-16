<template>
    <div class="bottom-key-wrapper" :style="`padding: 0 ${keyWidth}px`">
        <div class="bottom-key left" :style="bottomKeyStyle" >
            <img src="../../assets/bottom-key/shift.svg" alt="call">
        </div>
        <div class="bottom-key left zero" :style="bottomKeyStyle" >
            <div class="main-key">0</div>
        </div>
        <div class="space-key" :style="spaceKeyStyle">
            <img src="../../assets/bottom-key/space.svg" alt="space">
        </div>
        <div class="bottom-key sym right" :style="bottomKeyStyle" >
            <img src="../../assets/bottom-key/sym.svg" alt="sym">
        </div>
        <div class="bottom-key right" :style="bottomKeyStyle" >
            <img src="../../assets/bottom-key/shift.svg" alt="shift">
        </div>
    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {normalKeyRatio, keyWidth} from "../configKeyboard.ts";

const bottomKeyStyle = computed(()=>{
    return `width: ${keyWidth * 1.2}px; height: ${keyWidth * normalKeyRatio}px`
})
const spaceKeyStyle = computed(()=>{
    return `width: ${keyWidth * (8-1.2*4)}px; height: ${keyWidth * normalKeyRatio}px`
})

</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.bottom-key-wrapper{
    display: flex;
    justify-content: space-between;
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
        background: url("../../assets/bg-key/left.svg") no-repeat;
        background-size: cover;
    }
    &.right{
        background: url("../../assets/bg-key/right.svg") no-repeat;
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
