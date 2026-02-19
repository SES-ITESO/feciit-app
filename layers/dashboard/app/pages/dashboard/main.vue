<script setup lang="ts">
import { useAuthStore } from "~/layers/2-auth/app/stores/auth";

definePageMeta({
    requireAuth: true,
    layout: "dashboard",
});

const { getUserData } = useAuthStore();
const userData = getUserData();
</script>

<template>
    <UDashboardPanel>
        <h1>Hello</h1>
    </UDashboardPanel>
</template>
