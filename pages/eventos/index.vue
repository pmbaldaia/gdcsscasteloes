<script setup>
definePageMeta({
  layout: "landing",
});

import { eventos } from "~/data/eventos";
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>
        <div class="flex flex-col items-center">
          <span class="text-gray-900 dark:text-white">Próximos Eventos</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-red-600"></div>
            <div class="w-1/2 bg-green-600"></div>
          </div>
        </div>
      </template>

      <template v-slot:desc>
        <span class="text-slate-600 dark:text-gray-300">
          Não percas as nossas próximas festas e eventos! Vem divertir-te
          connosco!
        </span>
      </template>
    </LandingSectionhead>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto mt-12 px-4"
    >
      <div
        v-for="evento in eventos"
        :key="evento.slug"
        class="bg-white dark:bg-zinc-800 rounded-2xl shadow-md overflow-hidden flex flex-col"
      >
        <img
          :src="evento.imagem"
          :alt="evento.nome"
          class="w-full h-64 object-cover"
        />

        <div class="p-4 flex flex-col justify-between flex-1">
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ evento.nome }}
            </h2>

            <p class="text-sm text-gray-700 dark:text-gray-400 mb-1">
              <strong>Data:</strong> {{ evento.data }}
            </p>

            <p class="text-gray-800 dark:text-gray-300 text-sm line-clamp-3">
              {{ evento.descricao }}
            </p>
          </div>

          <div class="mt-4">
            <NuxtLink
              :to="`/eventos/${evento.slug}`"
              class="bg-red-800 text-white hover:bg-black hover:text-white border border-red-800 hover:border-white w-full sm:w-auto inline-block text-center px-4 py-2 rounded"
            >
              Saber mais →
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
