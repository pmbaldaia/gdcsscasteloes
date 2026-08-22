import { c as createCrudService, a as createRestRepository } from './rest.repository-Cx9D2HNC.mjs';

const teamsRepository = () => createRestRepository("teams");
const teamsService = () => createCrudService(teamsRepository());

export { teamsService as t };
//# sourceMappingURL=teams.service-CH-ezBtO.mjs.map
