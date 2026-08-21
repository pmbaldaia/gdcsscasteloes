import { createCrudService } from '~/modules/core/repository/crud.service'
import { staffRepository } from '../repository/staff.repository'
export const staffService = () => createCrudService(staffRepository())
