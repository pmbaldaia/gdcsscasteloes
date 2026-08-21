import { createRestRepository } from '~/modules/core/repository/rest.repository'
import type { Game } from '../model/games.model'
export const gamesRepository = () => createRestRepository<Game>('games')
