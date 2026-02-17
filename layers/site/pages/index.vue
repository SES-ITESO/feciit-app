<script setup lang="ts">
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Metrics from '~/components/Metrics.vue'
import Program from '~/components/Program.vue'
import Participation from '~/components/Participation.vue'
import Footer from '~/components/Footer.vue'

import logoImage from '~site/assets/5thedition.png'
import labelImage from '~site/assets/label.png'

useHead({
  title: 'FECIIT 2026 | Feria de Ciencias del ITESO'
})
</script>

<template>
  <main class="space-y-0">
    <Hero :logoSrc="logoImage" :labelSrc="labelImage" />
    <About />
    <Metrics />
    <Program />
    <Participation />
    
    <Footer />
  </main>
</template>
