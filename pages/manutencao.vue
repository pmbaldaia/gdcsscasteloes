<script setup>
definePageMeta({
  layout: "blank",
});
</script>

<template>
  <LandingContainer
    class="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6"
  >
    <div
      class="w-full max-w-md sm:max-w-xl bg-white/95 backdrop-blur-sm p-6 sm:p-10 rounded-2xl shadow-xl border border-white/60"
    >
      <h1
        class="text-fluid-4xl font-extrabold mb-4 sm:mb-6 text-green-800 tracking-tight"
      >
        O jogo está interrompido!
      </h1>

      <p class="text-fluid-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
        O nosso site está em manutenção. Voltaremos em breve com melhorias.
      </p>

      <p class="text-fluid-sm text-slate-600 mb-8 sm:mb-12 italic">
        “Até os melhores jogadores precisam de uma pausa para dar o seu melhor.”
      </p>

      <div
        class="mb-6 sm:mb-8 mx-auto w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 animate-bounce"
      >
        <img
          src="/img/bola.svg"
          alt="Bola de futebol"
          class="w-full h-full"
        />
      </div>

      <p class="text-fluid-sm text-slate-800 font-semibold">
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
