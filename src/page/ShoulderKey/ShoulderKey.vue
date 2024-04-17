<template>
    <div class="shoulder-key-wrapper" :style="WrapperStyle">
        <div class="shoulder-key" v-if="isShowButtonName">鼠标左键</div>
        <div class="shoulder-key-no-title" v-else/>
        <div class="switch"></div>
        <div class="shoulder-key" v-if="isShowButtonName">鼠标右键</div>
        <div class="shoulder-key-no-title" v-else/>

    </div>
</template>

<script lang="ts" setup>

import {computed} from "vue";

interface Props{
    isShowButtonName: boolean // 是否显示肩按键名字
}
const props = defineProps<Props>()

const WrapperStyle = computed(()=>{
    return props.isShowButtonName? `padding: 0 70px` : `padding: 0 100px`
})

</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
$height-button: 6px;
.shoulder-key-wrapper{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .shoulder-key{
        font-size: $fz-main;
        color: $text-main;
        padding: 5px 15px 0;
        border: 1px solid $border-keyboard;
        border-bottom: none;
        height: 30px;
        background-color: $bg-keyboard;
        @include border-radius(10px 10px 0 0 );
        @include box-shadow(10px 4px 15px transparentize(black, 0.8));
        &.left{

        }
        &.right{

        }
    }
    .shoulder-key-no-title{
        background-color: $bg-keyboard;
        border: 1px solid $border-keyboard;
        border-bottom: none;
        width: 30px;
        height: $height-button;
        @include border-radius(10px 10px 0 0)
    }
    .switch{
        bottom: 0;
        right: 200px;
        position: absolute;
        height: $height-button;
        width: 30px;
        background-color: $red;
    }
}

</style>
