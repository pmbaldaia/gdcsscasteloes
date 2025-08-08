<script setup>
definePageMeta({
  layout: "landing",
});

import { computed } from "vue";
import { eventos as eventosOriginais } from "~/data/eventos";

function parseDateBr(dataStr) {
  const [day, month, year] = dataStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

const hoje = new Date();
hoje.setHours(0, 0, 0, 0);

const eventosFuturos = computed(() =>
  eventosOriginais
    .filter((e) => parseDateBr(e.data) >= hoje)
    .sort((a, b) => parseDateBr(a.data) - parseDateBr(b.data))
);

const eventosPassados = computed(() =>
  eventosOriginais
    .filter((e) => parseDateBr(e.data) < hoje)
    .sort((a, b) => parseDateBr(a.data) - parseDateBr(b.data))
    .map((e) => ({ ...e, passado: true }))
);
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        <div class="flex flex-col items-center">
          <span class="text-gray-900 dark:text-white">Próximos Eventos</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-red-600"></div>
            <div class="w-1/2 bg-green-600"></div>
          </div>
        </div>
      </template>

      <template #desc>
        <span class="text-slate-600 dark:text-gray-300">
          Não percas as nossas próximas festas e eventos! Vem divertir-te
          connosco!
        </span>
      </template>
    </LandingSectionhead>

    <!-- Eventos Futuros -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto mt-12 px-4"
    >
      <div
        v-for="evento in eventosFuturos"
        :key="evento.slug"
        class="bg-white dark:bg-zinc-800 rounded-2xl shadow-md overflow-hidden flex flex-col"
      >
        <div class="w-full aspect-square overflow-hidden">
          <NuxtImg
            :src="evento.imagem"
            :alt="evento.nome"
            format="auto"
            placeholder="blur"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="p-4 flex flex-col justify-between flex-1">
          <div class="flex-1 flex flex-col">
            <h2
              class="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug min-h-[3rem]"
            >
              {{ evento.nome }}
            </h2>
            <p class="text-sm text-gray-700 dark:text-gray-400 mb-2">
              <strong>Data:</strong> {{ evento.data }}
            </p>
            <p
              class="text-gray-800 dark:text-gray-300 text-sm line-clamp-3 flex-grow"
            >
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

    <!-- Eventos Passados -->
    <div
      v-if="eventosPassados.length"
      class="max-w-screen-xl mx-auto mt-16 px-4"
    >
      <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
        Eventos Passados
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="evento in eventosPassados"
          :key="evento.slug"
          class="bg-white dark:bg-zinc-800 rounded-2xl shadow-md overflow-hidden flex flex-col opacity-80 grayscale-[30%]"
        >
          <div class="w-full aspect-square overflow-hidden">
            <NuxtImg
              :src="evento.imagem"
              :alt="evento.nome"
              format="auto"
              placeholder="blur"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-4 flex flex-col justify-between flex-1">
            <div class="flex-1 flex flex-col">
              <h2
                class="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug min-h-[3rem]"
              >
                {{ evento.nome }}
              </h2>
              <p class="text-sm text-gray-700 dark:text-gray-400 mb-2">
                <strong>Data:</strong> {{ evento.data }}
              </p>
              <p
                class="text-gray-800 dark:text-gray-300 text-sm line-clamp-3 flex-grow"
              >
                {{ evento.descricao }}
              </p>
            </div>

            <div class="mt-4">
              <NuxtLink
                :to="`/eventos/${evento.slug}`"
                class="bg-red-800 text-white hover:bg-black hover:text-white border border-red-800 hover:border-white w-full sm:w-auto inline-block text-center px-4 py-2 rounded"
              >
                Ver evento →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
