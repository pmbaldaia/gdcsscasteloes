import { createRestRepository } from '~/modules/core/repository/rest.repository'
import type { Event } from '../model/events.model'
export const eventsRepository = () => createRestRepository<Event>('events')
