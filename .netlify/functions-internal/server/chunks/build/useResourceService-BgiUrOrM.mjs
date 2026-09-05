import { u as useApi } from './useApi-3EScbZE4.mjs';

const useResourceService = (resource) => {
  const api = useApi();
  return {
    list: () => api(`/api/${resource}`),
    create: (payload) => api(`/api/${resource}`, { method: "POST", body: payload }),
    update: (id, payload) => api(`/api/${resource}/${id}`, { method: "PUT", body: payload }),
    remove: (id) => api(`/api/${resource}/${id}`, { method: "DELETE" })
  };
};

export { useResourceService as u };
//# sourceMappingURL=useResourceService-BgiUrOrM.mjs.map
