<script setup>
definePageMeta({
  layout: "admin",
});

import { ref } from "vue";
import { eventos as baseEventos } from "~/data/eventos";

const editableEventos = ref(structuredClone(baseEventos));

const isModalOpen = ref(false);
const newEvento = ref({
  nome: "",
  slug: "",
  data: "",
  descricao: "",
  imagem: "",
  detalhes: "",
});

const openModal = () => {
  newEvento.value = {
    nome: "",
    slug: "",
    data: "",
    descricao: "",
    imagem: "",
    detalhes: "",
  };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const saveEvento = () => {
  if (newEvento.value.nome.trim() === "") {
    alert("Por favor, insira o nome do evento.");
    return;
  }
  editableEventos.value.push({ ...newEvento.value });
  closeModal();
};

const removeEvento = (index) => {
  editableEventos.value.splice(index, 1);
};

const editEvento = (evento) => {
  alert(`Editar evento: ${evento.nome}`);
};
</script>

<template>
  <div class="p-4">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        Gestão de Eventos
      </h1>
      <button
        @click="openModal"
        class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded shadow transition"
      >
        + Adicionar Evento
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
              Slug
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Data
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Imagem
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Descrição
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Detalhes
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
            v-for="(evento, index) in editableEventos"
            :key="index"
            class="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <td class="px-6 py-4">
              <input
                v-model="evento.nome"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-3 py-2 rounded w-full"
                placeholder="Nome do evento"
              />
            </td>
            <td class="px-6 py-4">
              <input
                v-model="evento.slug"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-3 py-2 rounded w-full"
                placeholder="slug"
              />
            </td>
            <td class="px-6 py-4">
              <input
                v-model="evento.data"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-3 py-2 rounded w-full"
                placeholder="Data"
              />
            </td>
            <td class="px-6 py-4">
              <input
                v-model="evento.imagem"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-3 py-2 rounded w-full"
                placeholder="URL da imagem"
              />
            </td>
            <td class="px-6 py-4">
              <textarea
                v-model="evento.descricao"
                rows="2"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-3 py-2 rounded w-full resize-none"
                placeholder="Descrição"
              ></textarea>
            </td>
            <td class="px-6 py-4">
              <textarea
                v-model="evento.detalhes"
                rows="2"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-3 py-2 rounded w-full resize-none"
                placeholder="Detalhes"
              ></textarea>
            </td>
            <td class="px-6 py-4 text-center space-x-2">
              <button
                @click="editEvento(evento)"
                class="text-yellow-600 hover:text-yellow-800 font-semibold"
              >
                Editar
              </button>
              <button
                @click="removeEvento(index)"
                class="text-red-600 hover:text-red-800 font-semibold"
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
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg w-full p-6"
          @click.stop
        >
          <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Adicionar Novo Evento
          </h2>

          <label
            class="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
          >
            Nome
            <input
              v-model="newEvento.nome"
              type="text"
              class="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2"
            />
          </label>

          <label
            class="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
          >
            Slug
            <input
              v-model="newEvento.slug"
              type="text"
              class="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2"
            />
          </label>

          <label
            class="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
          >
            Data
            <input
              v-model="newEvento.data"
              type="text"
              class="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2"
            />
          </label>

          <label
            class="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
          >
            URL da Imagem
            <input
              v-model="newEvento.imagem"
              type="text"
              class="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2"
            />
          </label>

          <label
            class="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
          >
            Descrição
            <textarea
              v-model="newEvento.descricao"
              rows="3"
              class="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2"
            ></textarea>
          </label>

          <label
            class="block mb-4 text-gray-700 dark:text-gray-300 font-medium"
          >
            Detalhes
            <textarea
              v-model="newEvento.detalhes"
              rows="3"
              class="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2"
            ></textarea>
          </label>

          <div class="flex justify-end space-x-3">
            <button
              @click="closeModal"
              class="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Cancelar
            </button>
            <button
              @click="saveEvento"
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
