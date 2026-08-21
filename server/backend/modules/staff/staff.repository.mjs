import { createMongoRepository } from '../../core/mongo.repository.mjs'
import { staffResource } from './staff.model.mjs'
export const staffRepository = createMongoRepository(staffResource)
