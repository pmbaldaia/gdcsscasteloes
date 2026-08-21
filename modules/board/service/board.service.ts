import { createCrudService } from '~/modules/core/repository/crud.service'
import { boardRepository } from '../repository/board.repository'
export const boardService = () => createCrudService(boardRepository())
