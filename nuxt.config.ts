// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    experimental: {
      database: true,
    },
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxt/ui-pro", "nuxt-auth-utils", "nuxt-security"],
  compatibilityDate: "2024-10-17",

  runtimeConfig: {
    cookie: {
      httpOnly: true,
      secure: true, //work with https
      sameSite: "strict",
    },
  },
  security: {
    csrf: true,
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
});
