<script setup lang="ts">
import type { FormError } from '#ui/types'


definePageMeta({
    layout: "auth"
})
useSeoMeta({
    title: "Register",
});

const fields = [
    {
        name: "email",
        type: "text",
        label: "Email",
        placeholder: "Enter your email",

    },
    {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "John Doe",
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
    },
];
async function onSubmit(form: any) {
    try {


    } catch (error) {

    }


}
</script>


<template>
    <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
        <AuthForm :fields="fields" title="Connecter vous" align="top" icon="i-heroicons-lock-closed"
            :ui="{ base: 'text-center', footer: 'text-center' }" submit-button="Sign-in" @submit="onSubmit">
            <template #description>

            </template>

            <!-- <template #password-hint>
        <NuxtLink to="/" class="text-primary font-medium"
          >Forgot password?</NuxtLink
        >
      </template>

        <template #footer>
        By signing in, you agree to our
        <NuxtLink to="/" class="text-primary font-medium"
          >Terms of Service</NuxtLink
        >. </template
      > -->
        </AuthForm>
    </UCard>
</template>