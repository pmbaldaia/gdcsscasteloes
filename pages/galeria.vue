<script setup>
definePageMeta({
  layout: "default",
});

import { ref, nextTick } from "vue";
import { useGallery } from "~/modules/gallery/useGallery";
const { categories: importedCategories } = await useGallery();

import "~/assets/css/galeria.css";

const categories = importedCategories;
const selectedImage = ref(null);
const dialogRef = ref(null);

const openImage = async (src) => {
  selectedImage.value = src;
  await nextTick();
  dialogRef.value?.showModal();
};

const closeDialog = () => {
  dialogRef.value?.close();
  selectedImage.value = null;
};
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        <div class="flex flex-col items-center">
          <span class="text-neutral-900">Galeria</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-secondary-500"></div>
            <div class="w-1/2 bg-primary-700"></div>
          </div>
        </div>
      </template>
      <template #desc>
        <p class="text-neutral-600">
          Espreita alguns dos momentos que captámos em imagens!
        </p>
      </template>
    </LandingSectionhead>

    <div class="space-y-16 sm:space-y-20 mt-12">
      <section v-for="(category, index) in categories" :key="index">
        <h2
          class="text-fluid-2xl font-bold tracking-tight mb-10 text-center text-neutral-900"
        >
          {{ category.title }}
        </h2>

        <div
          class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
        >
          <button
            v-for="(src, i) in category.images"
            :key="`${index}-${i}`"
            type="button"
            @click="openImage(src)"
            class="cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300 h-48 w-full text-left"
          >
            <SiteImage
              :src="src"
              alt="Foto da galeria"
              preset="thumb"
              width="400"
              height="192"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover hover:scale-[1.02] transition-transform rounded-lg"
            />
          </button>
        </div>
      </section>
    </div>

    <dialog
      v-if="selectedImage"
      ref="dialogRef"
      class="dialog-zoom"
      @cancel.prevent="closeDialog"
      @click.self="closeDialog"
    >
      <div class="dialog-content" @click.self="closeDialog">
        <button
          @click="closeDialog"
          aria-label="Fechar imagem"
          class="close-btn"
        >
          ✕
        </button>
        <img
          :src="selectedImage"
          alt="Imagem ampliada"
          class="zoomed-image"
          loading="eager"
          decoding="async"
          @click.stop
        />
      </div>
    </dialog>
  </LandingContainer>
</template>
