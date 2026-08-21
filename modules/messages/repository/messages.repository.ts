import { createRestRepository } from '~/modules/core/repository/rest.repository'
export const messagesRepository=()=>createRestRepository<any>('messages')
