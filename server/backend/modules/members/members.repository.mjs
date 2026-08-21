import { createMongoRepository } from '../../core/mongo.repository.mjs'
import { membersResource } from './members.model.mjs'
export const membersRepository = createMongoRepository(membersResource)
