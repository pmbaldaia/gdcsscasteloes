<script setup lang="ts">
definePageMeta({ layout: 'admin' })

import { gamesService } from '~/modules/games/service/games.service'
import { teamsService } from '~/modules/teams/service/teams.service'

const baseGamesService = gamesService()
const teamService = teamsService()
const teams = ref<any[]>([])
const teamOptions = computed(() =>
  [...teams.value]
    .sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'pt-PT'))
    .map(team => ({ value: team.name, label: team.name }))
)

const fields = computed(() => [
  { key: 'season', label: 'Época', type: 'select', filterable: true, options: [
    { value: '2025/2026', label: '2025/2026' },
    { value: '2026/2027', label: '2026/2027' }
  ] },
  { key: 'jornada', label: 'Jornada' },
  { key: 'date', label: 'Data', type: 'date' },
  { key: 'time', label: 'Hora', type: 'time' },
  { key: 'team1', label: 'Equipa 1', type: 'select', options: teamOptions.value },
  { key: 'team2', label: 'Equipa 2', type: 'select', options: teamOptions.value },
  { key: 'venue', label: 'Estádio / Campo', required: false },
  { key: 'address', label: 'Rua / Morada', required: false },
  { key: 'volta', label: 'Volta', type: 'number' },
  { key: 'status', label: 'Estado do jogo', type: 'select', options: [
    { value: 'scheduled', label: 'Agendado' },
    { value: 'finished', label: 'Terminado' },
    { value: 'cancelled', label: 'Cancelado' },
    { value: 'draft', label: 'Rascunho' }
  ] },
  { key: 'publicationStatus', label: 'Publicação', type: 'select', options: [
    { value: 'published', label: 'Publicado' },
    { value: 'draft', label: 'Não publicado' }
  ] }
] as any[])

function toAdminGame(game: any) {
  return {
    ...game,
    team1: Array.isArray(game.teams) ? (game.teams[0] || '') : '',
    team2: Array.isArray(game.teams) ? (game.teams[1] || '') : ''
  }
}

function toStoredGame(payload: any) {
  if (!payload.team1 || !payload.team2) {
    throw new Error('Seleciona as duas equipas do jogo.')
  }
  if (String(payload.team1) === String(payload.team2)) {
    throw new Error('A Equipa 1 e a Equipa 2 têm de ser diferentes.')
  }

  const { team1, team2, ...rest } = payload
  return {
    ...rest,
    teams: [team1, team2]
  }
}

const service = {
  async list() {
    const games = await baseGamesService.list()
    return games.map(toAdminGame)
  },
  async create(payload: any) {
    return baseGamesService.create(toStoredGame(payload))
  },
  async update(id: string | number, payload: any) {
    return baseGamesService.update(id, toStoredGame(payload))
  },
  async remove(id: string | number) {
    return baseGamesService.remove(id)
  }
}

onMounted(async () => {
  teams.value = await teamService.list()
})
</script>

<template>
  <CmsResourceManager
    :service="service"
    title="Jogos e jornadas"
    description="Gere o calendário por época. Ao adicionar ou editar um jogo, escolhe as duas equipas a partir das equipas registadas no CMS."
    :fields="fields"
    :columns="['season','jornada','date','time','team1','team2','venue','address','status','publicationStatus']"
    publish-key="publicationStatus"
    :show-search="false"
    :default-filters="{ season: '2026/2027' }"
  />
</template>
