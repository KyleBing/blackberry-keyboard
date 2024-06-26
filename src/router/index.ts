import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

import Index from "../page/Index.vue"


const routes: RouteRecordRaw[] = [
    {
        name: 'Index',
        path: '/',
        component: Index,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export  {
    router
}
