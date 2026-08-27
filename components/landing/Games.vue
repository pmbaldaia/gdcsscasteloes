<script setup>
import { computed } from "vue";
import { useGames } from "~/modules/games/useGames";
const { jornadas, teams } = await useGames();


function teamLogo(name) {
  return teams.value?.find((team) => team.name === name)?.logo || "/img/logowbg.webp";
}

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
  const allGames = Object.values(jornadas.value)
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
    <div v-if="nextGame" class="card-surface p-6 sm:p-8 text-center relative">
      <h3 class="text-fluid-2xl font-bold text-neutral-900 mb-3">
        🎯 Próximo Jogo
      </h3>

      <p class="text-fluid-lg text-neutral-600 mb-6 leading-relaxed">
        <span class="font-semibold">
          {{ nextGame.jornada }}
        </span>
        • <span class="font-semibold">{{ formatDate(nextGame) }}</span> às
        <span class="font-semibold">{{ formatTime(nextGame) }}</span>
      </p>

      <div class="flex justify-center gap-12 items-center">
        <!-- Time 1 -->
        <div class="flex flex-col items-center w-32">
          <SiteImage
            :src="teamLogo(nextGame.teams[0])"
            :alt="`Logo ${nextGame.teams[0]}`"
            preset="badge"
            fallback="/img/logowbg.webp"
            width="80"
            height="80"
            sizes="80px"
            loading="lazy"
            class="brand-logo-original w-20 h-20 object-contain mb-3"
          />
          <p class="text-fluid-lg font-semibold text-neutral-900">
            {{ nextGame.teams[0] }}
          </p>
        </div>

        <span class="text-fluid-2xl font-extrabold text-neutral-900"
          >vs</span
        >

        <!-- Time 2 -->
        <div class="flex flex-col items-center w-32">
          <SiteImage
            :src="teamLogo(nextGame.teams[1])"
            :alt="`Logo ${nextGame.teams[1]}`"
            preset="badge"
            fallback="/img/logowbg.webp"
            width="80"
            height="80"
            sizes="80px"
            loading="lazy"
            class="brand-logo-original w-20 h-20 object-contain mb-3"
          />
          <p class="text-fluid-lg font-semibold text-neutral-900">
            {{ nextGame.teams[1] }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-else
      class="text-center text-neutral-600 py-10 text-fluid-xl"
    >
      🚫 Não há próximos jogos agendados.
    </div>
  </div>
</template>
