// main.ts
import {createApp} from 'vue'

// APP
import App from './App.vue'
const app = createApp(App)

// PINIA
import {createPinia} from "pinia"
const pinia = createPinia()
app.use(pinia)

// ROUTER
import {router} from "./router"
app.use(router)


// TOOLTIP
import FloatingVue from 'floating-vue'
let tooltipOptions = {
    // tooltip for bill
    arrowOverflow: true,
    themes: {
        'tooltip-bill': { // 这是主题名，对应 bill 页面中 v-tooltip 的 theme
            placement: 'right',
            triggers: ['hover', 'focus', 'touch'],
        }
    }
}
app.use(FloatingVue, tooltipOptions)
import 'floating-vue/dist/style.css'

// 使移动端支持 :hover 样式
document.addEventListener("touchstart", function () {
}, false)

app.mount('#app')
