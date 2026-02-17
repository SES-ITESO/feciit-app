<script setup lang="ts">
import image1 from '~site/assets/image1.png';
import image2 from '~site/assets/image2.png';
import image3 from '~site/assets/image3.png';
import image4 from '~site/assets/image4.png';
import image5 from '~site/assets/image5.png';
import image6 from '~site/assets/image6.png';
import image7 from '~site/assets/image7.png';
import image8 from '~site/assets/image8.png';

useHead({
  title: 'Ediciones Anteriores | FECIIT 2026'
})

definePageMeta({
  navTheme: 'light'
})

// Creating a list of images for the masonry layout
const galleryImages = [
    { src: image1, alt: "Edición 2025", span: "md:col-span-2 row-span-1" },
    { src: image2, alt: "Edición 2025", span: "md:col-span-2 row-span-1" },
    { src: image3, alt: "Edición 2025", span: "md:col-span-2 row-span-1" },
    { src: image4, alt: "Edición 2025", span: "md:col-span-2 row-span-1" },
    { src: image5, alt: "Edición 2025", span: "md:col-span-2 row-span-1" },
    { src: image6, alt: "Edición 2025", span: "md:col-span-2 row-span-1" },
    { src: image7, alt: "Edición 2025", span: "md:col-span-2 row-span-1" },
    { src: image8, alt: "Edición 2025", span: "md:col-span-2 row-span-1" },
];
</script>

<template>
    <main class="bg-white min-h-screen pt-32 pb-20 px-6 relative">
        <div class="max-w-7xl mx-auto space-y-16">
            <!-- Header -->
            <div class="text-center space-y-6 max-w-3xl mx-auto">
                <span class="inline-block py-1 px-3 rounded-full bg-blue-50 text-feciit-blue font-semibold text-sm tracking-wide border border-blue-100">
                    Nuestra Historia
                </span>
                <h1 class="text-5xl md:text-7xl font-bold text-feciit-dark tracking-tight leading-tight">
                    El Legado de <span class="text-transparent bg-clip-text bg-gradient-to-r from-feciit-blue to-[#252c5b]">FECIIT</span>
                </h1>
                <p class="text-xl text-gray-600 leading-relaxed">
                    A través de los años, cientos de estudiantes han transformado sus ideas en proyectos que impactan. Revive los mejores momentos de nuestras ediciones anteriores.
                </p>
            </div>

            <!-- Masonry Grid -->
            <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                <div v-for="(img, index) in galleryImages" :key="index" class="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 break-inside-avoid">
                    <img 
                        :src="img.src" 
                        :alt="img.alt" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p class="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {{ img.alt }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="bg-feciit-dark rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-feciit-blue/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div class="relative z-10 space-y-6 max-w-2xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-bold">Sé parte de la historia</h2>
                    <p class="text-white/80 text-lg">
                        La 5ta edición promete ser la más grande hasta ahora. No te quedes fuera.
                    </p>
                    <NuxtLink to="/participa" class="inline-block bg-white text-feciit-dark px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Participar en 2026
                    </NuxtLink>
                </div>
            </div>

        </div>
    </main>
</template>
