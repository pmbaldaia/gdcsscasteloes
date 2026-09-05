<script setup lang="ts">
import { PhInstagramLogo, PhFacebookLogo } from "@phosphor-icons/vue"

const error = useError()
const statusCode = computed(() => error.value?.statusCode || 404)
const message = computed(() => error.value?.message || "A página que procuras não existe ou já não está disponível.")

function goHome() {
  clearError({ redirect: "/" })
}
</script>

<template>
  <main
    class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat relative text-neutral-900"
    :style="{ backgroundImage: 'url(/campo/campo.webp)' }"
  >
    <div class="absolute inset-0 bg-black/50" />
    <section class="relative z-10 max-w-md w-full bg-surface/90 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col items-center">
      <div class="w-28 h-28 md:w-36 md:h-36 animate-bounce mb-6">
        <img src="/img/bola.svg" alt="Bola de futebol" class="w-full h-full">
      </div>
      <p class="text-primary-700 text-fluid-hero font-extrabold mb-2">{{ statusCode }}</p>
      <h1 class="text-fluid-2xl font-semibold mb-1">Página fora de jogo!</h1>
      <p class="text-neutral-600 text-fluid-base mb-8 max-w-xs px-4">{{ message }}</p>
      <button type="button" class="btn-club-green w-full max-w-xs" @click="goHome">Voltar à página inicial</button>
      <nav class="flex justify-center items-center gap-8 mt-8" aria-label="Redes sociais">
        <a href="https://www.instagram.com/gdcsscasteloes/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><PhInstagramLogo class="w-8 h-8" /></a>
        <a href="https://www.facebook.com/gdcscasteloes/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><PhFacebookLogo class="w-8 h-8" /></a>
      </nav>
    </section>
  </main>
</template>

<style scoped>
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
.animate-bounce { animation: bounce 2s infinite; }
</style>
