import { createPublicRepository } from '~/modules/core/repository/public.repository'

export async function useTeamStructure() {
  const boardRepo = createPublicRepository('board')
  const staffRepo = createPublicRepository('staff')
  const playersRepo = createPublicRepository('players')

  const [{ data: board }, { data: equipaTecnica }, { data: plantel }] = await Promise.all([
    useAsyncData('gdcss-public-board', () => boardRepo.list(), { default: () => [] }),
    useAsyncData('gdcss-public-staff', () => staffRepo.list(), { default: () => [] }),
    useAsyncData('gdcss-public-players', () => playersRepo.list(), { default: () => [] }),
  ])

  return {
    assembleiaGeral: computed(() => (board.value || []).filter((x) => x.group === 'Assembleia Geral')),
    direcao: computed(() => (board.value || []).filter((x) => x.group === 'Direção')),
    conselhoFiscal: computed(() => (board.value || []).filter((x) => x.group === 'Conselho Fiscal')),
    equipaTecnica,
    plantel,
  }
}
