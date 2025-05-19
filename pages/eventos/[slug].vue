<script setup>
definePageMeta({
  layout: "landing",
});

import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import { eventos } from "~/data/eventos";

const route = useRoute();
const evento = ref(null);

const carregarEvento = () => {
  const slug = route.params.slug;
  evento.value = eventos.find((e) => e.slug === slug) || null;
};

carregarEvento();
watch(() => route.params.slug, carregarEvento);
</script>

<template>
  <div class="max-w-5xl mx-auto mt-8 px-4">
    <NuxtLink
      to="/eventos"
      class="text-gray-800 dark:text-gray-200 underline hover:text-gray-600 dark:hover:text-white inline-block mb-6"
    >
      ← Voltar aos eventos
    </NuxtLink>

    <div v-if="evento" class="bg-transparent dark:bg-transparent rounded-none">
      <div class="w-full relative" style="height: 400px">
        <img
          :src="evento.imagem"
          :alt="evento.nome"
          class="w-full h-full object-contain object-center rounded-none"
        />
      </div>

      <div class="mt-6">
        <h1
          class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          {{ evento.nome }}
        </h1>

        <p
          class="flex items-center gap-2 text-gray-700 dark:text-gray-400 mb-4"
        >
          <svg
            class="w-5 h-5 text-blue-500 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <strong>Data:</strong> {{ evento.data }}
        </p>

        <p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
          {{ evento.descricao }}
        </p>

        <div
          v-if="evento.detalhes"
          class="text-gray-700 dark:text-gray-300 leading-relaxed"
          v-html="evento.detalhes"
        ></div>
      </div>
    </div>

    <p v-else class="text-red-500 mt-6">Evento não encontrado.</p>
  </div>
</template>
