<script setup>
definePageMeta({ layout: 'default' })

import { useGames } from '~/modules/games/useGames'

const { jornadas, teams } = await useGames()

const games = computed(() =>
  Object.values(jornadas.value || {})
    .flat()
    .sort(
      (a, b) =>
        new Date(`${a.date}T${a.time || '00:00'}`) -
        new Date(`${b.date}T${b.time || '00:00'}`),
    ),
)

const seasons = computed(() =>
  [...new Set(games.value.map(game => game.season).filter(Boolean))]
    .sort((a, b) => {
      const yearA = Number(String(a).split('/')[0]) || 0
      const yearB = Number(String(b).split('/')[0]) || 0
      return yearB - yearA
    }),
)

const selectedSeason = ref(seasons.value[0] || '2025/2026')

watch(
  seasons,
  (available) => {
    if (available.length && !available.includes(selectedSeason.value)) {
      selectedSeason.value = available[0]
    }
  },
  { immediate: true },
)

const filteredGames = computed(() =>
  games.value.filter(game => game.season === selectedSeason.value),
)

const teamLogo = (name) =>
  teams.value?.find(team => team.name === name)?.logo || '/img/logowbg.webp'

const formatDate = (value) => {
  const date = new Date(`${value}T00:00:00`)
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString('pt-PT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
}

const gameStatus = (status) =>
  ({
    finished: 'Terminado',
    scheduled: 'Agendado',
    cancelled: 'Cancelado',
    postponed: 'Adiado',
    draft: 'Rascunho',
  })[status] || 'Agendado'

</script>

<template>
  <LandingContainer>
    <CmsManagedPageHeader page-slug="calendario" fallback-title="Calendário" fallback-description="Consulta o calendário oficial de jogos do clube por época." />

    <div class="mx-auto mt-10 mb-16 w-full max-w-5xl">
      <div class="mb-7 flex flex-col gap-4 rounded-xl border border-neutral-200 bg-surface p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600">
            Calendário
          </p>
          <h2 class="mt-1 text-xl font-bold text-neutral-900">
            Época {{ selectedSeason }}
          </h2>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center md:justify-end">
          <span class="inline-flex w-fit items-center rounded-full bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-600">
            {{ filteredGames.length }}
            {{ filteredGames.length === 1 ? 'jogo' : 'jogos' }}
          </span>

          <label class="relative block min-w-[190px]">
            <span class="sr-only">Selecionar época</span>
            <select
              v-model="selectedSeason"
              class="w-full appearance-none rounded-lg border border-neutral-200 bg-surface px-4 py-2.5 pr-10 text-sm font-semibold text-neutral-900 outline-none transition focus:border-primary-700 focus:ring-2 focus:ring-primary-700 focus:ring-opacity-10"
            >
              <option v-for="season in seasons" :key="season" :value="season">
                {{ season }}
              </option>
            </select>
            <Icon
              name="lucide:chevron-down"
              class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600"
              size="17"
            />
          </label>
        </div>
      </div>

      <LandingSeasonNotice
        v-if="!filteredGames.length"
        :season="selectedSeason"
        title="Calendário em preparação"
        description="O calendário será disponibilizado assim que existirem jogos publicados para esta época."
      />

      <div v-else class="space-y-4">
        <article
          v-for="game in filteredGames"
          :key="game.id"
          class="card-surface grid gap-4 p-5 md:grid-cols-[160px_1fr_110px] md:items-center"
        >
          <div>
            <strong class="text-neutral-900">{{ game.jornada }}</strong>
            <p class="text-sm text-neutral-600">
              {{ formatDate(game.date) }} · {{ game.time || '—' }}
            </p>
          </div>

          <div class="flex min-w-0 flex-col items-center gap-2">
            <div class="flex w-full items-center justify-center gap-5">
              <div class="flex min-w-0 flex-1 items-center justify-end gap-3 text-right">
                <span class="font-semibold">{{ game.teams?.[0] }}</span>
                <SiteImage
                  :src="teamLogo(game.teams?.[0])"
                  :alt="`Logo ${game.teams?.[0] || ''}`"
                  preset="badge"
                  fallback="/img/logowbg.webp"
                  class="brand-logo-original h-12 w-12 shrink-0 object-contain"
                  loading="lazy"
                />
              </div>

              <strong class="shrink-0">vs</strong>

              <div class="flex min-w-0 flex-1 items-center gap-3">
                <SiteImage
                  :src="teamLogo(game.teams?.[1])"
                  :alt="`Logo ${game.teams?.[1] || ''}`"
                  preset="badge"
                  fallback="/img/logowbg.webp"
                  class="brand-logo-original h-12 w-12 shrink-0 object-contain"
                  loading="lazy"
                />
                <span class="font-semibold">{{ game.teams?.[1] }}</span>
              </div>
            </div>

            <p
              v-if="game.venue || game.address"
              class="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center text-sm text-neutral-600 md:flex-nowrap md:whitespace-nowrap"
            >
              <span v-if="game.venue" class="inline-flex items-center gap-1.5">
                <Icon name="lucide:map-pin" size="15" class="shrink-0" />
                <span>{{ game.venue }}</span>
              </span>
              <span v-if="game.venue && game.address" aria-hidden="true">·</span>
              <span v-if="game.address">{{ game.address }}</span>
            </p>
          </div>

          <div class="text-center md:text-right">
            <span class="inline-flex rounded-full bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-600">
              {{ gameStatus(game.status) }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </LandingContainer>
</template>
