<script lang="ts" setup>
import type { AuthFormField, FormSubmitEvent } from "@nuxt/ui";
import type { StaffEmailLoginRequest } from "~/shared/schemas/login";
import { authClient } from "../../../lib/auth-client";

definePageMeta({
    layout: "auth",
});

/**
 * Staff login page with a two-step email OTP flow:
 * 1) Request a one-time code by email.
 * 2) Verify the code to complete sign-in.
 */

const emailFields: AuthFormField[] = [
    {
        name: "email",
        type: "email",
        label: "Correo electrónico",
        placeholder: "tu.correo@dominio.com",
        required: true,
    },
];

const otpFields: AuthFormField[] = [
    {
        name: "otp",
        type: "otp",
        placeholder: "○",
        length: 6,
        size: "xl",
        required: true,
        ui: {
            root: "justify-center",
        },
    },
];

const hasSubmittedEmail = ref(false);
const isSubmitting = ref(false);
const wasError = ref(false);

/**
 * Requests a sign-in OTP for the submitted email and moves the UI
 * to the verification step.
 */
function handleEmailSubmit(e: FormSubmitEvent<StaffEmailLoginRequest>) {
    const { email } = e.data;
    void authClient.emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
    });
    hasSubmittedEmail.value = true;
}

/**
 * Verifies the OTP submitted by the staff user.
 *
 * The OTP UI returns an array of characters, so it is normalized into a
 * single string before calling the auth client.
 * On success, the user is redirected to the staff dashboard.
 */
async function handleOtpSubmit(
    e: FormSubmitEvent<{ email: string; otp: string[] }>,
) {
    isSubmitting.value = true;
    wasError.value = false;

    const { email, otp } = e.data;
    const otpValue = otp.join("");

    const { error } = await authClient.signIn.emailOtp({
        email,
        otp: otpValue,
    });

    isSubmitting.value = false;

    if (error) {
        wasError.value = true;
        return;
    }

    await navigateTo("/dashboard/main");
}

/**
 * Returns the form fields required for the current login step.
 */
const currentFields = computed(() =>
    hasSubmittedEmail.value ? otpFields : emailFields,
);

/**
 * Dynamic helper text for the current step of the login flow.
 */
const currentDescription = computed(() =>
    hasSubmittedEmail.value
        ? "Ingresa el código de 6 dígitos que enviamos a tu correo."
        : "Ingresa tu correo para recibir un código de acceso de 6 dígitos.",
);

/**
 * Dynamic submit button label for the current login step.
 */
const currentSubmitLabel = computed(() =>
    hasSubmittedEmail.value ? "Verificar código" : "Enviar código",
);

/**
 * Selects the correct submit handler based on the current login step.
 */
const currentSubmitHandler = computed(() =>
    hasSubmittedEmail.value ? handleOtpSubmit : handleEmailSubmit,
);
</script>

<template>
    <UPageCard>
        <UAuthForm
            title="Miembros Staff"
            :description="currentDescription"
            :fields="currentFields"
            :loading="isSubmitting"
            :disabled="isSubmitting"
            :submit="{
                icon: 'i-lucide-send',
                label: currentSubmitLabel,
            }"
            @submit.prevent="currentSubmitHandler"
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
                    v-if="hasSubmittedEmail && wasError"
                    color="error"
                    variant="subtle"
                    icon="i-lucide-circle-alert"
                    title="No pudimos verificar el código"
                    description="El código es inválido o venció. Ingresa tu correo nuevamente para solicitar uno nuevo."
                />
            </template>
        </UAuthForm>
    </UPageCard>
</template>
