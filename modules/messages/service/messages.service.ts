import { createCrudService } from '~/modules/core/repository/crud.service'
import { messagesRepository } from '../repository/messages.repository'
export const messagesService=()=>createCrudService(messagesRepository())
