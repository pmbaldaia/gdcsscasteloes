<script setup>
import { plantel as fullPlantel } from "@/data/equipa";

const props = defineProps({
  show: Boolean,
  jogador: {
    type: Object,
    default: () => fullPlantel[0], // mostrar o primeiro jogador por padrão
  },
});

const emit = defineEmits(["close"]);

function close() {
  emit("close");
}
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="show && jogador"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60"
        @click="close"
      >
        <div
          class="bg-white text-black rounded-xl shadow-2xl max-w-lg w-full mx-4 p-4 relative animate-popup"
          @click.stop
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex-1 text-center">
              <h2 class="text-fluid-xl font-semibold">Destaque</h2>
            </div>
            <button
              @click="close"
              class="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 text-fluid-2xl font-bold"
              aria-label="Fechar modal"
            >
              ×
            </button>
          </div>

          <NuxtImg
            :src="jogador.img || '/equipa/default.webp'"
            :alt="jogador.nome"
            preset="avatar"
            width="320"
            height="400"
            sizes="(max-width: 512px) 100vw, 320px"
            loading="lazy"
            class="w-full h-auto rounded-md mb-6 object-cover"
          />

          <div class="text-center mb-4">
            <p class="text-fluid-xl font-bold">{{ jogador.nome }}</p>
            <p class="text-fluid-sm text-gray-600">
              {{ jogador.funcao }}
            </p>
          </div>

          <div class="flex justify-center">
            <NuxtLink
              to="/equipa"
              class="bg-red-800 text-white hover:bg-black hover:text-white border border-red-800 hover:border-white w-full sm:w-auto inline-block text-center px-4 py-2 rounded"
              @click="close"
            >
              Conhecer Plantel
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@keyframes popup {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-popup {
  animation: popup 0.3s ease-out;
}
</style>
