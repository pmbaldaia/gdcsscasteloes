<script setup lang="ts">
defineEmits<{ menu: [] }>()

const menuOpen = ref(false)
const route = useRoute()
const { user, logout } = useAuth()
const toast = useToast()

const roleLabel = computed(() =>
  ({ admin: 'Administrador', viewer: 'Consulta e edição' } as Record<string,string>)[user.value?.role || ''] || 'Utilizador'
)

const pageMeta = computed(() => {
  const path = route.path

  const map = [
    { test: (p:string) => p === '/admin', label: 'Painel de controlo', icon: 'lucide:layout-dashboard' },
    { test: (p:string) => p.startsWith('/admin/paginas'), label: 'Páginas', icon: 'lucide:file-text' },
    { test: (p:string) => p.startsWith('/admin/blocos'), label: 'Blocos de conteúdo', icon: 'lucide:blocks' },
    { test: (p:string) => p.startsWith('/admin/menus'), label: 'Menus', icon: 'lucide:menu' },
    { test: (p:string) => p.startsWith('/admin/perfil'), label: 'O meu perfil', icon: 'lucide:user-cog' },
    { test: (p:string) => p.startsWith('/admin/jogos'), label: 'Jogos e jornadas', icon: 'lucide:calendar-days' },
    { test: (p:string) => p.startsWith('/admin/equipas'), label: 'Equipas', icon: 'lucide:shield' },
    { test: (p:string) => p.startsWith('/admin/plantel'), label: 'Plantel', icon: 'lucide:users' },
    { test: (p:string) => p.startsWith('/admin/equipa-tecnica'), label: 'Equipa Técnica', icon: 'lucide:clipboard-list' },
    { test: (p:string) => p.startsWith('/admin/direcao'), label: 'Direção', icon: 'lucide:landmark' },
    { test: (p:string) => p.startsWith('/admin/eventos'), label: 'Eventos', icon: 'lucide:party-popper' },
    { test: (p:string) => p.startsWith('/admin/galeria'), label: 'Galeria', icon: 'lucide:images' },
    { test: (p:string) => p.startsWith('/admin/patrocinios'), label: 'Patrocínios', icon: 'lucide:badge-euro' },
    { test: (p:string) => p.startsWith('/admin/oportunidades'), label: 'Oportunidades', icon: 'lucide:gift' },
    { test: (p:string) => p.startsWith('/admin/mensagens'), label: 'Mensagens', icon: 'lucide:mail' },
    { test: (p:string) => p.startsWith('/admin/socios'), label: 'Sócios', icon: 'lucide:user-round-check' },
    { test: (p:string) => p.startsWith('/admin/media'), label: 'Multimédia', icon: 'lucide:image' },
    { test: (p:string) => p.startsWith('/admin/utilizadores'), label: 'Utilizadores', icon: 'lucide:key-round' },
    { test: (p:string) => p.startsWith('/admin/definicoes'), label: 'Definições', icon: 'lucide:settings-2' },
    { test: (p:string) => p.startsWith('/admin/pesquisa'), label: 'Resultados', icon: 'lucide:list-filter' },
  ]

  return map.find(item => item.test(path)) || {
    label: 'Administração',
    icon: 'lucide:layout-panel-left'
  }
})

async function handleLogout() {
  menuOpen.value = false
  toast.info('Sessão terminada', 'Até breve.')
  await logout()
}

function openSite() {
  window.open('/', '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <header class="cms-topbar">
    <div class="topbar-left">
      <button
        class="icon-button mobile-menu"
        type="button"
        aria-label="Abrir menu"
        @click="$emit('menu')"
      >
        <Icon name="lucide:menu" size="20" />
      </button>

      <div class="topbar-context" aria-label="Localização atual no CMS">
        <span class="topbar-context__icon">
          <Icon :name="pageMeta.icon" size="18" />
        </span>
        <div class="topbar-context__copy">
          <small>Administração</small>
          <strong>{{ pageMeta.label }}</strong>
        </div>
      </div>
    </div>

    <div class="topbar-actions">
      <button
        class="topbar-site-button"
        type="button"
        title="Abrir site público"
        @click="openSite"
      >
        <Icon name="lucide:external-link" size="16" />
        <span>Ver site</span>
      </button>

      <ThemeToggle />

      <NuxtLink
        to="/admin/mensagens"
        class="icon-button notification-button"
        aria-label="Mensagens"
        title="Mensagens"
      >
        <Icon name="lucide:mail" size="19" />
      </NuxtLink>

      <button class="user-menu" type="button" @click="menuOpen = !menuOpen">
        <span class="user-menu__avatar">
          <img v-if="user?.avatar" :src="user.avatar" :alt="user.name || 'Perfil'" class="user-menu__avatar-image">
          <template v-else>{{ (user?.name || 'AD').slice(0, 2).toUpperCase() }}</template>
        </span>
        <span class="user-menu__copy">
          <strong>{{ user?.name || 'Administrador' }}</strong>
          <small>{{ roleLabel }}</small>
        </span>
        <Icon name="lucide:chevron-down" size="15" />
      </button>

      <div v-if="menuOpen" class="user-dropdown">
        <NuxtLink to="/admin/perfil" @click="menuOpen = false">
          <Icon name="lucide:user-cog" />
          O meu perfil
        </NuxtLink>
        <NuxtLink to="/admin/mensagens" class="mobile-menu-link" @click="menuOpen = false">
          <Icon name="lucide:mail" />
          Mensagens
        </NuxtLink>
        <NuxtLink to="/admin/definicoes" @click="menuOpen = false">
          <Icon name="lucide:settings" />
          Definições
        </NuxtLink>
        <button type="button" @click="handleLogout">
          <Icon name="lucide:log-out" />
          Terminar sessão
        </button>
      </div>
    </div>
  </header>
</template>
