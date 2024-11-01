// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: [],
  modules: [ '@pinia/nuxt' ],
  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/card.scss',
    '@/assets/styles/grid.scss',
    '@/assets/styles/_form.scss',
    '@/assets/styles/_utils.scss',
    '@/assets/styles/_buttons.scss',
    '@/assets/styles/_inputs.scss'
  ],


  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
})