import { b as useRuntimeConfig } from './server.mjs';

function createPublicRepository(resource) {
  return {
    async list() {
      const config = useRuntimeConfig();
      return await $fetch(`${config.public.apiBase}/api/public/${resource}`);
    }
  };
}

export { createPublicRepository as c };
//# sourceMappingURL=public.repository-zOMnXrxb.mjs.map
