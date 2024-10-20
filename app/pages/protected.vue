<template>
    <UContainer>
        <UCard class="max-w-lg mx-auto mt-12 p-6 shadow-lg">
            <h2 class="text-xl font-bold text-center mb-4">Protected Page</h2>
            <p class="text-center">
                You are viewing a protected page that is only accessible to logged-in users.
            </p>
        </UCard>
    </UContainer>
</template>

<script setup>
definePageMeta({
    middleware: 'auth'
})
// You can include authentication checks or fetch protected data here if necessary.
</script>
