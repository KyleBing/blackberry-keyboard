<template>
    <div class="track-pad-wrapper" :style="trackpadWrapperStyle">
        <div class="track-pad" :style="trackpadKeyStyle"></div>
    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {functionPanelHeight, trackPadWidth} from "../Config.ts";

const trackpadKeyStyle = computed(()=>{
    return `width: ${trackPadWidth}px;height: ${trackPadWidth}px`
})
const trackpadWrapperStyle = computed(()=>{
    return `width: ${functionPanelHeight}px;height: ${functionPanelHeight}px`
})

</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.track-pad-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}
.track-pad{
    border: 3px solid $color-border;
    @include border-radius(13px);
}

</style>
