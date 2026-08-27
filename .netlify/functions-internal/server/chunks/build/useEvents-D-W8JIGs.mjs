import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';

function parseEventDate(value = "") {
  var _a;
  const normalized = String(value).trim();
  const parts = normalized.split(/[\/-]/).map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) {
    const monthNames = ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const match = normalized.toLocaleLowerCase("pt-PT").match(/^\d{1,2}(?:\s+e\s+\d{1,2})?\s+de\s+([a-zç]+)$/);
    const month2 = match ? monthNames.indexOf(match[1]) : -1;
    if (month2 < 0) return /* @__PURE__ */ new Date(NaN);
    const day2 = Number((_a = normalized.match(/^\d{1,2}/)) == null ? void 0 : _a[0]);
    const year2 = (/* @__PURE__ */ new Date()).getFullYear();
    const date2 = new Date(year2, month2, day2);
    return date2.getMonth() === month2 && date2.getDate() === day2 ? date2 : /* @__PURE__ */ new Date(NaN);
  }
  const [first, second, third] = parts;
  const isIso = String(first).length === 4;
  const year = isIso ? first : third;
  const month = second;
  const day = isIso ? third : first;
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : /* @__PURE__ */ new Date(NaN);
}
async function useEvents() {
  const repository = createPublicRepository("events");
  const { data: eventos } = await useAsyncData("gdcss-public-events", async () => {
    const items = await repository.list();
    return [...items].sort((a, b) => parseEventDate(b.data).getTime() - parseEventDate(a.data).getTime());
  }, { default: () => [] });
  return { eventos };
}

export { parseEventDate as p, useEvents as u };
//# sourceMappingURL=useEvents-D-W8JIGs.mjs.map
