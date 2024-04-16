<template>
    <div class="key-line"
         v-for="(keyLine, lineIndex) in KeyMap" :key="lineIndex">
        <Key
            :is-right="index > 5"
            :main-key="key.mainKey"
            :secondary-key="key.secondaryKey"
            v-for="(key, index) in keyLine" :index="key.mainKey"
        />
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Key from "./Key.vue";


interface KeyEntity{
    mainKey: string,
    secondaryKey: string
}

const KeyMap = ref<Array<Array<KeyEntity>>>([
    [
        {mainKey: 'Q', secondaryKey: '#'},
        {mainKey: 'W', secondaryKey: '1'},
        {mainKey: 'E', secondaryKey: '2'},
        {mainKey: 'R', secondaryKey: '3'},
        {mainKey: 'T', secondaryKey: '('},
        {mainKey: 'Y', secondaryKey: ')'},
        {mainKey: 'U', secondaryKey: '_'},
        {mainKey: 'I', secondaryKey: '-'},
        {mainKey: 'O', secondaryKey: '+'},
        {mainKey: 'P', secondaryKey: '@'},
    ],
    [
        {mainKey: 'A', secondaryKey: '*'},
        {mainKey: 'S', secondaryKey: '4'},
        {mainKey: 'D', secondaryKey: '5'},
        {mainKey: 'F', secondaryKey: '6'},
        {mainKey: 'G', secondaryKey: '/'},
        {mainKey: 'H', secondaryKey: ':'},
        {mainKey: 'J', secondaryKey: ';'},
        {mainKey: 'K', secondaryKey: '\''},
        {mainKey: 'L', secondaryKey: '"'},
        {mainKey: '←', secondaryKey: ''},
    ],
    [
        {mainKey: 'Alt', secondaryKey: ''},
        {mainKey: 'Z', secondaryKey: '7'},
        {mainKey: 'X', secondaryKey: '8'},
        {mainKey: 'C', secondaryKey: '9'},
        {mainKey: 'V', secondaryKey: '?'},
        {mainKey: 'B', secondaryKey: '!'},
        {mainKey: 'N', secondaryKey: ','},
        {mainKey: 'M', secondaryKey: '.'},
        {mainKey: '$', secondaryKey: ''},
        {mainKey: '↙', secondaryKey: ''},
    ],
])


</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.key-line{
    display: flex;
    justify-content: flex-start;
}

</style>
