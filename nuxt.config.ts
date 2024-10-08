// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: [{src: '~/plugins/konva.js', ssr: false, mode: 'client'}],
  build: {transpile: ['konva']},
})
