<script setup>
definePageMeta({
  layout: "default",
});

import { computed } from "vue";
import { parseEventDate, useEvents } from "~/modules/events/useEvents";
const { eventos: eventosOriginais } = await useEvents();

const hoje = new Date();
hoje.setHours(0, 0, 0, 0);

const eventosFuturos = computed(() =>
  eventosOriginais.value
    .filter((e) => parseEventDate(e.data) >= hoje)
    .sort((a, b) => parseEventDate(a.data) - parseEventDate(b.data))
);

const eventosPassados = computed(() =>
  eventosOriginais.value
    .filter((e) => parseEventDate(e.data) < hoje)
    .sort((a, b) => parseEventDate(b.data) - parseEventDate(a.data))
    .map((e) => ({ ...e, passado: true }))
);
</script>

<template>
  <LandingContainer>
    <CmsManagedPageHeader page-slug="eventos" fallback-title="Próximos Eventos" fallback-description="Não percas as nossas próximas festas e eventos! Vem divertir-te connosco!" />

    <!-- Eventos Futuros -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full mx-auto mt-12"
    >
      <div
        v-for="evento in eventosFuturos"
        :key="evento.slug"
        class="card-surface overflow-hidden flex flex-col hover:shadow-card-hover transition-shadow duration-300"
      >
        <div class="w-full aspect-square overflow-hidden">
          <SiteImage
            :src="evento.imagem"
            :alt="evento.nome"
            preset="card"
            width="480"
            height="480"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="p-4 flex flex-col justify-between flex-1">
          <div class="flex-1 flex flex-col">
            <h2
              class="text-fluid-xl font-bold text-neutral-900 mb-2 leading-snug min-h-[3rem]"
            >
              {{ evento.nome }}
            </h2>
            <p class="text-fluid-sm text-neutral-600 mb-2">
              <strong>Data:</strong> {{ evento.data }}
            </p>
            <p
              class="text-neutral-900 text-fluid-sm line-clamp-3 flex-grow"
            >
              {{ evento.descricao }}
            </p>
          </div>

          <div class="mt-4">
            <NuxtLink
              :to="`/eventos/${evento.slug}`"
              class="bg-secondary-800 text-white hover:bg-secondary-900 hover:text-white border border-secondary-800 hover:border-secondary-900 w-full sm:w-auto inline-flex items-center justify-center text-center px-5 py-[9px] rounded-button font-semibold"
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
      class="w-full mx-auto mt-16"
    >
      <h3 class="text-fluid-lg font-semibold text-neutral-600 mb-6">
        Eventos Passados
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="evento in eventosPassados"
          :key="evento.slug"
          class="card-surface overflow-hidden flex flex-col opacity-80 grayscale-[30%]"
        >
          <div class="w-full aspect-square overflow-hidden">
            <SiteImage
              :src="evento.imagem"
              :alt="evento.nome"
              preset="card"
              width="480"
              height="480"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-4 flex flex-col justify-between flex-1">
            <div class="flex-1 flex flex-col">
              <h2
                class="text-fluid-xl font-bold text-neutral-900 mb-2 leading-snug min-h-[3rem]"
              >
                {{ evento.nome }}
              </h2>
              <p class="text-fluid-sm text-neutral-600 mb-2">
                <strong>Data:</strong> {{ evento.data }}
              </p>
              <p
                class="text-neutral-900 text-fluid-sm line-clamp-3 flex-grow"
              >
                {{ evento.descricao }}
              </p>
            </div>

            <div class="mt-4">
              <NuxtLink
                :to="`/eventos/${evento.slug}`"
                class="bg-secondary-800 text-white hover:bg-secondary-900 hover:text-white border border-secondary-800 hover:border-secondary-900 w-full sm:w-auto inline-flex items-center justify-center text-center px-5 py-[9px] rounded-button font-semibold"
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
