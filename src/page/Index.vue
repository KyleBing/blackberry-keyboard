<template>
    <div>
        <ShoulderKey :is-show-button-name="false"/>
        <div class="keyboard" :style="keyboardStyle">
            <FunctionKey :keyboard-model="keyboardModel" />
            <Divider :keyboard-model="keyboardModel"/>
            <NormalKey :keyboard-model="keyboardModel"/>
            <Divider :keyboard-model="keyboardModel"/>
            <BottomKey/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FunctionKey from "./FunctionKey/FunctionKey.vue";
import {EnumModel, keyboardHeight, keyboardWidth} from "./configKeyboard.ts";
import NormalKey from "./NormalKey/NormalKey.vue";
import BottomKey from "./BottomKey/BottomKey.vue";
import Divider from "./Divider.vue";
import ShoulderKey from "./ShoulderKey/ShoulderKey.vue";
import {computed, ref} from "vue";

const keyboardModel = ref(EnumModel.bbq10)  // 什么模型

const keyboardStyle = computed(()=> {
    switch (keyboardModel.value){
        case EnumModel.bbq10:
            return `height: ${keyboardHeight}px; width: ${keyboardWidth}px; padding: 20px 35px 35px` // Q10 的 顶部 5 键有所不同
        default:
            return `height: ${keyboardHeight}px; width: ${keyboardWidth}px`
    }
})

</script>

<style lang="scss" scoped>
@import "../scss/plugin";
.keyboard{
    flex-shrink: 0;
    background-color: $bg-keyboard;
    box-sizing: content-box;
    padding: 30px;
    overflow: hidden;
    @include border-radius(25px 25px 90px 90px);
    @include box-shadow(20px 20px 15px transparentize(black, 0.8));

    border: 1px solid $border-keyboard;
    //@include box-shadow(inset 3px 4px 10px transparentize(white, 0.8))
}

</style>
