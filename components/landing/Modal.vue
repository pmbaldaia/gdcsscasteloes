<script setup>
import { plantel as fullPlantel } from "@/data/equipa";

const props = defineProps({ show: Boolean });
const emit = defineEmits(["close"]);

function close() {
  emit("close");
}

const dataBase = new Date("2025-07-29T21:30:00");
const agora = new Date();

const umDiaMs = 1000 * 60 * 60 * 24;

let dataAtual = new Date(dataBase);
let diasValidos = 0;

while (dataAtual <= agora) {
  if (dataAtual.getDay() !== 0) {
    diasValidos++;
  }
  dataAtual = new Date(dataAtual.getTime() + umDiaMs);
}

const jogadorIndex = diasValidos - 1;

const dataAlvo = new Date("2025-09-01T21:30:00");

let jogador = null;

if (agora >= dataAlvo && agora < new Date(dataAlvo.getTime() + umDiaMs)) {
  jogador = fullPlantel[24];
} else {
  jogador =
    jogadorIndex >= 0 && jogadorIndex < fullPlantel.length
      ? fullPlantel[jogadorIndex]
      : null;
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
          class="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-2xl max-w-lg w-full mx-4 p-4 relative animate-popup"
          @click.stop
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex-1 text-center">
              <h2 class="text-xl font-semibold">Destaque do dia</h2>
            </div>
            <button
              @click="close"
              class="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold"
              aria-label="Fechar modal"
            >
              ×
            </button>
          </div>

          <NuxtImg
            :src="jogador.img || '/equipa/default.webp'"
            :alt="jogador.nome"
            class="w-full h-auto rounded-md mb-6 object-cover"
          />

          <div class="text-center mb-4">
            <p class="text-xl font-bold">{{ jogador.nome }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">
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
