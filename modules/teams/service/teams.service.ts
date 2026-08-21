import { createCrudService } from '~/modules/core/repository/crud.service'
import { teamsRepository } from '../repository/teams.repository'
export const teamsService = () => createCrudService(teamsRepository())
