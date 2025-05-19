<script setup>
definePageMeta({
  layout: "admin",
});

import { ref } from "vue";
import jornadas from "~/data/jornadas";
import equipas from "~/data/equipas";

const editableJornadas = ref(structuredClone(jornadas));
const showModal = ref(false);
const newGame = ref({
  jornada: 1,
  date: "",
  time: "",
  location: "",
  teams: ["", ""],
});

const teamLogoMap = equipas.reduce((map, team) => {
  map[team.name] = team.logo;
  return map;
}, {});

const openModal = () => {
  newGame.value = {
    jornada: 1,
    date: "",
    time: "",
    location: "",
    teams: ["", ""],
  };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveGame = () => {
  const { jornada, date, time, location, teams } = newGame.value;
  if (!date || !time || !location || !teams[0] || !teams[1]) {
    alert("Preencha todos os campos para adicionar o jogo.");
    return;
  }
  if (!editableJornadas.value[jornada]) {
    editableJornadas.value[jornada] = [];
  }
  editableJornadas.value[jornada].push({
    date,
    time,
    location,
    teams: [...teams],
  });
  closeModal();
};

const removeGame = (jornada, index) => {
  editableJornadas.value[jornada].splice(index, 1);
  if (editableJornadas.value[jornada].length === 0) {
    delete editableJornadas.value[jornada];
  }
};
</script>

<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        Gestão de Jornadas
      </h1>
      <button
        @click="openModal"
        class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded shadow transition"
      >
        + Adicionar Jogo
      </button>
    </div>

    <div
      v-if="Object.keys(editableJornadas).length === 0"
      class="text-gray-500 dark:text-gray-400"
    >
      Nenhuma jornada disponível.
    </div>

    <div
      v-for="(games, jornada) in editableJornadas"
      :key="jornada"
      class="mb-12"
    >
      <h2
        class="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700 pb-2"
      >
        Jornada {{ jornada }}
      </h2>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <div
          v-for="(game, index) in games"
          :key="index"
          class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow hover:shadow-lg transition relative"
        >
          <button
            @click="removeGame(jornada, index)"
            class="absolute top-2 right-2 text-red-600 hover:text-red-800 font-semibold"
            aria-label="Remover jogo"
            title="Remover jogo"
          >
            ✕
          </button>

          <div class="mb-3 text-sm text-gray-500 dark:text-gray-400">
            <span class="mr-4"><strong>Data:</strong> {{ game.date }}</span>
            <span><strong>Hora:</strong> {{ game.time }}</span>
          </div>

          <div class="mb-4 font-semibold text-gray-700 dark:text-gray-300">
            Local: {{ game.location }}
          </div>

          <div
            class="flex items-center justify-center gap-3 font-bold text-lg text-gray-900 dark:text-gray-100"
          >
            <div class="flex flex-col items-center max-w-[200px] text-center">
              <img
                v-if="teamLogoMap[game.teams[0]]"
                :src="teamLogoMap[game.teams[0]]"
                :alt="game.teams[0]"
                class="w-12 h-12 object-contain mb-1"
              />
              <span>{{ game.teams[0] }}</span>
            </div>
            <div class="text-gray-600 dark:text-gray-400">vs</div>
            <div class="flex flex-col items-center max-w-[200px] text-center">
              <img
                v-if="teamLogoMap[game.teams[1]]"
                :src="teamLogoMap[game.teams[1]]"
                :alt="game.teams[1]"
                class="w-12 h-12 object-contain mb-1"
              />
              <span>{{ game.teams[1] }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full p-6 relative"
        @click.stop
      >
        <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Adicionar Jogo
        </h3>

        <label
          class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Jornada
          <select
            v-model.number="newGame.jornada"
            class="mt-1 block w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2"
          >
            <option
              v-for="j in Object.keys(editableJornadas).sort((a, b) => a - b)"
              :key="j"
              :value="Number(j)"
            >
              Jornada {{ j }}
            </option>
          </select>
        </label>

        <label
          class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Data
          <input
            type="date"
            v-model="newGame.date"
            class="mt-1 block w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2"
          />
        </label>

        <label
          class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Hora
          <input
            type="time"
            v-model="newGame.time"
            class="mt-1 block w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2"
          />
        </label>

        <label
          class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Local
          <input
            type="text"
            v-model="newGame.location"
            placeholder="Estádio, cidade, etc."
            class="mt-1 block w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2"
          />
        </label>

        <label
          class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Equipa 1
          <input
            type="text"
            v-model="newGame.teams[0]"
            placeholder="Nome da equipa 1"
            class="mt-1 block w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2"
          />
        </label>

        <label
          class="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Equipa 2
          <input
            type="text"
            v-model="newGame.teams[1]"
            placeholder="Nome da equipa 2"
            class="mt-1 block w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2"
          />
        </label>

        <div class="flex justify-end gap-3">
          <button
            @click="closeModal"
            class="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            Cancelar
          </button>
          <button
            @click="saveGame"
            class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
