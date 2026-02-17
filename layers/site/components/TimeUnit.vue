<script setup lang="ts">
const props = defineProps<{
    value: number
    label: string
    delay: number
    size: 'small' | 'large'
}>()

const numberSize = computed(() => props.size === 'large' ? 'text-[12vw] md:text-[10vw]' : 'text-[6vw] md:text-[3.5vw] text-white')
const labelSize = computed(() => props.size === 'large' ? 'text-sm md:text-xl text-feciit-dark/50' : 'text-[10px] md:text-sm text-white/70')
const labelSpacing = computed(() => props.size === 'large' ? 'mt-2 md:mt-4 tracking-[0.3em]' : 'mt-1 md:mt-2 tracking-[0.2em]')
</script>

<template>
    <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: delay * 1000 } }"
        class="flex flex-col items-center"
    >
        <div class="relative group">
            <span :class="[numberSize, 'font-bold leading-none tracking-tighter select-none tabular-nums']">
                {{ value.toString().padStart(2, '0') }}
            </span>
        </div>
        <span :class="[labelSize, 'uppercase font-medium', labelSpacing]">
            {{ label }}
        </span>
    </div>
</template>
