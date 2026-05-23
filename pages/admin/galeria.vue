<script setup>
definePageMeta({
  layout: "admin",
});

import { ref } from "vue";
import { categories as baseCategories } from "~/data/galeria";

const editableCategories = ref(structuredClone(baseCategories));

const isModalOpen = ref(false);
const newCategory = ref({
  title: "",
  images: [],
});

const openModal = () => {
  newCategory.value = {
    title: "",
    images: [],
  };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const saveCategory = () => {
  if (newCategory.value.title.trim() === "") {
    alert("Por favor, insira o título da categoria.");
    return;
  }
  editableCategories.value.push({ ...newCategory.value });
  closeModal();
};

const removeCategory = (index) => {
  editableCategories.value.splice(index, 1);
};

const addImageToCategory = (category) => {
  category.images.push("");
};

const removeImageFromCategory = (category, imgIndex) => {
  category.images.splice(imgIndex, 1);
};

const editCategory = (category) => {
  alert(`Editar categoria: ${category.title}`);
};
</script>

<template>
  <div class="p-4">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-fluid-3xl font-bold text-gray-900">
        Gestão da Galeria
      </h1>
      <button
        @click="openModal"
        class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded shadow transition"
      >
        + Adicionar Categoria
      </button>
    </div>

    <div class="space-y-8">
      <div
        v-for="(category, index) in editableCategories"
        :key="index"
        class="bg-white rounded-lg shadow p-4"
      >
        <div class="flex justify-between items-center mb-4">
          <input
            v-model="category.title"
            class="text-fluid-xl font-semibold text-gray-900 bg-transparent border-b border-gray-300 w-full"
          />
          <div class="space-x-2">
            <button
              @click="editCategory(category)"
              class="text-yellow-600 hover:text-yellow-800 font-semibold"
            >
              Editar
            </button>
            <button
              @click="removeCategory(index)"
              class="text-red-600 hover:text-red-800 font-semibold"
            >
              Apagar
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div
            v-for="(image, imgIndex) in category.images"
            :key="imgIndex"
            class="relative"
          >
            <input
              v-model="category.images[imgIndex]"
              class="w-full border border-gray-300 rounded px-2 py-1 text-gray-900 bg-gray-50"
              placeholder="URL da imagem"
            />
            <button
              @click="removeImageFromCategory(category, imgIndex)"
              class="absolute top-1 right-1 text-red-600 hover:text-red-800 text-fluid-sm"
              title="Remover imagem"
            >
              ✕
            </button>
          </div>

          <button
            @click="addImageToCategory(category)"
            class="border-2 border-dashed border-gray-300 rounded flex items-center justify-center h-20 text-gray-500 hover:text-gray-700"
          >
            + Adicionar Imagem
          </button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div
          class="bg-white rounded-lg shadow-lg max-w-md w-full p-6"
          @click.stop
        >
          <h2 class="text-fluid-xl font-semibold mb-4 text-gray-900">
            Nova Categoria
          </h2>

          <label
            class="block mb-4 text-gray-700 font-medium"
          >
            Título
            <input
              v-model="newCategory.title"
              type="text"
              class="mt-1 block w-full rounded border border-gray-300 bg-gray-50 text-gray-900 px-3 py-2"
              placeholder="Ex: Festa São João 2024"
            />
          </label>

          <div class="flex justify-end space-x-3">
            <button
              @click="closeModal"
              class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
            <button
              @click="saveCategory"
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
