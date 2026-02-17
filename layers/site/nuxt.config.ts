import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
    modules: [
        '@vueuse/motion/nuxt'
    ],
    css: [join(currentDir, 'assets/css/main.css')],
    alias: {
        '~site': currentDir,
        '@site': currentDir
    }
});
