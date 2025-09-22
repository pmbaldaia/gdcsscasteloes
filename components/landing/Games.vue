<script setup>
import { computed } from "vue";
import jornadas from "~/data/jornadas";
import teams from "~/data/equipas";

function parseGameDate(game) {
  return new Date(`${game.date}T${game.time}:00`);
}

function formatDate(game) {
  const date = parseGameDate(game);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatTime(game) {
  const date = parseGameDate(game);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

const now = new Date();

const nextGame = computed(() => {
  const allGames = Object.values(jornadas)
    .flat()
    .sort((a, b) => parseGameDate(a) - parseGameDate(b));

  return allGames.find((game) => parseGameDate(game) >= now) || null;
});

// Computed para controlar se o badge da volta deve aparecer
const showVoltaBadge = computed(
  () => nextGame.value && nextGame.value.id !== 4
);
</script>

<template>
  <div class="max-w-3xl mx-auto mt-10">
    <div v-if="nextGame" class="text-center relative">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        🎯 Próximo Jogo
      </h3>

      <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        <span class="font-semibold">
          {{ nextGame.jornada }}
        </span>
        • <span class="font-semibold">{{ formatDate(nextGame) }}</span> às
        <span class="font-semibold">{{ formatTime(nextGame) }}</span>
      </p>

      <div class="flex justify-center gap-12 items-center">
        <!-- Time 1 -->
        <div class="flex flex-col items-center w-32">
          <img
            :src="teams.find((t) => t.name === nextGame.teams[0])?.logo"
            class="w-20 h-20 object-contain mb-3"
          />
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {{ nextGame.teams[0] }}
          </p>
        </div>

        <span class="text-2xl font-extrabold text-gray-900 dark:text-white"
          >vs</span
        >

        <!-- Time 2 -->
        <div class="flex flex-col items-center w-32">
          <img
            :src="teams.find((t) => t.name === nextGame.teams[1])?.logo"
            class="w-20 h-20 object-contain mb-3"
          />
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {{ nextGame.teams[1] }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-else
      class="text-center text-gray-700 dark:text-gray-300 py-10 text-xl"
    >
      🚫 Não há próximos jogos agendados.
    </div>
  </div>
</template>
