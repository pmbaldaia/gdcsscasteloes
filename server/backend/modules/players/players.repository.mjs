import { createJsonRepository } from '../../core/json.repository.mjs'
import { playersResource } from './players.model.mjs'
export const playersRepository = createJsonRepository(playersResource)
