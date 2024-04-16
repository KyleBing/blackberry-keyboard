<template>
    <div>
        Keyboard
    </div>
</template>

<script lang="ts" setup>
import {useProjectStore} from "../pinia";
const storeProject = useProjectStore()
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const refDiaryList = ref()

onMounted(() => {
})

</script>

<style lang="scss" scoped>

</style>
