import { createRestRepository } from '~/modules/core/repository/rest.repository'
import type { BoardMember } from '../model/board.model'
export const boardRepository = () => createRestRepository<BoardMember>('board')
