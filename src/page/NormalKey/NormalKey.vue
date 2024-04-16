<template>
    <div class="key-line">
        <Key
            :is-right="index >= 5"
            :is-icon-key="key.isIconKey"
            :icon-name="key.iconName"
            :main-key="key.mainKey"
            :secondary-key="key.secondaryKey"
            v-for="(key, index) in KeyMap[0]" :index="key.mainKey"
        />
    </div>
    <Divider/>
    <div class="key-line">
        <Key
            :is-right="index >= 5"
            :main-key="key.mainKey"
            :is-icon-key="key.isIconKey"
            :icon-name="key.iconName"
            :secondary-key="key.secondaryKey"
            v-for="(key, index) in KeyMap[1]" :index="key.mainKey"
        />
    </div>
    <Divider/>
    <div class="key-line">
        <Key
            :is-right="index >= 5"
            :main-key="key.mainKey"
            :is-icon-key="key.isIconKey"
            :icon-name="key.iconName"
            :secondary-key="key.secondaryKey"
            v-for="(key, index) in KeyMap[2]" :index="key.mainKey"
        />
    </div>
</template>

<script lang="ts" setup>
import Key from "./Key.vue";
import Divider from "../Divider.vue";
import {KeyMap} from "../keyMap.ts";


</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.key-line{
    display: flex;
    justify-content: flex-start;
}

</style>
