<script setup lang="ts">
import Navigation from '~/components/Navigation.vue'

const route = useRoute()
const navTheme = computed(() => (route.meta.navTheme as 'light' | 'dark') || 'dark')
</script>

<template>
  <div class="bg-white text-feciit-dark min-h-screen flex flex-col font-sans antialiased selection:bg-feciit-blue selection:text-white">
    <Navigation :theme="navTheme" />
    <slot />
  </div>
</template>
