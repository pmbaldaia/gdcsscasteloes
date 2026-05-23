<script setup>
definePageMeta({
  layout: "admin",
});

import { computed } from "vue";
import equipas from "~/data/equipas";
import jornadas from "~/data/jornadas";
import { categories as categorias } from "~/data/galeria";
import { eventos } from "~/data/eventos";
import socios from "~/data/socios";

const totalEquipas = computed(() => equipas.length);
const totalJornadas = computed(() => Object.keys(jornadas).length);
const totalCategorias = computed(() => categorias.length);
const totalEventos = computed(() => eventos.length);
const totalSocios = computed(() => socios.length);
</script>

<template>
  <div
    class="p-8 bg-white rounded-xl shadow transition-colors space-y-8"
  >
    <h1 class="text-fluid-3xl font-bold text-gray-800">
      Painel de Administração
    </h1>
    <p class="w-full text-gray-600 text-fluid-lg">
      Usa o menu lateral para gerir os dados da aplicação. Aqui tens um resumo
      rápido:
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div
        class="bg-blue-600 text-white rounded-lg p-6 shadow hover:bg-blue-700 transition cursor-pointer"
      >
        <h2 class="text-fluid-xl font-semibold mb-2">Sócios</h2>
        <p class="text-fluid-4xl font-bold">{{ totalSocios }}</p>
        <p class="mt-1 text-fluid-sm">Sócios registados</p>
        <NuxtLink
          to="/admin/socios"
          class="mt-4 inline-block underline text-white hover:text-gray-200"
          >Gerir Sócios</NuxtLink
        >
      </div>

      <div
        class="bg-indigo-600 text-white rounded-lg p-6 shadow hover:bg-indigo-700 transition cursor-pointer"
      >
        <h2 class="text-fluid-xl font-semibold mb-2">Equipas</h2>
        <p class="text-fluid-4xl font-bold">{{ totalEquipas }}</p>
        <p class="mt-1 text-fluid-sm">Equipas registadas</p>
        <NuxtLink
          to="/admin/equipas"
          class="mt-4 inline-block underline text-white hover:text-gray-200"
          >Gerir Equipas</NuxtLink
        >
      </div>

      <div
        class="bg-pink-600 text-white rounded-lg p-6 shadow hover:bg-pink-700 transition cursor-pointer"
      >
        <h2 class="text-fluid-xl font-semibold mb-2">Jornadas</h2>
        <p class="text-fluid-4xl font-bold">{{ totalJornadas }}</p>
        <p class="mt-1 text-fluid-sm">Jornadas registadas</p>
        <NuxtLink
          to="/admin/jornadas"
          class="mt-4 inline-block underline text-white hover:text-gray-200"
          >Gerir Jornadas</NuxtLink
        >
      </div>

      <div
        class="bg-yellow-600 text-white rounded-lg p-6 shadow hover:bg-yellow-700 transition cursor-pointer"
      >
        <h2 class="text-fluid-xl font-semibold mb-2">Eventos</h2>
        <p class="text-fluid-4xl font-bold">{{ totalEventos }}</p>
        <p class="mt-1 text-fluid-sm">Eventos registados</p>
        <NuxtLink
          to="/admin/eventos"
          class="mt-4 inline-block underline text-white hover:text-gray-200"
          >Gerir Eventos</NuxtLink
        >
      </div>

      <div
        class="bg-green-600 text-white rounded-lg p-6 shadow hover:bg-green-700 transition cursor-pointer"
      >
        <h2 class="text-fluid-xl font-semibold mb-2">Galeria</h2>
        <p class="text-fluid-4xl font-bold">{{ totalCategorias }}</p>
        <p class="mt-1 text-fluid-sm">Categorias na galeria</p>
        <NuxtLink
          to="/admin/galeria"
          class="mt-4 inline-block underline text-white hover:text-gray-200"
          >Gerir Galeria</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
