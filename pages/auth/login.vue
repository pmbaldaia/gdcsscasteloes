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
      class="w-full max-w-md p-8 card-surface"
    >
      <h1
        class="text-fluid-2xl font-bold mb-6 text-center text-gray-900"
      >
        Login
      </h1>
      <form @submit.prevent="submitLogin">
        <div class="mb-4">
          <label
            class="block mb-1 text-fluid-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            class="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-green-700/30 focus:border-green-700 outline-none transition"
          />
        </div>
        <div class="mb-6">
          <label
            class="block mb-1 text-fluid-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            class="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-green-700/30 focus:border-green-700 outline-none transition"
          />
        </div>
        <button
          type="submit"
          class="w-full btn-club-green"
        >
          Entrar
        </button>
      </form>
      <p class="mt-4 text-fluid-sm text-center text-gray-600">
        Ainda não tem conta?
        <NuxtLink
          to="/auth/register"
          class="text-blue-600 hover:underline"
        >
          Registar
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
