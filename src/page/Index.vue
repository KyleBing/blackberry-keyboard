<template>
    <ShoulderKey/>
    <div class="keyboard" :style="`height: ${keyboardHeight}px; width: ${keyboardWidth}px`">
        <FunctionKey />
        <Divider/>
        <NormalKey/>
        <Divider/>
        <BottomKey/>
    </div>
</template>

<script lang="ts" setup>
import FunctionKey from "./FunctionKey/FunctionKey.vue";
import {keyboardHeight, keyboardWidth} from "./Config.ts";
import NormalKey from "./NormalKey/NormalKey.vue";
import BottomKey from "./BottomKey/BottomKey.vue";
import Divider from "./Divider.vue";

</script>

<style lang="scss" scoped>
@import "../scss/plugin";
.keyboard{
    flex-shrink: 0;
    background-color: $bg-menu;
    box-sizing: content-box;
    padding: 30px;
    overflow: hidden;
    @include border-radius(25px 25px 90px 90px);
    @include box-shadow(20px 20px 15px transparentize(black, 0.8));

    border: 1px solid transparentize(white, 0.5);
    //@include box-shadow(inset 3px 4px 10px transparentize(white, 0.8))
}

</style>
