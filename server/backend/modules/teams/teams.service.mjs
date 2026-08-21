import { createCrudService } from '../../core/crud.service.mjs'
import { teamsRepository } from './teams.repository.mjs'
export const teamsService = createCrudService(teamsRepository, { normalize: (p) => ({ name: p.name ?? '', logo: p.logo ?? '', status:p.status??'published' }), publicFilter: (row) => row.status !== 'draft' })
