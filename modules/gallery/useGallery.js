import { createPublicRepository } from '~/modules/core/repository/public.repository'

const numericId = (value) => {
  const number = Number(value)
  return Number.isFinite(number) ? number : 0
}

const timestamp = (row) => {
  const value = row?.createdAt || row?.updatedAt
  const parsed = value ? new Date(value).getTime() : NaN
  return Number.isFinite(parsed) ? parsed : numericId(row?.id)
}

const sortGallery = (rows = []) =>
  [...rows].sort((a, b) => {
    const orderA = Number(a?.order)
    const orderB = Number(b?.order)
    const hasOrderA = Number.isFinite(orderA) && orderA > 0
    const hasOrderB = Number.isFinite(orderB) && orderB > 0

    if (hasOrderA && hasOrderB && orderA !== orderB) return orderA - orderB
    if (hasOrderA !== hasOrderB) return hasOrderA ? -1 : 1

    return timestamp(b) - timestamp(a)
  })

export async function useGallery() {
  const repository = createPublicRepository('gallery')
  const { data: categories } = await useAsyncData(
    'gdcss-public-gallery',
    async () => sortGallery(await repository.list()),
    { default: () => [] },
  )

  return { categories }
}
