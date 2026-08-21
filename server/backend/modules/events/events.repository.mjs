import { createMongoRepository } from '../../core/mongo.repository.mjs'
import { eventsResource } from './events.model.mjs'
export const eventsRepository = createMongoRepository(eventsResource)
