<template>
    <div class="normal-key">
        <Divider99000
            :keyboard-model="props.keyboardModel"
            :style="`margin-top: ${PositionMapArray[0].dividerOffset}px;`"/>
        <div class="key-line"
             :style="`margin-top: ${PositionMapArray[0].offset}px;`">
            <Key
                :keyboard-model="props.keyboardModel"
                :margin-top="keyMarginTop(0, index)"
                :is-right="index >= 5"
                :is-icon-key="key.isIconKey"
                :icon-name="key.iconName"
                :main-key="key.mainKey"
                :secondary-key="key.secondaryKey"
                v-for="(key, index) in KeyMap[0]" :index="key.mainKey"
            />
        </div>
        <Divider99001
            :keyboard-model="props.keyboardModel"
            :style="`margin-top: ${PositionMapArray[1].dividerOffset}px;`"/>
        <div class="key-line"
             :style="`margin-top: ${PositionMapArray[1].offset}px;`">
            <Key
                :keyboard-model="props.keyboardModel"
                :margin-top="keyMarginTop(1, index)"
                :is-right="index >= 5"
                :main-key="key.mainKey"
                :is-icon-key="key.isIconKey"
                :icon-name="key.iconName"
                :secondary-key="key.secondaryKey"
                v-for="(key, index) in KeyMap[1]" :index="key.mainKey"
            />
        </div>
        <Divider99002
            :keyboard-model="props.keyboardModel"
            :style="`margin-top: ${PositionMapArray[2].dividerOffset}px;`"/>
        <div class="key-line"
             :style="`margin-top: ${PositionMapArray[2].offset}px;`">
            <Key
                :keyboard-model="props.keyboardModel"
                :margin-top="keyMarginTop(2, index)"
                :is-right="index >= 5"
                :main-key="key.mainKey"
                :is-icon-key="key.isIconKey"
                :icon-name="key.iconName"
                :secondary-key="key.secondaryKey"
                v-for="(key, index) in KeyMap[2]" :index="key.mainKey"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Key from "../Key.vue";
import Divider from "../../Divider/Divider.vue";
import {KeyMap} from "../../keyMap.ts";
import {EnumKeyboardModel} from "@/page/configKeyboard.js";
import Divider99001 from "@/page/Divider/Divider9900-1.vue";
import Divider99002 from "@/page/Divider/Divider9900-2.vue";
import Divider99003 from "@/page/Divider/Divider9900-3.vue";
import {computed} from "vue";
import Divider99000 from "@/page/Divider/Divider9900-0.vue";

interface Props{
    keyboardModel: EnumKeyboardModel // 显示什么模型的按键
}
const props = defineProps<Props>()

function keyMarginTop (lineNum: number, index: number){
    return PositionMapArray[lineNum].keyPos[index] * 5
}

// 键盘布局
const PositionMapArray = [
    {offset: -30, dividerOffset: -25, keyPos: [0.7, 2.2,   3,   4, 4.8, 4.8,   4,   3, 2.2, 0.7],},
    {offset: -28, dividerOffset: -28, keyPos: [0, 1.6, 2.5, 3.5, 4, 4, 3.5, 2.5, 1.6, 0],},
    {offset: -28, dividerOffset: -22, keyPos: [0, 1,   2,   2.5, 3, 3,   2.5,   2, 1, 0],},
]


</script>

<style lang="scss" scoped>
@import "../../../scss/plugin";
.normal-key{
    @include border-radius(0 0 70px 70px);  // 为了让键盘背景为黑色，同时避免边角露出
    background-color: black; // 键盘背景：黑色
}
.key-line{
    display: flex;
    justify-content: flex-start;
}

</style>
