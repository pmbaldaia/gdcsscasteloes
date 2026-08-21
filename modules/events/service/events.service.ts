import { createCrudService } from '~/modules/core/repository/crud.service'
import { eventsRepository } from '../repository/events.repository'
export const eventsService = () => createCrudService(eventsRepository())
