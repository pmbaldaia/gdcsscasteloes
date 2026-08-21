import { createRestRepository } from '~/modules/core/repository/rest.repository'
import type { Player } from '../model/players.model'
export const playersRepository = () => createRestRepository<Player>('players')
