import { createCrudService } from '~/modules/core/repository/crud.service'
import { settingsRepository } from '../repository/settings.repository'
export const settingsService=()=>createCrudService(settingsRepository())
