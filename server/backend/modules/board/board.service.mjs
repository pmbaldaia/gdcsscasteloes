import { createCrudService } from '../../core/crud.service.mjs'
import { boardRepository } from './board.repository.mjs'
export const boardService = createCrudService(boardRepository, { normalize: (p) => ({ nome:p.nome??'', funcao:p.funcao??'', img:p.img??'', group:p.group??'Direção', status:p.status??'published' }) })
