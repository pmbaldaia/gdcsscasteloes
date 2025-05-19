<script setup>
definePageMeta({
  layout: "blank",
});

const email = ref("");
const password = ref("");

function submitLogin() {
  console.log("Login:", email.value, password.value);
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen px-4">
    <div
      class="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md"
    >
      <h1
        class="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white"
      >
        Login
      </h1>
      <form @submit.prevent="submitLogin">
        <div class="mb-4">
          <label
            class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            class="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
          />
        </div>
        <div class="mb-6">
          <label
            class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            class="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Entrar
        </button>
      </form>
      <p class="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
        Ainda não tem conta?
        <NuxtLink
          to="/auth/register"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Registar
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
