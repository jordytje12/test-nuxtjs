<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import { useFetch } from "#imports";
import type { ShopifyResponse } from '~/types/shopify';

const { data: products, error } = await useFetch<ShopifyResponse>('/api/products?first=8', {
  server: true,
});

</script>

<template>
  <app-header />
  <h1 class="text-2xl font-bold underline">Welcome to the product page</h1>

  <template v-if="products">
    <ul class="grid grid-cols-4 gap-5">
      <li v-for="product in products.data.products.nodes" :key="product.id" class="">
        <img :src="product.images.edges[0]?.node.url" alt="product.images.edges[0].node.altText" class="h-64 object-cover min-w-full"/>
        <h2 class="font-semibold">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.priceRange.minVariantPrice.amount }} {{ product.priceRange.minVariantPrice.currencyCode }}</p>
        <NuxtLink :to="`/products/${product.handle}`">View Product</NuxtLink>
      </li>
    </ul>
  </template>

  <template v-else-if="error">
    <p class="text-red-500">Error loading products: {{ error }}</p>
  </template>

  <template v-else>
    <p>Loading...</p>
  </template>
</template>

<style scoped>
/* Voeg hier styling toe */
</style>
