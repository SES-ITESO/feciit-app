<script setup lang="ts">
const props = withDefaults(defineProps<{
    size?: 'small' | 'large'
}>(), {
    size: 'large'
})

const calculateTimeLeft = () => {
    const eventDate = new Date('2026-03-03T00:00:00');
    const now = new Date();
    const difference = +eventDate - +now;

    if (difference > 0) {
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const timeLeft = ref(calculateTimeLeft());
const mounted = ref(false);
let timer: NodeJS.Timeout;

onMounted(() => {
    mounted.value = true;
    timer = setInterval(() => {
        timeLeft.value = calculateTimeLeft();
    }, 1000);
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
});

const gapClass = computed(() => props.size === 'large' ? 'gap-8 md:gap-20' : 'gap-3 md:gap-8');
const separatorHeight = computed(() => props.size === 'large' ? 'h-24' : 'h-12');
</script>

<template>
    <div v-if="mounted" :class="['flex flex-wrap items-center justify-center max-w-7xl mx-auto px-4', gapClass]">
        <TimeUnit :value="timeLeft.days" label="Días" :delay="0.2" :size="size" />
        <div :class="['hidden md:block w-px bg-feciit-dark/10 rotate-12', separatorHeight]"></div>
        <TimeUnit :value="timeLeft.hours" label="Horas" :delay="0.4" :size="size" />
        <div :class="['hidden md:block w-px bg-feciit-dark/10 rotate-12', separatorHeight]"></div>
        <TimeUnit :value="timeLeft.minutes" label="Minutos" :delay="0.6" :size="size" />
        <div :class="['hidden md:block w-px bg-feciit-dark/10 rotate-12', separatorHeight]"></div>
        <TimeUnit :value="timeLeft.seconds" label="Segundos" :delay="0.8" :size="size" />
    </div>
</template>
