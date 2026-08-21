export default defineNuxtRouteMiddleware(async (to) => {
  if (!to.path.startsWith('/admin')) return
  const { token, me } = useAuth()
  if (to.path === '/admin/login') {
    if (token.value) { try { await me(); return navigateTo('/admin') } catch { token.value = null } }
    return
  }
  if (!token.value) return navigateTo('/admin/login')
  try { await me() } catch { token.value = null; return navigateTo('/admin/login') }
})
