type SessionUser = {
    id: string;
    email: string;
    name: string;
    role: string;
};

export const useAuthStore = defineStore("auth", () => {
    const user = ref<SessionUser>();

    const isAuthenticated = computed(() => user.value !== undefined);

    const setUserData = (data: SessionUser) => {
        user.value = { ...data };
    };

    const getUserData = () => user.value;

    const clearUserData = () => {
        user.value = undefined;
    };

    return {
        isAuthenticated,
        setUserData,
        getUserData,
        clearUserData,
    };
});
