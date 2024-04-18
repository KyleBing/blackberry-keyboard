<template>
   <div class="normal-key">
       <Divider :keyboard-model="props.keyboardModel"/>
       <div class="key-line">
           <Key
               :keyboard-model="props.keyboardModel"
               :is-right="index >= 5"
               :is-icon-key="key.isIconKey"
               :icon-name="key.iconName"
               :main-key="key.mainKey"
               :secondary-key="key.secondaryKey"
               v-for="(key, index) in KeyMap[0]" :index="key.mainKey"
           />
       </div>
       <Divider :keyboard-model="props.keyboardModel"/>
       <div class="key-line">
           <Key
               :keyboard-model="props.keyboardModel"
               :is-right="index >= 5"
               :main-key="key.mainKey"
               :is-icon-key="key.isIconKey"
               :icon-name="key.iconName"
               :secondary-key="key.secondaryKey"
               v-for="(key, index) in KeyMap[1]" :index="key.mainKey"
           />
       </div>
       <Divider :keyboard-model="props.keyboardModel"/>
       <div class="key-line">
           <Key
               :keyboard-model="props.keyboardModel"
               :is-right="index >= 5"
               :main-key="key.mainKey"
               :is-icon-key="key.isIconKey"
               :icon-name="key.iconName"
               :secondary-key="key.secondaryKey"
               v-for="(key, index) in KeyMap[2]" :index="key.mainKey"
           />
       </div>
   </div>
</template>

<script lang="ts" setup>
import Key from "./Key.vue";
import Divider from "../Divider/Divider.vue";
import {KeyMap} from "../keyMap.ts";
import {EnumKeyboardModel} from "@/page/configKeyboard.ts";

interface Props{
    keyboardModel: EnumKeyboardModel // 显示什么模型的按键
}
const props = defineProps<Props>()


</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.normal-key{
    background-color: black ;
}
.key-line{
    display: flex;
    justify-content: flex-start;
}

</style>
