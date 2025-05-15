<script setup>
definePageMeta({
  layout: "landing",
});

import { ref, computed } from "vue";

const teams = [
  { name: "GRD Rans", logo: "/logos/grdRans.png" },
  { name: "FC Boelhe", logo: "/logos/fcBoelhe.png" },
  { name: "GDCSS Castelões", logo: "/logos/gdcssCasteloes.png" },
  { name: "AC Croca", logo: "/logos/acCroca.png" },
  { name: "ACDFC Calçada", logo: "/logos/acdfcCalcada.png" },
  { name: "Cabeça Santa", logo: "/logos/cabecaSanta.png" },
  { name: "Rio Mau FC", logo: "/logos/rioMau.png" },
  { name: "Paço de Sousa", logo: "/logos/pacoSousa.png" },
  { name: "ADCR Eja", logo: "/logos/adcREja.png" },
  { name: "ADC Lodares", logo: "/logos/adcLodares.png" },
  { name: "UD Abragonense", logo: "/logos/udAbragonense.png" },
  { name: "Desp. Canelas", logo: "/logos/despCanelas.png" },
  { name: "SC Lagares", logo: "/logos/scLagares.png" },
];

const jornadas = {
  1: [
    {
      date: "2024-09-01",
      time: "15:00",
      location: "Estádio A",
      teams: ["GRD Rans", "FC Boelhe"],
    },
    {
      date: "2024-09-01",
      time: "15:00",
      location: "Estádio B",
      teams: ["GDCSS Castelões", "AC Croca"],
    },
    {
      date: "2024-09-01",
      time: "15:00",
      location: "Estádio C",
      teams: ["ACDFC Calçada", "Cabeça Santa"],
    },
    {
      date: "2024-09-01",
      time: "15:00",
      location: "Estádio D",
      teams: ["Rio Mau FC", "Paço de Sousa"],
    },
    {
      date: "2024-09-01",
      time: "15:00",
      location: "Estádio E",
      teams: ["ADCR Eja", "ADC Lodares"],
    },
    {
      date: "2024-09-01",
      time: "15:00",
      location: "Estádio F",
      teams: ["UD Abragonense", "Desp. Canelas"],
    },
    {
      date: "2024-09-01",
      time: "15:00",
      location: "Estádio G",
      teams: ["SC Lagares", "GRD Rans"],
    },
  ],
  2: [
    {
      date: "2024-09-08",
      time: "15:00",
      location: "Estádio A",
      teams: ["FC Boelhe", "GDCSS Castelões"],
    },
    {
      date: "2024-09-08",
      time: "15:00",
      location: "Estádio B",
      teams: ["AC Croca", "ACDFC Calçada"],
    },
    {
      date: "2024-09-08",
      time: "15:00",
      location: "Estádio C",
      teams: ["Cabeça Santa", "Rio Mau FC"],
    },
    {
      date: "2024-09-08",
      time: "15:00",
      location: "Estádio D",
      teams: ["Paço de Sousa", "ADCR Eja"],
    },
    {
      date: "2024-09-08",
      time: "15:00",
      location: "Estádio E",
      teams: ["ADC Lodares", "UD Abragonense"],
    },
    {
      date: "2024-09-08",
      time: "15:00",
      location: "Estádio F",
      teams: ["Desp. Canelas", "SC Lagares"],
    },
    {
      date: "2024-09-08",
      time: "15:00",
      location: "Estádio G",
      teams: ["GRD Rans", "FC Boelhe"],
    },
  ],
  3: [
    {
      date: "2025-02-02",
      time: "17:00",
      location: "Estádio A",
      teams: ["GRD Rans", "Paço de Sousa"],
    },
    {
      date: "2025-02-02",
      time: "17:00",
      location: "Estádio B",
      teams: ["Rio Mau FC", "ADC Lodares"],
    },
    {
      date: "2025-02-02",
      time: "17:00",
      location: "Estádio C",
      teams: ["UD Abragonense", "ACDFC Calçada"],
    },
    {
      date: "2025-02-02",
      time: "17:00",
      location: "Estádio D",
      teams: ["ADCR Eja", "SC Lagares"],
    },
    {
      date: "2025-02-02",
      time: "17:00",
      location: "Estádio E",
      teams: ["Desp. Canelas", "Cabeça Santa"],
    },
    {
      date: "2025-02-02",
      time: "17:00",
      location: "Estádio F",
      teams: ["GDCSS Castelões", "FC Boelhe"],
    },
    {
      date: "2025-02-02",
      time: "17:00",
      location: "Estádio G",
      teams: ["AC Croca", "GRD Rans"],
    },
  ],
};

const selectedJornada = ref(1);
const filteredGames = computed(() => jornadas[selectedJornada.value] || []);
</script>
<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        <span class="text-gray-900 dark:text-white">Calendário de Jogos</span>
      </template>
      <template #desc>
        <span class="text-slate-600 dark:text-gray-300">
          Consulta os próximos jogos e as equipas participantes.
        </span>
      </template>
    </LandingSectionhead>

    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="flex justify-center mb-10">
        <div class="relative">
          <select
            v-model="selectedJornada"
            class="appearance-none text-lg font-medium rounded-xl border border-white bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-5 py-3 shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
          >
            <option v-for="j in 26" :key="j" :value="j">Jornada {{ j }}</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      >
        <div
          v-for="(game, index) in filteredGames"
          :key="index"
          class="bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-lg text-center w-full border border-white"
        >
          <h3
            class="text-lg sm:text-xl font-bold text-gray-800 dark:text-white"
          >
            {{ game.date }}
          </h3>

          <div class="flex justify-center gap-4 mt-4 items-center">
            <div class="flex flex-col items-center w-24 sm:w-28 text-center">
              <img
                :src="teams.find((t) => t.name === game.teams[0])?.logo"
                class="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-2"
              />
              <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ game.teams[0] }}
              </p>
            </div>

            <div class="flex items-center justify-center h-full">
              <span
                class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white"
              >
                vs
              </span>
            </div>

            <div class="flex flex-col items-center w-24 sm:w-28 text-center">
              <img
                :src="teams.find((t) => t.name === game.teams[1])?.logo"
                class="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-2"
              />
              <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ game.teams[1] }}
              </p>
            </div>
          </div>

          <p class="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            {{ game.time }}
          </p>
          <p class="text-sm text-gray-400 dark:text-gray-500">
            {{ game.location }}
          </p>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
