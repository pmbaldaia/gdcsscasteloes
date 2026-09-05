import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';

const numericId = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
};
const timestamp = (row) => {
  const value = (row == null ? void 0 : row.createdAt) || (row == null ? void 0 : row.updatedAt);
  const parsed = value ? new Date(value).getTime() : NaN;
  return Number.isFinite(parsed) ? parsed : numericId(row == null ? void 0 : row.id);
};
const sortGallery = (rows = []) => [...rows].sort((a, b) => {
  const orderA = Number(a == null ? void 0 : a.order);
  const orderB = Number(b == null ? void 0 : b.order);
  const hasOrderA = Number.isFinite(orderA) && orderA > 0;
  const hasOrderB = Number.isFinite(orderB) && orderB > 0;
  if (hasOrderA && hasOrderB && orderA !== orderB) return orderA - orderB;
  if (hasOrderA !== hasOrderB) return hasOrderA ? -1 : 1;
  return timestamp(b) - timestamp(a);
});
async function useGallery() {
  const repository = createPublicRepository("gallery");
  const { data: categories } = await useAsyncData(
    "gdcss-public-gallery",
    async () => sortGallery(await repository.list()),
    { default: () => [] }
  );
  return { categories };
}

export { useGallery as u };
//# sourceMappingURL=useGallery-BePHli7p.mjs.map
