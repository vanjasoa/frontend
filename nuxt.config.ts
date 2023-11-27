// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    'nuxt-directus',
    '@nuxt/ui',
    '@vite-pwa/nuxt',
    'nuxt-delay-hydration',
    'nuxt-svgo',
    '@nuxt/image',
    '@pinia/nuxt',
  ],

  directus: {
    url: "https://directus-production-2a05.up.railway.app/"
  },

  pwa: {
    /* your pwa options */
  },
  image: {
    dir: 'assets/images'
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
}
})