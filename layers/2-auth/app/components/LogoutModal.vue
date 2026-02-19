<script setup lang="ts">
import { authClient } from "~/layers/2-auth/app/lib/auth-client";
import { useAuthStore } from "~/layers/2-auth/app/stores/auth";

const loading = ref(false);
const toast = useToast();

async function handleLogout() {
    loading.value = true;

    const authStore = useAuthStore();
    const role = authStore.getUserData()?.role;
    const loginPath =
        role === "admin" ? "/auth/login/admin" : "/auth/login/staff";

    const { error } = await authClient.signOut();

    loading.value = false;

    if (error) {
        toast.add({
            title: "Error al cerrar sesion",
            description: "No se pudo cerrar la sesion. Intenta de nuevo.",
            color: "error",
        });
        return;
    }

    authStore.clearUserData();
    console.log(loginPath);
    await navigateTo(loginPath);
}
</script>

<template>
    <UModal
        title="Cerrar sesion"
        description="Estas seguro de que deseas cerrar sesion?"
        :close="false"
        :ui="{ footer: 'justify-end' }"
    >
        <slot />
        <template #footer="{ close }">
            <UButton
                label="No"
                color="neutral"
                variant="outline"
                @click="close"
            />
            <UButton
                label="Si, cerrar sesion"
                color="error"
                :loading="loading"
                @click="handleLogout"
            />
        </template>
    </UModal>
</template>
