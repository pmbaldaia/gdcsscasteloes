import fallbackGames from '~/data/jornadas'
import fallbackTeams from '~/data/equipas'
import { createPublicRepository } from '~/modules/core/repository/public.repository'

function toLegacyJornadas(rows) {
  return Object.fromEntries(rows.map((game, index) => [String(game.id ?? index + 1), [game]]))
}

export async function useGames() {
  const gameFallback = Object.values(fallbackGames).flat()
  const gamesRepository = createPublicRepository('games', gameFallback)
  const teamsRepository = createPublicRepository('teams', fallbackTeams)
  const [{ data: games }, { data: teams }] = await Promise.all([
    useAsyncData('gdcss-public-games', () => gamesRepository.list(), { default: () => gameFallback }),
    useAsyncData('gdcss-public-teams', () => teamsRepository.list(), { default: () => fallbackTeams }),
  ])
  return { jornadas: computed(() => toLegacyJornadas(games.value || gameFallback)), teams }
}
