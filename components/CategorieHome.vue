<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { client } from '~/utils/shopifyClient';
import { collectionsQuery } from '~/utils/shopifyCollectionQueries';

const collections = ref([]); // Houdt de opgehaalde collecties bij

onMounted(async () => {
  try {
    // GraphQL-verzoek uitvoeren
    const { data, errors } = await client.request(collectionsQuery);

    if (errors) {
      console.error('GraphQL Errors:', errors);
      return;
    }

    if (data?.collections?.edges) {
      collections.value = data.collections.edges.map(edge => edge.node);
      console.log('Opgehaalde collecties:', collections.value);
    } else {
      console.error('Geen collecties gevonden in de response:', data);
    }
  } catch (error) {
    console.error('Fout bij ophalen collecties:', error);
  }
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 mb-20">
    <h1 class="font-bold text-2xl uppercase">Collecties</h1>
    <div v-if="collections" class="flex mt-10 gap-5">
      <div v-for="collection in collections" :key="collection.id" class="collection">
        <img v-if="collection.image" :src="collection.image.src" :alt="collection.image.altText || 'Collectie afbeelding'" class="rounded min-h-64 object-cover"/>
        <h2 class="mt-5 mb-2.5">{{ collection.title }}</h2>
        <p>{{ collection.description }}</p>
      </div>
    </div>
    <p v-else>Loading collecties...</p>
  </div>
</template>

<style scoped>
.collection {
  margin-bottom: 2rem;
}
</style>
