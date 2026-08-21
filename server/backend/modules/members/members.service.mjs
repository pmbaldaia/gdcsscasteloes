import { createCrudService } from '../../core/crud.service.mjs'
import { membersRepository } from './members.repository.mjs'
export const membersService = createCrudService(membersRepository, { normalize: (p) => ({ nome:p.nome??'', email:p.email??'', telefone:p.telefone??'', dataAssociacao:p.dataAssociacao??'' }), publicFilter: () => false })
