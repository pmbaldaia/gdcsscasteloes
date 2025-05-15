<script setup>
definePageMeta({
  layout: "landing",
});

import { ref, onMounted, nextTick } from "vue";

const categories = ref([
  {
    title: "São João 2024",
    images: [
      "/galeria/1.webp",
      "/galeria/2.webp",
      "/galeria/3.webp",
      "/galeria/4.webp",
    ],
  },
  {
    title: "Inauguração Bancada",
    images: [
      "/galeria/5.webp",
      "/galeria/6.webp",
      "/galeria/7.webp",
      "/galeria/13.webp",
    ],
  },
  {
    title: "Jantar 2024",
    images: [
      "/galeria/8.webp",
      "/galeria/9.webp",
      "/galeria/10.webp",
      "/galeria/11.webp",
      "/galeria/12.webp",
    ],
  },
  {
    title: "Des'Banda 2024",
    images: ["/galeria/14.webp", "/galeria/15.webp"],
  },
]);

const selectedImage = ref(null);
const dialogRef = ref(null);

const openImage = (img) => {
  selectedImage.value = img;
  nextTick(() => {
    dialogRef.value?.showModal();
  });
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
        <img :src="selectedImage" alt="Imagem ampliada" class="zoomed-image" />
      </div>
    </dialog>
  </LandingContainer>
</template>

<style scoped>
dialog {
  all: unset;
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.85);
  animation: fadeInBackdrop 0.3s ease forwards;
}

@keyframes fadeInBackdrop {
  from {
    background: rgba(0, 0, 0, 0);
  }
  to {
    background: rgba(0, 0, 0, 0.85);
  }
}

.dialog-zoom {
  width: 100vw;
  height: 100vh;
  background: transparent;
  animation: fadeInDialog 0.3s ease forwards;
}

@keyframes fadeInDialog {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.dialog-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.zoomed-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e53e3e;
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: background-color 0.2s ease;
  z-index: 10;
}

.close-btn:hover {
  background-color: #c53030;
}
</style>
