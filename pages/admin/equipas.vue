<script setup>
definePageMeta({
  layout: "admin",
});

import { ref } from "vue";
import teams from "~/data/equipas";

const editableTeams = ref(structuredClone(teams));

const isModalOpen = ref(false);
const newTeam = ref({ name: "", logo: "" });

const openModal = () => {
  newTeam.value = { name: "", logo: "" };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const saveTeam = () => {
  if (newTeam.value.name.trim() === "") {
    alert("Por favor, insira o nome da equipa.");
    return;
  }
  editableTeams.value.push({ ...newTeam.value });
  closeModal();
};

const removeTeam = (index) => {
  editableTeams.value.splice(index, 1);
};

const editTeam = (team) => alert(`Editar equipa: ${team.name}`);
</script>

<template>
  <div class="p-4">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        Gestão de Equipas
      </h1>
      <button
        @click="openModal"
        class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded shadow transition"
      >
        + Adicionar Equipa
      </button>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Nome
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Logo
            </th>
            <th
              class="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Ações
            </th>
          </tr>
        </thead>
        <tbody
          class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700"
        >
          <tr
            v-for="(team, index) in editableTeams"
            :key="index"
            class="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <td
              class="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100"
            >
              <input
                v-model="team.name"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-3 py-2 rounded w-full"
                placeholder="Nome da equipa"
              />
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <input
                v-model="team.logo"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-3 py-2 rounded w-full"
                placeholder="URL do logo"
              />
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center space-x-2">
              <button
                @click="editTeam(team)"
                class="text-yellow-600 hover:text-yellow-800 font-semibold"
                aria-label="Editar equipa"
              >
                Editar
              </button>
              <button
                @click="removeTeam(index)"
                class="text-red-600 hover:text-red-800 font-semibold"
                aria-label="Apagar equipa"
              >
                Apagar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6"
          @click.stop
        >
          <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Adicionar Nova Equipa
          </h2>

          <label
            class="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
          >
            Nome
            <input
              v-model="newTeam.name"
              type="text"
              class="mt-1 block w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2"
              placeholder="Nome da equipa"
            />
          </label>

          <label
            class="block mb-4 text-gray-700 dark:text-gray-300 font-medium"
          >
            Logo (URL)
            <input
              v-model="newTeam.logo"
              type="text"
              class="mt-1 block w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2"
              placeholder="URL do logo"
            />
          </label>

          <div class="flex justify-end space-x-3">
            <button
              @click="closeModal"
              class="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Cancelar
            </button>
            <button
              @click="saveTeam"
              class="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
