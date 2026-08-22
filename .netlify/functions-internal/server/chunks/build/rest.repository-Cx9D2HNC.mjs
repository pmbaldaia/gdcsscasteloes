import { u as useApi } from './useApi-3EScbZE4.mjs';

const createCrudService = (repository) => ({
  list: () => repository.list(),
  create: (payload) => repository.create(payload),
  update: (id, payload) => repository.update(id, payload),
  remove: (id) => repository.remove(id)
});
const createRestRepository = (resource) => {
  const api = useApi();
  const base = `/api/${resource}`;
  return { list: () => api(base), create: (payload) => api(base, { method: "POST", body: payload }), update: (id, payload) => api(`${base}/${id}`, { method: "PUT", body: payload }), remove: (id) => api(`${base}/${id}`, { method: "DELETE" }) };
};

export { createRestRepository as a, createCrudService as c };
//# sourceMappingURL=rest.repository-Cx9D2HNC.mjs.map
