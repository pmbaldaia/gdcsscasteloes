<script setup>
import { PhInstagramLogo, PhFacebookLogo } from "@phosphor-icons/vue";
const error = useError();
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat relative text-neutral-900"
    :style="{ backgroundImage: 'url(/campo/campo.webp)' }"
  >
    <div class="absolute inset-0 bg-black/50"></div>

    <div
      class="relative z-10 max-w-md w-full bg-surface/90 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col items-center"
    >
      <div class="w-28 h-28 md:w-36 md:h-36 animate-bounce mb-6">
        <img
          src="/img/bola.svg"
          alt="Bola de futebol"
          class="w-full h-full filter"
        />
      </div>

      <h1 class="text-fluid-hero font-extrabold mb-2">
        <span class="text-primary-700" v-html="error?.statusCode || '404'"></span>
      </h1>

      <p class="text-fluid-2xl font-semibold mb-1">Página fora de jogo!</p>
      <p class="text-neutral-600 text-fluid-base mb-8 max-w-xs px-4">
        {{
          error?.message || error?.statusMessage || "Algo correu mal. Tenta novamente mais tarde."
        }}
      </p>

      <div class="flex gap-6 w-full max-w-xs mb-6">
        <NuxtLink
          to="/"
          class="flex-1 bg-secondary-800 text-white hover:bg-secondary-900 border border-secondary-900 rounded-full py-3 font-semibold transition"
        >
          Voltar à página inicial
        </NuxtLink>
      </div>

      <div class="flex justify-center items-center gap-8 mt-2">
        <a
          href="https://www.instagram.com/gdcsscasteloes/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PhInstagramLogo class="w-8 h-8" />
        </a>
        <a
          href="https://www.facebook.com/gdcscasteloes/"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PhFacebookLogo class="w-8 h-8" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
