import { createJsonRepository } from '../../core/json.repository.mjs'
import { gamesResource } from './games.model.mjs'
export const gamesRepository = createJsonRepository(gamesResource)
