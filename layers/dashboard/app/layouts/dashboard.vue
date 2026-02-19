<script setup lang="ts"></script>

<template>
    <UDashboardGroup>
        <UDashboardSidebar collapsible resizable>
            <template #header="{ collapsed }">
                <img
                    v-if="!collapsed"
                    src="/feciit-letters-logo.png"
                    alt="Feciit"
                    class="h-6 w-auto shrink-0"
                />
                <img
                    v-else
                    src="/feciit-version-logo.png"
                    alt="Feciit"
                    class="h-6 w-auto shrink-0 mx-auto"
                />
            </template>

            <template #footer>
                <LogoutModal>
                    <UButton
                        leading-icon="i-lucide-log-out"
                        variant="ghost"
                        color="error"
                        >Cerrar Sesión</UButton
                    >
                </LogoutModal>
            </template>
        </UDashboardSidebar>

        <slot />
    </UDashboardGroup>
</template>
