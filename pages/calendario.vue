<script setup>
definePageMeta({
  layout: "default",
});

import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import jornadas from "~/data/jornadas";
import teams from "~/data/equipas";

const open = ref(false);
const dropdownRef = ref(null);
const availableVoltas = ["Todos", "1ª Volta", "2ª Volta"];
const selectedVolta = ref("Todos");

function parseGameDate(game) {
  return new Date(`${game.date}T${game.time}:00`);
}

function formatDate(game) {
  const date = parseGameDate(game);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

const filteredGames = computed(() => {
  const allGames = Object.values(jornadas)
    .flat()
    .sort((a, b) => parseGameDate(a) - parseGameDate(b));
  if (selectedVolta.value === "Todos") return allGames;
  const voltaNumber = selectedVolta.value === "1ª Volta" ? 1 : 2;
  return allGames.filter((game) => game.volta === voltaNumber);
});

const gamesWithStatus = computed(() => {
  const now = new Date();
  const gamesWithPastInfo = filteredGames.value.map((game) => ({
    ...game,
    past: parseGameDate(game) < now,
  }));
  return gamesWithPastInfo.sort((a, b) => {
    if (a.past === b.past) return 0;
    return a.past ? 1 : -1;
  });
});

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target))
    open.value = false;
};

onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() =>
  document.removeEventListener("click", handleClickOutside)
);
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        <div class="flex flex-col items-center">
          <span class="text-gray-900 dark:text-white">Calendário de Jogos</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-red-600"></div>
            <div class="w-1/2 bg-green-600"></div>
          </div>
        </div>
      </template>
      <template #desc>
        <span class="text-slate-600 dark:text-gray-300">
          ⚽ Prepara-te para a ação! Explora o calendário de jogos e acompanha a
          tua equipa rumo à vitória! 🏆
        </span>
      </template>
    </LandingSectionhead>

    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="flex justify-center mb-10">
        <div class="relative w-64" ref="dropdownRef">
          <button
            @click="open = !open"
            class="w-full text-lg font-medium rounded-xl border border-white bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-5 py-3 shadow-md focus:ring-2 focus:ring-blue-500 transition-all duration-300 flex justify-between items-center"
          >
            <span>{{ selectedVolta }}</span>
            <svg
              class="w-5 h-5 transform transition-transform"
              :class="{ 'rotate-180': open }"
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
          </button>

          <ul
            v-if="open"
            class="absolute z-50 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto"
          >
            <li
              v-for="v in availableVoltas"
              :key="v"
              @click="
                selectedVolta = v;
                open = false;
              "
              class="px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-gray-800 dark:text-white"
            >
              {{ v }}
            </li>
          </ul>
        </div>
      </div>

      <div
        v-if="filteredGames.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      >
        <div
          v-for="(game, index) in gamesWithStatus"
          :key="index"
          :class="[
            'relative bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg text-center w-full',
            game.past ? 'opacity-20' : 'opacity-100',
          ]"
        >
          <div
            v-if="game.jornada !== 'AF Porto Taça 25/26'"
            class="absolute top-2 right-2 text-white text-xs px-2 py-1 rounded-full"
            :style="{
              backgroundColor: game.volta === 1 ? '#c53030' : '#2f855a',
            }"
          >
            {{ game.volta }}ª Volta
          </div>

          <h4 class="text-sm text-gray-400 dark:text-gray-500 mb-1">
            {{ game.jornada }}
          </h4>

          <span
            class="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300"
          >
            {{ formatDate(game) }}
          </span>

          <div class="flex justify-center gap-4 mt-4 items-center">
            <div
              class="flex flex-col items-center w-24 sm:w-28 text-center min-h-[110px]"
            >
              <img
                :src="teams.find((t) => t.name === game.teams[0])?.logo"
                class="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-2"
              />
              <p
                class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight"
              >
                {{ game.teams[0] }}
              </p>
            </div>

            <div class="flex items-center justify-center h-full">
              <span
                class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white"
                >vs</span
              >
            </div>

            <div
              class="flex flex-col items-center w-24 sm:w-28 text-center min-h-[110px]"
            >
              <img
                :src="teams.find((t) => t.name === game.teams[1])?.logo"
                class="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-2"
              />
              <p
                class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight"
              >
                {{ game.teams[1] }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="flex flex-col items-center justify-center py-8 space-y-6 text-center"
      >
        <img
          v-if="selectedVolta === '2ª Volta'"
          src="/img/bola.svg"
          alt="Bola animada"
          class="w-32 h-32 animate-bounce dark:invert"
        />
        <div class="text-gray-700 dark:text-gray-300 text-lg max-w-md">
          {{
            selectedVolta === "2ª Volta"
              ? "Os jogos da 2ª volta ainda não existem de momento!"
              : "Ainda não existem jogos disponíveis."
          }}
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
