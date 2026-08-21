import { createCrudService } from '~/modules/core/repository/crud.service'
import { playersRepository } from '../repository/players.repository'
export const playersService = () => createCrudService(playersRepository())
