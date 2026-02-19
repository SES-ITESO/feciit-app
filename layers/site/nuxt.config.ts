import { fileURLToPath } from "url";
import { dirname } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
    modules: ["@vueuse/motion/nuxt"],
    alias: {
        "~site": currentDir,
        "@site": currentDir,
    },
});
