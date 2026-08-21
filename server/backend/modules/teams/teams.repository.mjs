import { createJsonRepository } from '../../core/json.repository.mjs'
import { teamsResource } from './teams.model.mjs'
export const teamsRepository = createJsonRepository(teamsResource)
