<script setup>
definePageMeta({
  layout: "blank",
});

const name = ref("");
const email = ref("");
const password = ref("");

function submitRegister() {
  console.log("Register:", name.value, email.value, password.value);
}
</script>

<template>
  <div class="w-full max-w-md p-8 bg-white rounded-xl shadow">
    <h1 class="text-fluid-2xl font-bold mb-6 text-center">Registar</h1>
    <form @submit.prevent="submitRegister">
      <div class="mb-4">
        <label class="block mb-1 text-fluid-sm font-medium">Nome</label>
        <input v-model="name" type="text" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block mb-1 text-fluid-sm font-medium">Email</label>
        <input v-model="email" type="email" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-6">
        <label class="block mb-1 text-fluid-sm font-medium">Password</label>
        <input
          v-model="password"
          type="password"
          class="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Criar Conta
      </button>
    </form>
    <p class="mt-4 text-fluid-sm text-center">
      Já tem conta?
      <NuxtLink to="/auth/login" class="text-green-600 hover:underline"
        >Entrar</NuxtLink
      >
    </p>
  </div>
</template>
