<template>
    <div>
        <ShoulderKey :is-show-button-name="false"/>
        <div class="keyboard" :style="keyboardStyle">
            <FunctionKey
                @switchModel="switchModel"
                :keyboard-model="currentKeyboardModel" />
            <Divider :keyboard-model="currentKeyboardModel"/>
            <NormalKey :keyboard-model="currentKeyboardModel"/>
            <Divider :keyboard-model="currentKeyboardModel"/>
            <BottomKey/>
        </div>

        <div class="model-name">{{ ModelNameMap.get(currentKeyboardModel) }}</div>
    </div>
</template>

<script lang="ts" setup>
import FunctionKey from "./FunctionKey/FunctionKey.vue";
import {EnumModel, keyboardHeight, keyboardWidth, ModelNameMap} from "./configKeyboard.ts";
import NormalKey from "./NormalKey/NormalKey.vue";
import BottomKey from "./BottomKey/BottomKey.vue";
import Divider from "./Divider.vue";
import ShoulderKey from "./ShoulderKey/ShoulderKey.vue";
import {computed, ref} from "vue";

// 当前模型
const currentKeyboardModel = ref(EnumModel.bbq10)

const keyboardStyle = computed(()=> {
    switch (currentKeyboardModel.value){
        case EnumModel.bbq10:
            return `height: ${keyboardHeight}px; width: ${keyboardWidth}px; padding: 20px 35px 35px` // Q10 的 顶部 5 键有所不同
        default:
            return `height: ${keyboardHeight}px; width: ${keyboardWidth}px`
    }
})

// 切换模型
function switchModel(keyboardModel: EnumModel){
    currentKeyboardModel.value = keyboardModel
}

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

.model-name{
    font-size: 30px;
    margin-top: 40px;
    text-align: center;
    font-weight: bold;
    color: white;
}

</style>
