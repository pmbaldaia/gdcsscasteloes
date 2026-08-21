import { createCrudService } from '~/modules/core/repository/crud.service'
import { gamesRepository } from '../repository/games.repository'
export const gamesService = () => createCrudService(gamesRepository())
