import { createJsonRepository } from '../../core/json.repository.mjs'
import { boardResource } from './board.model.mjs'
export const boardRepository = createJsonRepository(boardResource)
