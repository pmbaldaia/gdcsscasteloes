export interface CmsNavItem {
  label: string
  icon: string
  to: string
  adminOnly?: boolean
}

export interface CmsNavGroup {
  label: string
  items: CmsNavItem[]
}

const allGroups: CmsNavGroup[] = [
  { label: 'Geral', items: [
    { label: 'Painel de controlo', icon: 'lucide:layout-dashboard', to: '/admin' },
  ]},
  { label: 'Conteúdo', items: [
    { label: 'Páginas', icon: 'lucide:file-text', to: '/admin/paginas' },
    { label: 'Blocos de conteúdo', icon: 'lucide:blocks', to: '/admin/blocos' },
    { label: 'Menus', icon: 'lucide:menu', to: '/admin/menus' },
  ]},
  { label: 'Competição', items: [
    { label: 'Jogos', icon: 'lucide:calendar-days', to: '/admin/jogos' },
    { label: 'Equipas', icon: 'lucide:shield', to: '/admin/equipas' },
  ]},
  { label: 'Estrutura', items: [
    { label: 'Plantel', icon: 'lucide:users', to: '/admin/plantel' },
    { label: 'Equipa Técnica', icon: 'lucide:clipboard-list', to: '/admin/equipa-tecnica' },
    { label: 'Direção', icon: 'lucide:landmark', to: '/admin/direcao' },
  ]},
  { label: 'Comunicação', items: [
    { label: 'Eventos', icon: 'lucide:party-popper', to: '/admin/eventos' },
    { label: 'Galeria', icon: 'lucide:images', to: '/admin/galeria' },
    { label: 'Patrocínios', icon: 'lucide:badge-euro', to: '/admin/patrocinios' },
    { label: 'Oportunidades', icon: 'lucide:gift', to: '/admin/oportunidades' },
    { label: 'Mensagens', icon: 'lucide:mail', to: '/admin/mensagens' },
  ]},
  { label: 'Clube', items: [
    { label: 'Sócios', icon: 'lucide:user-round-check', to: '/admin/socios' },
    { label: 'Multimédia', icon: 'lucide:image', to: '/admin/media' },
  ]},
  { label: 'Conta', items: [
    { label: 'O meu perfil', icon: 'lucide:user-cog', to: '/admin/perfil' },
  ]},
  { label: 'Sistema', items: [
    { label: 'Utilizadores', icon: 'lucide:key-round', to: '/admin/utilizadores', adminOnly: true },
    { label: 'Definições', icon: 'lucide:settings-2', to: '/admin/definicoes' },
  ]},
]

export const useCmsNavigation = () => {
  const { user } = useAuth()

  const groups = computed<CmsNavGroup[]>(() =>
    allGroups
      .map(group => ({
        ...group,
        items: group.items.filter(item => !item.adminOnly || user.value?.role === 'admin'),
      }))
      .filter(group => group.items.length),
  )

  return { groups }
}
