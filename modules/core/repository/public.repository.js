export function createPublicRepository(resource, fallback) {
  return {
    async list() {
      const config = useRuntimeConfig()
      try {
        return await $fetch(`${config.public.apiBase}/api/public/${resource}`)
      } catch {
        return fallback
      }
    },
  }
}
