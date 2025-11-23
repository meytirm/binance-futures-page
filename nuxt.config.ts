// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'shadcn-nuxt', '@nuxtjs/color-mode', '@nuxt/icon'],
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
  },
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
      },
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'b',
        dir: './app/assets/icons',
        width: 24,
        height: 24,
      },
    ],
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui',
  },
})
