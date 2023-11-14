// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    'nuxt-directus',
    '@nuxtjs/tailwindcss'
  ],

  directus: {
    url: "https://directus-production-2a05.up.railway.app/"
  }
})
