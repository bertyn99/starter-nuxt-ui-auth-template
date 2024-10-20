<script setup lang="ts">
import type { FormError } from '#ui/types'

definePageMeta({
  layout: "auth"
})
useSeoMeta({
  title: "Login",
});

const fields = [
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "Enter your email",

  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];
const loading = ref(false)
async function onSubmit(form: any) {
  try {
    loading.value = true;
    console.log(form)
    const user = await useRequestFetch()("/api/auth/login", {
      method: "POST",
      body: form,
    });
    loading.value = false;
    console.log(user)
    if (user && user.success) navigateTo("/");

  } catch (error: a) {
    alert(error.statusMessage || error);
    loading.value = false;
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