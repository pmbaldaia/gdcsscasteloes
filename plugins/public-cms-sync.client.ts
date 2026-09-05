import { PUBLIC_CMS_UPDATE_EVENT, PUBLIC_CMS_UPDATE_KEY } from '~/composables/usePublicCmsSync'

const SYNC_INTERVAL = 12_000

export default defineNuxtPlugin(() => {
  const router = useRouter()
  let syncing = false

  const isPublicRoute = (path: string) => !path.startsWith('/admin') && !path.startsWith('/auth')
  const sync = async () => {
    if (syncing || document.visibilityState !== 'visible' || !isPublicRoute(router.currentRoute.value.path)) return
    syncing = true
    try {
      // Atualiza apenas os dados já usados pela página/layout ativo. Os
      // componentes reagem às refs do useAsyncData sem recarregar a página.
      await refreshNuxtData()
    } finally {
      syncing = false
    }
  }

  const onCmsUpdate = () => void sync()
  const onStorage = (event: StorageEvent) => {
    if (event.key === PUBLIC_CMS_UPDATE_KEY) void sync()
  }
  const onVisibilityChange = () => {
    if (document.visibilityState === 'visible') void sync()
  }

  window.addEventListener(PUBLIC_CMS_UPDATE_EVENT, onCmsUpdate)
  window.addEventListener('storage', onStorage)
  document.addEventListener('visibilitychange', onVisibilityChange)

  const interval = window.setInterval(() => void sync(), SYNC_INTERVAL)
  router.afterEach((to, from) => {
    // Ao sair do CMS para o site, mostra sempre a versão acabada de guardar.
    if (isPublicRoute(to.path) && !isPublicRoute(from.path)) void sync()
  })

  return {
    provide: {
      stopPublicCmsSync: () => {
        window.clearInterval(interval)
        window.removeEventListener(PUBLIC_CMS_UPDATE_EVENT, onCmsUpdate)
        window.removeEventListener('storage', onStorage)
        document.removeEventListener('visibilitychange', onVisibilityChange)
      },
    },
  }
})
