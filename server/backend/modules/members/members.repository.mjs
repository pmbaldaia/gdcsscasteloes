import { createJsonRepository } from '../../core/json.repository.mjs'
import { membersResource } from './members.model.mjs'
export const membersRepository = createJsonRepository(membersResource)
