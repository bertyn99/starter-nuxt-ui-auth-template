<template>
    <UContainer>
        <UCard class="max-w-lg mx-auto mt-12 p-6 shadow-lg">
            <h1 class="text-2xl font-bold mb-4 text-center">Welcome to Our Application</h1>
            <template v-if="loggedIn">
                <p class="text-lg text-center mb-4">
                    Hi, {{ user?.username }}!
                </p>
                <button @click="logout"
                    class="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 mb-4">
                    Log out
                </button>
                <router-link to="/protected"
                    class="w-full py-2 px-4 bg-purple-500 text-white rounded text-center block hover:bg-purple-600 transition duration-300">
                    Go to Protected Page
                </router-link>
            </template>
            <template v-else>
                <p class="text-lg text-center mb-4">Welcome, Guest! Please log in or register to continue.</p>
                <div class="flex justify-between">
                    <router-link to="/login"
                        class="w-1/2 py-2 px-4 mr-1 bg-blue-500 text-white rounded text-center hover:bg-blue-600 transition duration-300">
                        Login
                    </router-link>
                    <router-link to="/register"
                        class="w-1/2 py-2 px-4 ml-1 bg-green-500 text-white rounded text-center hover:bg-green-600 transition duration-300">
                        Register
                    </router-link>
                </div>
            </template>
        </UCard>
    </UContainer>
</template>

<script setup>
const { loggedIn, user, clear } = useUserSession();

const logout = async () => {
    await clear();
};
</script>
