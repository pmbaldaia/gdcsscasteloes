import { createRestRepository } from '~/modules/core/repository/rest.repository'
import type { Team } from '../model/teams.model'
export const teamsRepository = () => createRestRepository<Team>('teams')
