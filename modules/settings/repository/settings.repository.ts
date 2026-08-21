import { createRestRepository } from '~/modules/core/repository/rest.repository'
export const settingsRepository=()=>createRestRepository<any>('settings')
