<script lang="ts" setup>
import type { AuthFormField, FormSubmitEvent } from "@nuxt/ui";
import {
    adminLoginRequest,
    type AdminLoginRequest,
} from "~/shared/schemas/login";
import { authClient } from "../../../lib/auth-client";

definePageMeta({
    layout: "auth",
});

const loginFields: AuthFormField[] = [
    {
        name: "email",
        type: "email",
        label: "Correo electrónico",
        placeholder: "tu.correo@dominio.com",
        required: true,
    },
    {
        name: "password",
        type: "password",
        label: "Contraseña",
        placeholder: "Ingresa tu contraseña",
        required: true,
    },
];

const isSubmitting = ref(false);
const submitError = ref("");

async function handleSubmit(e: FormSubmitEvent<AdminLoginRequest>) {
    const { email, password } = e.data;
    isSubmitting.value = true;
    submitError.value = "";

    const { error } = await authClient.signIn.email({ email, password });

    isSubmitting.value = false;

    if (error) {
        switch (error.status) {
            case HTTP_STATUS_CODE.TooManyRequests:
                submitError.value =
                    "Demasiados intentos. Espera unos minutos y vuelve a intentarlo.";
                break;
            case HTTP_STATUS_CODE.Unauthorized:
            case HTTP_STATUS_CODE.BadRequest:
            case HTTP_STATUS_CODE.NotFound:
                submitError.value = "Correo o contraseña incorrectos.";
                break;
            default:
                submitError.value =
                    "No fue posible iniciar sesión en este momento. Intenta nuevamente.";
                break;
        }
        return;
    }
    await navigateTo("/dashboard/main");
}
</script>

<template>
    <UPageCard>
        <UAuthForm
            title="Administrador"
            description="Ingresa tus credenciales para acceder al panel de administración."
            :schema="adminLoginRequest"
            :fields="loginFields"
            :loading="isSubmitting"
            :disabled="isSubmitting"
            :submit="{
                icon: 'i-lucide-send',
                label: 'Iniciar sesión',
            }"
            @submit.prevent="handleSubmit"
        >
            <template #leading>
                <img
                    src="/feciit-letters-logo.png"
                    alt="Feciit"
                    class="mx-auto h-12 w-auto"
                />
            </template>

            <template #validation>
                <UAlert
                    v-if="submitError"
                    color="error"
                    variant="subtle"
                    icon="i-lucide-circle-alert"
                    title="Error al iniciar sesión"
                    :description="submitError"
                />
            </template>
        </UAuthForm>
    </UPageCard>
</template>
