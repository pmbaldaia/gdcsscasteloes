import { createRestRepository } from '~/modules/core/repository/rest.repository'
import type { StaffMember } from '../model/staff.model'
export const staffRepository = () => createRestRepository<StaffMember>('staff')
