import { createRestRepository } from '~/modules/core/repository/rest.repository'
import type { Member } from '../model/members.model'
export const membersRepository = () => createRestRepository<Member>('members')
