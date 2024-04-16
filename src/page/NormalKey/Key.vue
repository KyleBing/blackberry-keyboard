<template>
    <div
        :class="['key', {right: isRight}, {left: !isRight}]"
        :style="keyStyle">
        <div class="main-key">{{ mainKey }}</div>
        <div class="secondary-key">{{ secondaryKey }}</div>
    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {keyWidth} from "../Config.ts";

interface Props {
    mainKey: string,
    secondaryKey: string,
    isRight: boolean
}
defineProps<Props>()

const keyStyle = computed(()=>{
    return `width: ${keyWidth}px`
})

</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.key{
    cursor: pointer;
    border: 1px solid $color-border;
    width: 50px;
    height: 60px;
    color: transparentize(white, 0.2);
    position: relative;
    font-family: "Galvji", sans-serif;
    @include border-radius(1px);
    @extend .btn-like;
    &.right{
        .secondary-key{
            right: 5px;
        }
    }
    &.left{
        .secondary-key {
            left: 5px;
        }
    }
    .main-key {
        text-align: center;
        width: 100%;
        font-size: 25px;
        position: absolute;
        left: 0;
        bottom: 5px;
    }
    .secondary-key {
        top: 3px;
        font-size: 20px;
        position: absolute;
    }
}

</style>
