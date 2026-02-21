// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: 'azure'
    },
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },

    colorMode: {
        preference: "light",
        fallback: "light",
    },

    modules: [
      "@nuxt/a11y",
      "@nuxt/eslint",
      "@nuxt/hints",
      "@nuxt/image",
      "@nuxt/ui",
      "@pinia/nuxt",
    ],

    runtimeConfig: {
        mail: {
            host: "localhost",
            port: 1025,
            user: "",
            pass: "",
            from: "noreply-local@feciit.dev",
        },
    },
});