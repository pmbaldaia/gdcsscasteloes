import { createCrudService } from '../../core/crud.service.mjs'
import { gamesRepository } from './games.repository.mjs'
export const gamesService = createCrudService(gamesRepository, {
  normalize: (p) => ({
    season: p.season ?? '',
    jornada: p.jornada ?? '',
    date: p.date ?? '',
    time: p.time ?? '',
    teams: Array.isArray(p.teams) ? p.teams.slice(0,2) : [],
    volta: Number(p.volta ?? 1),
    status: p.status ?? 'scheduled',
    publicationStatus: p.publicationStatus ?? 'published'
  }),
  publicFilter: (row) => row.publicationStatus !== 'draft' && !['draft','cancelled'].includes(row.status)
})
