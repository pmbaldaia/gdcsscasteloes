import { _ as _sfc_main$1 } from './CmsResourceManager-EG1eDQ21.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { c as createCrudService, a as createRestRepository } from './rest.repository-Cx9D2HNC.mjs';
import { t as teamsService } from './teams.service-CH-ezBtO.mjs';
import './Icon-DhbMUx6q.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-Dydvo-RC.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'fast-xml-parser';
import 'node:url';
import 'ipx';
import './server.mjs';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './CmsPagination-Bu_Q-dyI.mjs';
import './media.service-gqqdC7_q.mjs';
import './useApi-3EScbZE4.mjs';
import './useToast-BJDEtn_Q.mjs';
import './useConfirm-CFUPPoka.mjs';

const gamesRepository = () => createRestRepository("games");
const gamesService = () => createCrudService(gamesRepository());
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "jogos",
  __ssrInlineRender: true,
  setup(__props) {
    const baseGamesService = gamesService();
    teamsService();
    const teams = ref([]);
    const teamOptions = computed(
      () => [...teams.value].sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "pt-PT")).map((team) => ({ value: team.name, label: team.name }))
    );
    const fields = computed(() => [
      { key: "season", label: "\xC9poca", type: "select", filterable: true, options: [
        { value: "2025/2026", label: "2025/2026" },
        { value: "2026/2027", label: "2026/2027" }
      ] },
      { key: "jornada", label: "Jornada" },
      { key: "date", label: "Data", type: "date" },
      { key: "time", label: "Hora", type: "time" },
      { key: "team1", label: "Equipa 1", type: "select", options: teamOptions.value },
      { key: "team2", label: "Equipa 2", type: "select", options: teamOptions.value },
      { key: "venue", label: "Est\xE1dio / Campo", required: false },
      { key: "address", label: "Rua / Morada", required: false },
      { key: "volta", label: "Volta", type: "number" },
      { key: "status", label: "Estado do jogo", type: "select", options: [
        { value: "scheduled", label: "Agendado" },
        { value: "finished", label: "Terminado" },
        { value: "cancelled", label: "Cancelado" },
        { value: "draft", label: "Rascunho" }
      ] },
      { key: "publicationStatus", label: "Publica\xE7\xE3o", type: "select", options: [
        { value: "published", label: "Publicado" },
        { value: "draft", label: "N\xE3o publicado" }
      ] }
    ]);
    function toAdminGame(game) {
      return {
        ...game,
        team1: Array.isArray(game.teams) ? game.teams[0] || "" : "",
        team2: Array.isArray(game.teams) ? game.teams[1] || "" : ""
      };
    }
    function toStoredGame(payload) {
      if (!payload.team1 || !payload.team2) {
        throw new Error("Seleciona as duas equipas do jogo.");
      }
      if (String(payload.team1) === String(payload.team2)) {
        throw new Error("A Equipa 1 e a Equipa 2 t\xEAm de ser diferentes.");
      }
      const { team1, team2, ...rest } = payload;
      return {
        ...rest,
        teams: [team1, team2]
      };
    }
    const service = {
      async list() {
        const games = await baseGamesService.list();
        return games.map(toAdminGame);
      },
      async create(payload) {
        return baseGamesService.create(toStoredGame(payload));
      },
      async update(id, payload) {
        return baseGamesService.update(id, toStoredGame(payload));
      },
      async remove(id) {
        return baseGamesService.remove(id);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsResourceManager = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsResourceManager, mergeProps({
        service,
        title: "Jogos e jornadas",
        description: "Gere o calend\xE1rio por \xE9poca. Ao adicionar ou editar um jogo, escolhe as duas equipas a partir das equipas registadas no CMS.",
        fields: unref(fields),
        columns: ["season", "jornada", "date", "time", "team1", "team2", "venue", "address", "status", "publicationStatus"],
        "publish-key": "publicationStatus",
        "show-search": false,
        "default-filters": { season: "2026/2027" }
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/jogos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=jogos-DA51Wn3y.mjs.map
