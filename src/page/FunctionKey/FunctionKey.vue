<template>
    <div class="function-key-wrapper">
        <div class="function-key" :style="functionKeyStyle" >
            <img src="../../assets/function-button/call.svg" alt="call">
        </div>
        <div class="function-key" :style="functionKeyStyle" >
            <img src="../../assets/function-button/blackberry.svg" alt="blackberry">
        </div>
        <Trackpad/>
        <div class="function-key" :style="functionKeyStyle" >
            <img src="../../assets/function-button/back.svg" alt="back">
        </div>
        <div class="function-key" :style="functionKeyStyle" >
            <img src="../../assets/function-button/hang_up.svg" alt="hang_up">
        </div>
    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {functionPanelHeight, functionKeyWidth, trackPadWidth} from "../Config.ts";
import Trackpad from "./Trackpad.vue";

const functionKeyStyle = computed(()=>{
    return `width: ${functionKeyWidth}px; height: ${functionPanelHeight}px`
})

</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.function-key-wrapper{
    display: flex;
    justify-content: space-between;
}
.function-key{
    cursor: pointer;
    color: transparentize(white, 0.2);
    position: relative;
    font-family: "Galvji", sans-serif;
    @include border-radius(1px);
    @extend .btn-like;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        display: block;
        width: 50px;
    }
}


</style>
