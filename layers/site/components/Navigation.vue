<script setup lang="ts">
const isOpen = ref(false)
const props = withDefaults(defineProps<{
    theme?: 'light' | 'dark'
}>(), {
    theme: 'dark'
})

const activeTheme = computed(() => isOpen.value ? 'light' : props.theme)
const isLight = computed(() => activeTheme.value === 'light')

const linkBaseClass = computed(() => isLight.value
    ? "px-6 py-2.5 bg-blue-50/80 text-feciit-dark rounded-full border border-blue-100 hover:bg-blue-100 transition-all font-medium backdrop-blur-sm"
    : "px-6 py-2.5 bg-white/5 text-white rounded-full border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
)

const ctaBaseClass = computed(() => isLight.value
    ? "px-6 md:px-8 py-2.5 md:py-3 bg-feciit-dark text-white rounded-full border border-transparent hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold text-sm md:text-base relative z-50"
    : "px-6 md:px-8 py-2.5 md:py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white hover:text-feciit-dark transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] backdrop-blur-md font-semibold text-sm md:text-base relative z-50"
)

const logoClass = computed(() => "text-2xl md:text-3xl font-bold tracking-tighter hover:opacity-80 transition-opacity relative z-50 " + (isLight.value ? "text-feciit-dark" : "text-white"))

const links = [
    { name: 'Evento', href: '/#evento' },
    { name: 'Ediciones', href: '/ediciones-anteriores' },
    { name: 'Talleres', href: '/talleres' },
    { name: 'Patrocinadores', href: '/patrocinadores' }
]
</script>

<template>
    <nav class="absolute top-0 left-0 right-0 z-50 h-20 flex items-center px-4 md:px-8">
        <div class="w-full max-w-7xl mx-auto flex items-center justify-between">

            <!-- Logo -->
            <NuxtLink to="/" :class="logoClass">
                FECIIT <span :class="isLight ? 'text-feciit-blue font-light' : 'font-light opacity-80'">2026</span>
            </NuxtLink>

            <div class="flex items-center gap-3 md:gap-4">

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center gap-4 font-semibold text-base">
                    <a
                        v-for="item in links"
                        :key="item.name"
                        :href="item.href"
                        :class="linkBaseClass"
                        v-motion
                        :while-hover="{ scale: 1.05 }"
                        :while-tap="{ scale: 0.95 }"
                    >
                        {{ item.name }}
                    </a>
                </div>

                <!-- Participa Button (Always Visible) -->
                <div class="relative z-50 flex items-center">
                    <NuxtLink
                        to="/participa"
                        :class="ctaBaseClass"
                        v-motion
                        :while-hover="{ scale: 1.05 }"
                        :while-tap="{ scale: 0.95 }"
                    >
                        <span class="flex items-center gap-2">
                            Entradas
                        </span>
                    </NuxtLink>
                    <svg
                        class="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        :stroke="isLight ? 'currentColor' : 'white'"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        v-motion
                        :initial="{ y: 0 }"
                        :enter="{
                            y: -5,
                            transition: {
                                repeat: Infinity,
                                repeatType: 'mirror',
                                duration: 800,
                                ease: 'easeInOut'
                            }
                        }"
                    >
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </div>

                <!-- Mobile Hamburger Button -->
                <button
                    @click="isOpen = !isOpen"
                    :class="['md:hidden relative z-50 p-2 focus:outline-none', isLight ? 'text-feciit-dark' : 'text-white']"
                >
                    <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-[-20px] scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <div
                v-if="isOpen"
                class="fixed inset-0 bg-white/95 z-40 flex flex-col items-center justify-center p-8 space-y-8"
            >
                <a
                    v-for="(item, index) in links"
                    :key="item.name"
                    :href="item.href"
                    @click="isOpen = false"
                    class="text-3xl font-bold text-feciit-dark hover:text-feciit-blue transition-colors"
                >
                    {{ item.name }}
                </a>
            </div>
        </Transition>
    </nav>
</template>
