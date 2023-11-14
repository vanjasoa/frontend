// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    'nuxt-directus',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    'nuxt-delay-hydration',
    'nuxt-svgo',
    '@nuxt/image',
  ],

  directus: {
    url: "https://directus-production-2a05.up.railway.app/"
  },

  pwa: {
    /* your pwa options */
  },
  image: {
    dir: 'assets/images'
  }
})