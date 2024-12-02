import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss',],
  compatibilityDate: '2024-12-02',
  app: {
    head: {
      script: [
        {
          type: 'module',
          src: 'https://unpkg.com/@splinetool/viewer@1.9.47/build/spline-viewer.js',
        },
      ],
    },
  },
});