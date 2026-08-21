import { assembleiaGeral as fallbackAssembly, direcao as fallbackBoard, conselhoFiscal as fallbackFiscal, equipaTecnica as fallbackStaff, plantel as rawFallbackPlayers, getEquipaRevealDate } from '~/data/equipa'
const fallbackPlayers = rawFallbackPlayers.map((player) => ({ ...player, publishedAt: getEquipaRevealDate(player.id)?.toISOString() || null, status: 'published' }))
import { createPublicRepository } from '~/modules/core/repository/public.repository'
export async function useTeamStructure() {
  const boardFallback = [
    ...fallbackAssembly.map((x) => ({ ...x, group: 'Assembleia Geral' })),
    ...fallbackBoard.map((x) => ({ ...x, group: 'Direção' })),
    ...fallbackFiscal.map((x) => ({ ...x, group: 'Conselho Fiscal' })),
  ]
  const boardRepo = createPublicRepository('board', boardFallback)
  const staffRepo = createPublicRepository('staff', fallbackStaff)
  const playersRepo = createPublicRepository('players', fallbackPlayers)
  const [{ data: board }, { data: equipaTecnica }, { data: plantel }] = await Promise.all([
    useAsyncData('gdcss-public-board', () => boardRepo.list(), { default: () => boardFallback }),
    useAsyncData('gdcss-public-staff', () => staffRepo.list(), { default: () => fallbackStaff }),
    useAsyncData('gdcss-public-players', () => playersRepo.list(), { default: () => fallbackPlayers }),
  ])
  return {
    assembleiaGeral: computed(() => (board.value || boardFallback).filter((x) => x.group === 'Assembleia Geral')),
    direcao: computed(() => (board.value || boardFallback).filter((x) => x.group === 'Direção')),
    conselhoFiscal: computed(() => (board.value || boardFallback).filter((x) => x.group === 'Conselho Fiscal')),
    equipaTecnica,
    plantel,
  }
}
