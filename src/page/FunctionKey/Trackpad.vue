<template>
    <div :class="['track-pad-wrapper', {q10: isQ10}]" :style="trackpadWrapperStyle">
        <div class="track-pad" :style="trackpadKeyStyle"></div>
    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {functionPanelHeight, trackPadWidth} from "../configKeyboard.ts";

interface Props{
    isQ10: boolean
}
const props = defineProps<Props>()

const trackpadKeyStyle = computed(()=>{
    if (props.isQ10){
        return `width: ${trackPadWidth + 8}px; height: ${trackPadWidth + 8}px; border-radius: 15px; -webkit-border-radius: 15px`
    } else {
        return `width: ${trackPadWidth}px; height: ${trackPadWidth}px`
    }
})
const trackpadWrapperStyle = computed(()=>{
    return `width: ${functionPanelHeight * 1.3}px;height: ${functionPanelHeight}px`
})

</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.track-pad-wrapper{
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    &.q10{
        background-color: transparent;
    }
    &:active{
        .track-pad{
            @extend .btn-like;
        }
    }
}
.track-pad{
    background-color: black;
    cursor: pointer;
    border: 3px solid $color-border;
    @include border-radius(13px);
}

</style>
