<script setup lang="ts">


</script>

<template>
  <h1 class="text-2xl font-bold underline max-w-7xl mx-auto pt-28 pb-5">Collections</h1>

  <template v-if="collections">
    <ul class="grid grid-cols-3 gap-5 max-w-7xl mx-auto pb-28">
      <li v-for="collection in collections.data.collections.edges" :key="collection.node.id" class="space-y-2.5">
        <img :src="collection.node.image?.src" :alt="collection.node.image?.altText || ''" class="h-64 object-cover min-w-full rounded"/>
        <h2 class="font-semibold">{{ collection.node.title }}</h2>
        <p class="pb-5">{{ collection.node.description }}</p>
        <NuxtLink :to="`/collections/${collection.node.handle}`" class=" underline underline-offset-8">View Collection</NuxtLink>
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