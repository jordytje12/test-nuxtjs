<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import { useFetch, useRoute } from "#imports";
import type { ShopifyProductResponse } from "@/types/shopify";

// Haal de dynamische route-parameter op
const route = useRoute();
const { handle } = route.params;

// Gebruik `useFetch` om de productgegevens op te halen
const { data: productData, error } = await useFetch<ShopifyProductResponse>(`/api/products?handle=${handle}`);


// Controleer of de data beschikbaar is en geef deze expliciet een type
const product = computed(() => productData?.value?.data?.product);
console.log("Handle in [handle].vue:", handle);

</script>

<template>
  <div>
    <app-header />
    <h1>Productpagina</h1>

    <!-- Controleer of het product bestaat -->
    <template v-if="product">
      <h2>{{ product.title }}</h2>
      <img
          :src="product.images.edges[0]?.node.url"
          :alt="product.images.edges[0]?.node.altText || 'Product afbeelding'"
      />
      <p>{{ product.description }}</p>
      <p>
        {{ product.priceRange.minVariantPrice.amount }} {{ product.priceRange.minVariantPrice.currencyCode }}
      </p>
    </template>

    <!-- Toon foutmelding als er een fout is -->
    <template v-else-if="error">
      <p class="text-red-500">Error loading product: {{ error.message }}</p>
    </template>

    <!-- Toon laadstatus als data nog niet beschikbaar is -->
    <template v-else>
      <p>Loading product...</p>
    </template>
  </div>
</template>

<style scoped>
/* Voeg styling toe indien nodig */
</style>
