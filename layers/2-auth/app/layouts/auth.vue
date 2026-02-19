<script setup lang="ts">
import { authClient } from "../lib/auth-client";

const { data: session } = await authClient.useSession(useFetch);
if (session.value) await navigateTo("/dashboard/main");
</script>

<template>
    <div class="auth-layout-bg min-h-screen grid place-items-center px-6 py-10">
        <div class="w-full max-w-md">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.auth-layout-bg {
    background-image: linear-gradient(
        to bottom left,
        #1d3263 0%,
        #1b3c74 25%,
        #1a4785 50%,
        #175296 75%,
        #14579f 100%
    );
}
</style>
