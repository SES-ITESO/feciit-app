<script setup lang="ts">
import Countdown from './Countdown.vue';

defineProps<{
    logoSrc: string
    labelSrc: string
}>()
</script>

<template>
    <section class="relative h-[120vh] w-full overflow-hidden">
        <!-- Background Gradient: Planet-like effect from Black -> Blue -> White -->
        <div
            class="absolute inset-0 z-0 pointer-events-none"
            style="background: radial-gradient(ellipse at bottom right, #000000 0%, #000814 15%, #001a3d 30%, #003d7a 50%, #086cc5 70%, #4a9fe8 85%, #ffffff 100%)"
        />

        <!-- Elliptical White Line - very thin at 35% of gradient -->
        <div
            class="absolute inset-0 z-[1] pointer-events-none"
            style="background: radial-gradient(ellipse at bottom right, transparent 0%, transparent 34.95%, white 35%, transparent 35.05%, transparent 100%)"
        />

        <!-- Abstract Liquid Glass Shapes -->
        <div
            v-motion
            :enter="{
                rotate: 360,
                scale: [1, 1.1, 1],
                x: [0, 50, 0],
                transition: { duration: 20000, repeat: Infinity, ease: 'linear' }
            }"
            class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"
        />
        <div
            v-motion
            :enter="{
                rotate: -360,
                scale: [1, 1.2, 1],
                y: [0, -50, 0],
                transition: { duration: 25000, repeat: Infinity, ease: 'linear' }
            }"
            class="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"
        />

        <!-- Mobile Countdown Banner - Below Navbar -->
        <div class="absolute top-32 left-0 w-full z-40 md:hidden flex flex-col items-center gap-6 px-4">
            <div class="w-full max-w-sm mx-auto">
                <Countdown size="small" />
            </div>

            <a
                href="https://www.eventbrite.com/e/feciit-2026-tickets-1976665888884?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold rounded-full transition-all hover:scale-105 shadow-lg"
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 500 } }"
            >
                Consigue tu entrada
            </a>
        </div>

        <!-- Content Container - positioned at end of screen viewport -->
        <div class="relative h-screen w-full flex flex-col justify-end p-8 md:p-16">
            <div class="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">

                <!-- Bottom Left: Text -->
                <div
                    v-motion
                    :initial="{ opacity: 0, x: -50 }"
                    :enter="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 200 } }"
                    class="space-y-6 text-left"
                >
                    <!-- Mobile Logo 5th Edition - shown only on mobile above pill -->
                    <img
                        :src="logoSrc"
                        alt="5th Edition"
                        class="w-24 mb-4 md:hidden block drop-shadow-xl ml-auto"
                        v-motion
                        :initial="{ opacity: 0, y: 10 }"
                        :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
                    />

                    <a
                        href="https://www.eventbrite.com/e/feciit-2026-tickets-1976665888884?aff=oddtdtcreator"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-6 ml-2"
                        v-motion
                        :initial="{ opacity: 0, y: 10 }"
                        :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
                    >
                        Consigue tu entrada
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </a>

                    <div class="mb-6 hidden md:block scale-75 origin-left">
                        <Countdown size="small" />
                    </div>

                    <img
                        :src="labelSrc"
                        alt="Todo tiene su ciencia"
                        class="h-16 md:h-[90px] w-auto mb-6"
                        v-motion
                        :initial="{ opacity: 0, y: 20 }"
                        :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 800 } }"
                    />

                    <h1 class="text-8xl md:text-[10rem] font-bold tracking-tighter text-white leading-none drop-shadow-xl space-y-0">
                        <span class="block">FECIIT</span>
                    </h1>
                </div>

                <!-- Bottom Right: Logo -->
                <div
                    v-motion
                    :initial="{ opacity: 0, scale: 0.8, rotate: 10 }"
                    :enter="{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1000, delay: 400, type: 'spring' } }"
                    class="relative hidden md:block"
                >
                    <div class="absolute inset-0 bg-feciit-blue/30 blur-2xl rounded-full -z-10" />
                    <img
                        :src="logoSrc"
                        alt="5th Edition"
                        class="w-32 md:w-48 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
