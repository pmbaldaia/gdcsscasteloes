<script setup>
definePageMeta({
  layout: "landing",
});

import { ref, onMounted, nextTick } from "vue";
import { categories as importedCategories } from "~/data/galeria.js";

import "~/assets/css/galeria.css";

const categories = ref(importedCategories);
const selectedImage = ref(null);
const dialogRef = ref(null);

const openImage = async (img) => {
  selectedImage.value = null;
  await nextTick();

  const timestamp = new Date().getTime();
  selectedImage.value = `${img}?t=${timestamp}`;

  dialogRef.value?.showModal();
};

const closeDialog = () => {
  dialogRef.value?.close();
  selectedImage.value = null;
};

const preloadImages = () => {
  categories.value.forEach((category) => {
    category.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  });
};

onMounted(() => {
  preloadImages();
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>
        <div class="flex flex-col items-center">
          <span class="text-gray-900 dark:text-white">Galeria</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-red-600"></div>
            <div class="w-1/2 bg-green-600"></div>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        <p class="text-slate-600 dark:text-gray-300">
          Espreita alguns dos momentos que captámos em imagens!
        </p>
      </template>
    </LandingSectionhead>

    <div class="space-y-24 mt-12 sm:px-4">
      <section v-for="(category, index) in categories" :key="index">
        <h2
          :class="[
            'text-2xl font-bold tracking-tight mb-10',
            index === 0 || index >= categories.length - 3
              ? 'text-left mt-6 text-gray-800 dark:text-white'
              : 'text-center text-gray-800 dark:text-white',
          ]"
        >
          {{ category.title }}
        </h2>

        <div
          class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
        >
          <div
            v-for="(src, i) in category.images"
            :key="i"
            @click="openImage(src)"
            class="cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300 h-48"
          >
            <img
              :src="src"
              alt="Foto da galeria"
              class="w-full h-full object-cover hover:scale-[1.02] transition-transform rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </div>

    <dialog
      v-if="selectedImage"
      ref="dialogRef"
      class="dialog-zoom"
      @click.self="closeDialog"
    >
      <div class="dialog-content">
        <button
          @click="closeDialog"
          aria-label="Fechar imagem"
          class="close-btn"
        >
          ✕
        </button>
        <img
          :src="selectedImage"
          :key="selectedImage"
          alt="Imagem ampliada"
          class="zoomed-image"
        />
      </div>
    </dialog>
  </LandingContainer>
</template>
