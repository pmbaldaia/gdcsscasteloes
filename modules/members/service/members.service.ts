import { createCrudService } from '~/modules/core/repository/crud.service'
import { membersRepository } from '../repository/members.repository'
export const membersService = () => createCrudService(membersRepository())
