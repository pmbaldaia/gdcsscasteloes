<script setup>
import { computed } from 'vue'
import { useGallery } from '~/modules/gallery/useGallery'

const { categories } = await useGallery()

const previewImages = computed(() => {
  const rows = Array.isArray(categories.value) ? categories.value : []
  return rows
    .flatMap((category) => Array.isArray(category?.images) ? category.images : [])
    .filter(Boolean)
    .slice(0, 3)
})
</script>

<template>
  <section v-if="previewImages.length" class="mt-16">
    <h2 class="text-fluid-3xl font-bold text-center text-neutral-900">
      Galeria de Momentos
    </h2>

    <div class="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <SiteImage
        v-for="(src, index) in previewImages"
        :key="`${src}-${index}`"
        :src="src"
        :alt="`Imagem da galeria ${index + 1}`"
        preset="thumb"
        width="640"
        height="256"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        decoding="async"
        class="w-full h-64 object-cover rounded-lg shadow-lg"
      />
    </div>

    <div class="mt-6 text-center">
      <LandingLink
        size="lg"
        class="bg-primary-900 text-white hover:bg-secondary-800 border border-primary-900 hover:border-secondary-900"
        href="/galeria"
      >
        Ver mais imagens
      </LandingLink>
    </div>
  </section>
</template>
