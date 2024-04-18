<template>
    <div class="track-pad-wrapper" :style="trackpadWrapperStyle">
        <div class="track-pad" :style="trackpadKeyStyle">
            <img :src="SVG_ICONS.trackpad.bb9900" alt="trackpad">
        </div>
    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {EnumKeyboardModel, functionPanelHeight, trackPadWidth} from "../configKeyboard.ts";
import SVG_ICONS from "@/assets/icons/SVG_ICONS.ts";

interface Props{
    keyboardModel: EnumKeyboardModel
}
const props = defineProps<Props>()

const trackpadKeyStyle = computed(()=>{
    switch (props.keyboardModel){
        case EnumKeyboardModel.bbq10:
            return `width: ${trackPadWidth + 8}px; height: ${trackPadWidth + 8}px; border-radius: 15px; -webkit-border-radius: 15px`
        case EnumKeyboardModel.bb9900:
            return `width: ${trackPadWidth + 10}px; height: ${trackPadWidth + 10}px; border-width: 4px; margin-top: 5px; border-radius: 15px; -webkit-border-radius: 18px`
        case EnumKeyboardModel.bbq20:
            return `width: ${trackPadWidth}px; height: ${trackPadWidth}px`
        default:
            return ''
    }
})
const trackpadWrapperStyle = computed(()=>{
    switch (props.keyboardModel){
        case EnumKeyboardModel.bbq10:
            return `width: ${functionPanelHeight * 1.3}px; height: ${functionPanelHeight}px; background: transparent`
        default:
            return `width: ${functionPanelHeight * 1.3}px; height: ${functionPanelHeight}px`
    }

})

</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.track-pad-wrapper{
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active{
        .track-pad{
            @extend .btn-like;
        }
    }
}
.track-pad{
    background-color: black;
    cursor: pointer;
    //border: 3px solid $color-border;
    //@include border-radius(13px);
    img{
        display: block;
        width: 100%;
    }
}

</style>
