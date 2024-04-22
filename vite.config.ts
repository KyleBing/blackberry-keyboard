import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader"
import { resolve } from 'path'
import zipPack from "vite-plugin-zip-pack" // make dist.zip file
import {dateFormatter} from "./src/utility";

const timeStringNow = dateFormatter(new Date(), 'yyyy-MM-dd hh-mm-ss')



// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',// 自定义主机名
        port: 8080,// 自定义端口
        https: false,
        proxy: {
            '/dev': {
                // target: 'http://localhost:3000',
                target: 'http://kylebing.cn:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/dev/, '/'),
            },
        }
    },
    base: './',
    build: {
        outDir: 'docs'
    },
    plugins: [
        vue(),
        svgLoader(),
        zipPack({
            inDir: 'docs',
            outDir: 'archive',
            outFileName: `bb-keyboard-${timeStringNow}.zip`,
            pathPrefix: ''
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },

})
