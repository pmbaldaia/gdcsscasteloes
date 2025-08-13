<script setup>
definePageMeta({
  layout: "default",
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
  <div class="max-w-5xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
    <NuxtLink
      to="/eventos"
      class="inline-block mb-8 text-blue-500 dark:text-blue-400 hover:underline font-medium transition-colors"
    >
      ← Voltar aos eventos
    </NuxtLink>

    <div
      v-if="evento"
      class="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900 overflow-hidden transition-colors"
    >
      <div
        class="w-full max-w-xl sm:max-w-3xl mx-auto relative aspect-square rounded-t-lg overflow-hidden"
      >
        <img
          :src="evento.imagem"
          :alt="evento.nome"
          class="w-full h-full object-cover object-center"
        />
      </div>

      <div class="p-6 sm:p-10">
        <h1
          class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 transition-colors"
        >
          {{ evento.nome }}
        </h1>

        <div
          class="flex flex-col sm:flex-row sm:space-x-10 text-gray-700 dark:text-gray-300 mb-8"
        >
          <p class="flex items-center mb-3 sm:mb-0 gap-2">
            <svg
              class="w-5 h-5 text-red-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6l4 2"
              />
            </svg>
            <strong class="whitespace-nowrap">Hora:</strong>
            {{ evento.hora || "17h00" }}
          </p>

          <p class="flex items-center mb-3 sm:mb-0 gap-2">
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
            <strong class="whitespace-nowrap">Data:</strong> {{ evento.data }}
          </p>

          <p class="flex items-center gap-2">
            <svg
              class="w-5 h-5 text-green-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
              />
            </svg>
            <strong class="whitespace-nowrap">Local:</strong> {{ evento.local }}
          </p>
        </div>

        <p
          class="text-gray-800 dark:text-gray-200 leading-relaxed mb-6 transition-colors"
        >
          {{ evento.descricao }}
        </p>

        <div
          v-if="evento.detalhes"
          class="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed"
          v-html="evento.detalhes"
        ></div>
      </div>
    </div>

    <p v-else class="text-red-500 mt-6 text-center font-semibold text-lg">
      Evento não encontrado.
    </p>
  </div>
</template>
