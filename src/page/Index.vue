<template>
    <div class="keyboard" :style="`height: ${keyboardHeight}px; width: ${keyboardWidth}px`">
        <FunctionKey />
        <NormalKey/>
    </div>
</template>

<script lang="ts" setup>
import FunctionKey from "./FunctionKey/FunctionKey.vue";
import {keyboardHeight, keyboardWidth} from "./Config.ts";
import NormalKey from "./NormalKey/NormalKey.vue";

</script>

<style lang="scss" scoped>
@import "../scss/plugin";
.keyboard{
    padding: 20px;
    overflow: hidden;
    @include border-radius(20px 20px 50px 50px);
    background-color: black;
    border: 1px solid $color-border;
}

</style>
