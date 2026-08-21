import { createJsonRepository } from '../../core/json.repository.mjs'
import { eventsResource } from './events.model.mjs'
export const eventsRepository = createJsonRepository(eventsResource)
