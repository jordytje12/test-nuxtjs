// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ~/nuxt.config.ts

    modules: [
      '@konkonam/nuxt-shopify',
    ],
  shopify: {
    name: 'sjehpf-ax',
    clients: {
      storefront: {
        apiVersion: '2024-10',
        publicAccessToken: '6d19ff718ae3e9e780f7c38e1218fd9b',
      },
    },
  },

  compatibilityDate: '2024-11-01',
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/', '/product', '/contact'],
      ignore: ['']
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
})




