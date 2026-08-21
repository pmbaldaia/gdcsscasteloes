import { createMongoRepository } from '../../core/mongo.repository.mjs'
import { playersResource } from './players.model.mjs'
export const playersRepository = createMongoRepository(playersResource)
