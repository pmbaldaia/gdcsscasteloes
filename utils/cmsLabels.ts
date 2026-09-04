const valueLabels: Record<string, string> = {
  active: 'Ativo', inactive: 'Inativo', enabled: 'Ativo', disabled: 'Inativo',
  pending: 'Pendente', draft: 'Rascunho', published: 'Publicado', archived: 'Arquivado',
  cancelled: 'Cancelado', canceled: 'Cancelado', upcoming: 'Próximo', ongoing: 'A decorrer',
  finished: 'Terminado', completed: 'Concluído', new: 'Novo', reviewing: 'Em análise',
  resolved: 'Resolvido', closed: 'Fechado', hidden: 'Oculto', visible: 'Visível',
  admin: 'Administrador', viewer: 'Consulta e edição',
  create: 'Criação', update: 'Atualização', delete: 'Eliminação',
  games: 'Jogos e jornadas', teams: 'Equipas', players: 'Plantel', staff: 'Equipa técnica',
  board: 'Direção', events: 'Eventos', gallery: 'Galeria', sponsors: 'Patrocínios',
  opportunities: 'Oportunidades', messages: 'Mensagens', members: 'Sócios', settings: 'Definições',
  users: 'Utilizadores', media: 'Multimédia',
}

const keyLabels: Record<string, string> = {
  createdAt: 'Criado em', updatedAt: 'Atualizado em', status: 'Estado', state: 'Estado',
  actorName: 'Utilizador', resourceId: 'Identificador', pageSlug: 'Página',
}

export function cmsValueLabel(value: unknown) {
  if (value === true) return 'Sim'
  if (value === false) return 'Não'
  const key = String(value ?? '')
  return valueLabels[key] ?? value
}

export function cmsKeyLabel(key: string) {
  return keyLabels[key] ?? key
}

export function cmsStatusTone(value: unknown): 'success' | 'warning' | 'danger' | 'info' {
  const key = String(value ?? '')
  if (['active','published','resolved','finished','completed','visible'].includes(key)) return 'success'
  if (['pending','draft','upcoming','reviewing','ongoing'].includes(key)) return 'warning'
  if (['inactive','cancelled','canceled'].includes(key)) return 'danger'
  return 'info'
}
