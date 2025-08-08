<script setup>
definePageMeta({
  layout: "blank",
});

import { PhMoon, PhSun } from "@phosphor-icons/vue";

const colorMode = useColorMode();
const isMounted = ref(false);

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <LandingContainer
    class="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6"
  >
    <div
      class="w-full max-w-md sm:max-w-xl backdrop-blur-sm bg-white/80 dark:bg-black/40 p-6 sm:p-8 rounded-2xl shadow-lg"
    >
      <div
        class="flex justify-center items-center mt-4 sm:mt-6"
        v-if="isMounted"
      >
        <button
          @click="toggleTheme"
          :aria-label="
            colorMode.preference === 'dark'
              ? 'Alternar para tema claro'
              : 'Alternar para tema escuro'
          "
          class="hover:text-green-600 transition w-8 h-8 flex items-center justify-center"
        >
          <PhSun
            v-if="colorMode.preference === 'dark'"
            class="w-6 h-6"
            :class="'text-white'"
          />
          <PhMoon v-else class="w-6 h-6" :class="'text-gray-900'" />
        </button>
      </div>
      <h1
        class="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 text-green-800 dark:text-green-400"
      >
        O jogo está interrompido!
      </h1>

      <p
        class="text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-6 sm:mb-8"
      >
        O nosso site está em manutenção. Voltaremos em breve com melhorias.
      </p>

      <p
        class="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 italic"
      >
        “Até os melhores jogadores precisam de uma pausa para dar o seu melhor.”
      </p>

      <div
        class="mb-6 sm:mb-8 mx-auto w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 animate-bounce"
      >
        <img
          src="/img/bola.svg"
          alt="Bola de futebol"
          class="w-full h-full filter dark:invert"
        />
      </div>

      <p
        class="text-sm sm:text-base text-gray-800 dark:text-gray-200 font-semibold mb-4"
      >
        Entretanto, aproveita para descansar e regressar com energia!
      </p>
    </div>
  </LandingContainer>
</template>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
