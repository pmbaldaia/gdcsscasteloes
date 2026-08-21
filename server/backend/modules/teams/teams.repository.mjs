import { createMongoRepository } from '../../core/mongo.repository.mjs'
import { teamsResource } from './teams.model.mjs'
export const teamsRepository = createMongoRepository(teamsResource)
