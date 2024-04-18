<template>
    <div class="divider">
        <img :src="SVG_ICONS.divider.divider_0" alt="0">
    </div>
</template>

<script lang="ts" setup>
import SVG_ICONS from "@/assets/icons/SVG_ICONS.ts";
</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.divider{
    position: relative;
    z-index: 100;
    height: 40px;
    width: 100%;
    img{
        display: block;
        width: 100%;
    }
}

</style>
