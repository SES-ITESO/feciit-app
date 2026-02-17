<script setup lang="ts">
useHead({
  title: 'Talleres | FECIIT 2026'
})

definePageMeta({
  navTheme: 'light'
})
</script>

<template>
    <main class="bg-white min-h-screen pt-32 pb-20 px-6">
        <div class="max-w-7xl mx-auto space-y-12">
            <!-- Header -->
            <div class="text-center space-y-6">
                <span class="inline-block py-1 px-3 rounded-full bg-blue-50 text-feciit-blue font-semibold text-sm tracking-wide border border-blue-100">
                    Aprende y Crea
                </span>
                <h1 class="text-5xl md:text-7xl font-bold text-feciit-dark tracking-tight">
                    Talleres <span class="text-transparent bg-clip-text bg-gradient-to-r from-feciit-blue to-[#252c5b]">Interactivos</span>
                </h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Explora nuevas habilidades con expertos en diferentes áreas. Cupo limitado.
                </p>
            </div>

            <!-- Filters (Visual only for now) -->
            <!-- Placeholder Content -->
            <div class="flex flex-col items-center justify-center py-20 text-center space-y-6">
                <div class="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <span class="text-4xl">🚀</span>
                </div>
                <h3 class="text-2xl font-bold text-feciit-dark">Se anunciarán próximamente</h3>
                <p class="text-gray-500 max-w-md">
                    Estamos preparando una increíble selección de talleres para ti. Mantente atento a nuestras redes sociales.
                </p>
            </div>
            
        </div>
    </main>
</template>
