import { createMongoRepository } from '../../core/mongo.repository.mjs'
import { boardResource } from './board.model.mjs'
export const boardRepository = createMongoRepository(boardResource)
