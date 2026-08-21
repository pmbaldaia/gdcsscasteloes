import { createCrudService } from '../../core/crud.service.mjs'
import { eventsRepository } from './events.repository.mjs'
export const eventsService = createCrudService(eventsRepository, { normalize: (p) => ({ nome:p.nome??'', slug:p.slug??'', data:p.data??'', hora:p.hora??'', descricao:p.descricao??'', imagem:p.imagem??'', local:p.local??'', detalhes:p.detalhes??'', status:p.status??'published' }) })
