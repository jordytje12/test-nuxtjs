<script setup lang="ts">
import { useFetch } from "#imports";
import { useRoute } from "vue-router";

// Haal de product ID op van de route
const route = useRoute();
const productId = route.params.id;

// Maak een fetch-aanroep om het specifieke product op te halen
const { data: product, error } = await useFetch(`/api/product/${productId}`);
</script>

<template>
  <div>
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <img :src="product.image" :alt="product.title" />
    <p>Price: {{ product.price }} {{ product.currency }}</p>
  </div>
</template>

<style scoped>

</style>