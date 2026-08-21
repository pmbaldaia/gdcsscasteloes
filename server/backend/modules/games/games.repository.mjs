import { createMongoRepository } from '../../core/mongo.repository.mjs'
import { gamesResource } from './games.model.mjs'
export const gamesRepository = createMongoRepository(gamesResource)
