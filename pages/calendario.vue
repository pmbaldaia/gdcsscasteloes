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

const allGames = [];
const gameDates = [
  "2025-05-15",
  "2025-05-17",
  "2025-05-20",
  "2025-05-22",
  "2025-05-24",
  "2025-05-26",
  "2025-05-28",
];
const gameTimes = [
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];
const locations = [
  "Estádio A",
  "Estádio B",
  "Estádio C",
  "Estádio D",
  "Estádio E",
  "Estádio F",
  "Estádio G",
];

let matchIndex = 0;

for (let jornada = 1; jornada <= 30; jornada++) {
  const usedTeams = new Set();
  let localIndex = 0;
  let dateIndex = 0;
  for (let i = 0; i < 7; i++) {
    let t1Index, t2Index;
    do {
      t1Index = (matchIndex + i * 2) % teams.length;
    } while (usedTeams.has(t1Index));

    usedTeams.add(t1Index);

    do {
      t2Index = (matchIndex + i * 2 + 1) % teams.length;
    } while (usedTeams.has(t2Index) || t2Index === t1Index);

    usedTeams.add(t2Index);

    allGames.push({
      jornada,
      date: gameDates[dateIndex % gameDates.length],
      time: gameTimes[i % gameTimes.length],
      location: locations[localIndex % locations.length],
      teams: [teams[t1Index].name, teams[t2Index].name],
    });

    dateIndex++;
    localIndex++;
  }

  matchIndex += 7;
}

const selectedJornada = ref(1);

const filteredGames = computed(() =>
  allGames.filter((game) => game.jornada === selectedJornada.value)
);
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Calendário de Jogos</template>
      <template v-slot:desc>
        Consulta os próximos jogos e as equipas participantes.
      </template>
    </LandingSectionhead>

    <div class="max-w-7xl mx-auto px-4 mt-12">
      <h2 class="text-3xl font-extrabold text-center text-gray-900 mb-4">
        Jornada {{ selectedJornada }}
      </h2>

      <div class="flex justify-center mb-10">
        <select
          v-model="selectedJornada"
          class="text-lg font-medium rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option v-for="j in 30" :key="j" :value="j">Jornada {{ j }}</option>
        </select>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
      >
        <div
          v-for="(game, index) in filteredGames"
          :key="index"
          class="bg-white p-4 rounded-2xl shadow-lg text-center w-full max-w-xs"
        >
          <h3 class="text-xl font-bold text-gray-800">{{ game.date }}</h3>

          <div class="flex justify-center items-center gap-6 mt-4">
            <div class="flex flex-col items-center">
              <img
                :src="teams.find((t) => t.name === game.teams[0]).logo"
                class="w-16 h-16 object-contain mb-2"
              />
              <p class="text-sm font-medium text-gray-700 text-center">
                {{ game.teams[0] }}
              </p>
            </div>

            <span class="text-2xl font-bold text-gray-800">vs</span>

            <div class="flex flex-col items-center">
              <img
                :src="teams.find((t) => t.name === game.teams[1]).logo"
                class="w-16 h-16 object-contain mb-2"
              />
              <p class="text-sm font-medium text-gray-700 text-center">
                {{ game.teams[1] }}
              </p>
            </div>
          </div>

          <p class="mt-4 text-gray-600 text-lg">{{ game.time }}</p>
          <p class="text-sm text-gray-400">{{ game.location }}</p>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
