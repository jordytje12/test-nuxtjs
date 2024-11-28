<script setup lang="ts">
import { useFetch } from "#imports";
import type {ShopifyCollectionsResponse} from "~/types/shopify";

const { data: collections, error } = await useFetch<ShopifyCollectionsResponse>('/api/collections?first=3', {
  server: true,
});

</script>

<template>
  <h1 class="text-2xl font-bold underline max-w-7xl mx-auto">Collections</h1>

  <template v-if="collections">
    <ul class="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
      <li v-for="collection in collections.data.collections.edges" :key="collection.node.id" class="">
        <img :src="collection.node.image?.src" :alt="collection.node.image?.altText || ''" class="h-64 object-cover min-w-full"/>
        <h2 class="font-semibold">{{ collection.node.title }}</h2>
        <p>{{ collection.node.description }}</p>
        <NuxtLink :to="`/collections/${collection.node.handle}`">View Collection</NuxtLink>
      </li>
    </ul>
  </template>

  <template v-else-if="error">
    <p class="text-red-500">Error loading collections: {{ error }}</p>
  </template>

  <template v-else>
    <p>Loading...</p>
  </template>
</template>

<style scoped>

</style>