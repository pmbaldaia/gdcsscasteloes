<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat relative text-gray-900 dark:text-gray-100"
    :style="{ backgroundImage: 'url(/campo/campo.jpg)' }"
  >
    <div class="absolute inset-0 bg-black/50"></div>

    <div
      class="relative z-10 max-w-md w-full bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col items-center"
    >
      <div class="w-28 h-28 md:w-36 md:h-36 animate-bounce mb-6">
        <img
          src="/assets/img/bola.svg"
          alt="Bola de futebol"
          class="w-full h-full filter dark:invert"
        />
      </div>

      <h1 class="text-6xl font-extrabold dark:text-green-400 mb-2">
        <span
          class="text-green-700"
          v-html="formatErrorCode(error?.statusCode || '404')"
        ></span>
      </h1>

      <p class="text-2xl font-semibold mb-1">Página fora de jogo!</p>
      <p class="text-gray-700 dark:text-gray-300 text-base mb-8 max-w-xs px-4">
        {{
          error?.statusMessage || "Algo correu mal. Tenta novamente mais tarde."
        }}
      </p>

      <div class="flex gap-6 w-full max-w-xs mb-6">
        <NuxtLink
          to="/"
          class="flex-1 bg-red-800 text-white hover:bg-red-900 border border-red-900 rounded-full py-3 font-semibold transition"
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
          class="hover:opacity-80 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 551.034 551.034"
            class="w-8 h-8"
          >
            <defs>
              <linearGradient
                id="insta-gradient"
                x1="0.275"
                x2="0.725"
                y1="0.05"
                y2="0.95"
              >
                <stop offset="0%" stop-color="#feda75" />
                <stop offset="25%" stop-color="#fa7e1e" />
                <stop offset="50%" stop-color="#d62976" />
                <stop offset="75%" stop-color="#962fbf" />
                <stop offset="100%" stop-color="#4f5bd5" />
              </linearGradient>
            </defs>
            <path
              fill="url(#insta-gradient)"
              d="M387.48,0H163.555C73.227,0,0,73.227,0,163.555v223.925c0,90.328,73.227,163.555,163.555,163.555
            h223.925c90.328,0,163.555-73.227,163.555-163.555V163.555C551.034,73.227,477.807,0,387.48,0z M275.517,133.987
            c78.039,0,141.529,63.49,141.529,141.529s-63.49,141.529-141.529,141.529S133.987,353.556,133.987,275.517
            S197.478,133.987,275.517,133.987z M460.114,134.07c0,15.932-12.915,28.847-28.847,28.847s-28.847-12.915-28.847-28.847
            s12.915-28.847,28.847-28.847S460.114,118.138,460.114,134.07z M494.378,387.48c0,59.19-48.083,107.273-107.273,107.273H163.555
            c-59.19,0-107.273-48.083-107.273-107.273V163.555c0-59.19,48.083-107.273,107.273-107.273h223.925
            c59.19,0,107.273,48.083,107.273,107.273V387.48z"
            />
          </svg>
        </a>

        <a
          href="https://www.facebook.com/gdcscasteloes/"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:opacity-80 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#1877F2"
            class="w-8 h-8"
          >
            <path
              d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const error = useError();

function formatErrorCode(code) {
  const strCode = String(code);
  return strCode.replace(/0/g, '<span class="text-red-900">0</span>');
}
</script>

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
