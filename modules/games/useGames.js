import { createPublicRepository } from '~/modules/core/repository/public.repository'

function toLegacyJornadas(rows) {
  return Object.fromEntries(rows.map((game, index) => [String(game.id ?? index + 1), [game]]))
}

export async function useGames() {
  const gamesRepository = createPublicRepository('games')
  const teamsRepository = createPublicRepository('teams')
  const [{ data: games }, { data: teams }] = await Promise.all([
    useAsyncData('gdcss-public-games', () => gamesRepository.list(), { default: () => [] }),
    useAsyncData('gdcss-public-teams', () => teamsRepository.list(), { default: () => [] }),
  ])

  return {
    jornadas: computed(() => toLegacyJornadas(games.value || [])),
    teams,
  }
}
