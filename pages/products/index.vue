<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: 'https://sjehpf-ax.myshopify.com/',
  apiVersion: '2024-10',
  publicAccessToken: '6d19ff718ae3e9e780f7c38e1218fd9b',
});

const products = ref([]);

const productsQuery = `
  query ProductsQuery($first: Int) {
  products(first: $first) {
    edges {
      node {
        id
        title
        handle
        images(first: 1) { # Alleen de eerste afbeelding per product
          nodes {
            id
            url # Haal de afbeeldings-URL op
          }
        }
        priceRange {
          maxVariantPrice {
            amount
            currencyCode # Optioneel: Haal ook de valuta op
          }
        }
      }
    }
  }
}

`;

onMounted(async () => {
  const { data, errors } = await client.request(productsQuery, { variables: { first: 10 } });
  if (!errors) {
    products.value = data.products.edges.map(edge => edge.node);
  } else {
    console.error(errors);
  }
});
</script>

<template>
  <AppHeader />
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Producten</h2>

  <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    <div class="group relative" v-for="product in products" :key="product.id">
      <img :src="product.images.nodes[0]?.url" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            <a :href="`/products/${product.handle}`">
              <span aria-hidden="true" class="absolute inset-0"></span>
              {{ product.title }}
            </a>
          </h3>
          <p class="mt-1 text-sm text-gray-500">Black</p>
        </div>
        <p class="text-sm font-medium text-gray-900">{{product.priceRange.maxVariantPrice.amount}}</p>
      </div>
    </div>
  </div>

    </div>
  </div>

</template>

