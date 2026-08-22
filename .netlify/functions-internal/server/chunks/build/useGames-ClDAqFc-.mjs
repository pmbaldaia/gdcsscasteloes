import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
import { computed } from 'vue';

function toLegacyJornadas(rows) {
  return Object.fromEntries(rows.map((game, index) => {
    var _a;
    return [String((_a = game.id) != null ? _a : index + 1), [game]];
  }));
}
async function useGames() {
  const gamesRepository = createPublicRepository("games");
  const teamsRepository = createPublicRepository("teams");
  const [{ data: games }, { data: teams }] = await Promise.all([
    useAsyncData("gdcss-public-games", () => gamesRepository.list(), { default: () => [] }),
    useAsyncData("gdcss-public-teams", () => teamsRepository.list(), { default: () => [] })
  ]);
  return {
    jornadas: computed(() => toLegacyJornadas(games.value || [])),
    teams
  };
}

export { useGames as u };
//# sourceMappingURL=useGames-ClDAqFc-.mjs.map
