<script setup lang="ts">

</script>

<template>
    <header class="bg-white shadow-md">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul class="flex items-center justify-between h-16">
          <!-- Logo -->
          <li class="flex-shrink-0">
            <NuxtLink to="/">
              <img src="/assets/img/nuxt-js-logo.jpeg" alt="Logo" class="h-auto w-20" />
            </NuxtLink>
          </li>

          <!-- Navigation Links -->
          <li class="flex space-x-8 hidden md:flex">
            <NuxtLink
                to="/"
                class="text-gray-800 hover:text-gray-600 font-medium transition"
            >
              Home
            </NuxtLink>
            <NuxtLink
                to="/products"
                class="text-gray-800 hover:text-gray-600 font-medium transition"
            >
              Product
            </NuxtLink>
            <NuxtLink
                to="/contact"
                class="text-gray-800 hover:text-gray-600 font-medium transition"
            >
              Contact
            </NuxtLink>
            <NuxtLink
                to="/post/[id]"
                class="text-gray-800 hover:text-gray-600 font-medium transition"
            >
              Blog
            </NuxtLink>
          </li>

          <!-- Cart Icon -->
          <li class="flex">
            <NuxtLink
                to="/cart"
                class="text-gray-800 hover:text-gray-600 transition focus:outline-none"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6m1.5-6l1.5 6m5.5-6v6m3-6l1.5 6m0 0H6.4m10.6 0a3 3 0 11-6 0m6 0h-6"
                />
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </template>

<style scoped>

</style>