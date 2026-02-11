<script setup lang="ts">
const { data } = await useFetch("/api");
</script>

<template>
    <div>{{ data?.api }}</div>
</template>
