import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://spacex-production.up.railway.app', // Vervang met jouw endpoint
      },
    },
  },

  compatibilityDate: '2024-11-30',
});