// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    experimental: {
      database: true,
    },
  },
  modules: ["@nuxt/ui", "nuxt-auth-utils", "nuxt-security"],
  compatibilityDate: "2024-10-17",
});