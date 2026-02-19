import { authClient } from "../lib/auth-client";
import { useAuthStore } from "../stores/auth";

export default defineNuxtRouteMiddleware(async (to) => {
    const authStore = useAuthStore();

    if (!to.meta.requireAuth) return;

    let user: (typeof authClient.$Infer.Session)["user"] | null = null;

    // get user on server
    if (import.meta.server) {
        const { data: session } = await authClient.useSession(useFetch);
        user = session.value?.user ?? null;
    } else {
        // get user on client
        const { data: session } = await authClient.getSession();
        user = session?.user ?? null;
    }

    if (!user) {
        authStore.clearUserData();
        return await navigateTo("/");
    }

    authStore.setUserData({ ...user, role: user.role! });
});
