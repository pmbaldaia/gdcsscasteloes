import { createPublicRepository } from '~/modules/core/repository/public.repository'

export function parseEventDate(value = '') {
  const normalized = String(value).trim()
  const parts = normalized.split(/[\/-]/).map(Number)

  if (parts.length !== 3 || parts.some(Number.isNaN)) {
    const monthNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    const match = normalized.toLocaleLowerCase('pt-PT').match(/^\d{1,2}(?:\s+e\s+\d{1,2})?\s+de\s+([a-zç]+)$/)
    const month = match ? monthNames.indexOf(match[1]) : -1

    if (month < 0) return new Date(NaN)

    const day = Number(normalized.match(/^\d{1,2}/)?.[0])
    const year = new Date().getFullYear()
    const date = new Date(year, month, day)
    return date.getMonth() === month && date.getDate() === day ? date : new Date(NaN)
  }

  const [first, second, third] = parts
  const isIso = String(first).length === 4
  const year = isIso ? first : third
  const month = second
  const day = isIso ? third : first
  const date = new Date(year, month - 1, day)

  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
    ? date
    : new Date(NaN)
}

export async function useEvents() {
  const repository = createPublicRepository('events')
  const { data: eventos } = await useAsyncData('gdcss-public-events', async () => {
    const items = await repository.list()
    return [...items].sort((a, b) => parseEventDate(b.data).getTime() - parseEventDate(a.data).getTime())
  }, { default: () => [] })
  return { eventos }
}
