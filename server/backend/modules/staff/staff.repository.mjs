import { createJsonRepository } from '../../core/json.repository.mjs'
import { staffResource } from './staff.model.mjs'
export const staffRepository = createJsonRepository(staffResource)
