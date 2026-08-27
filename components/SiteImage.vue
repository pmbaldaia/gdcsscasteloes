<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import { applyImageFallback } from '~/utils/imageFallback'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  src?: string | null
  alt?: string
  preset?: string
  fallback?: string
}>(), {
  src: '',
  alt: '',
})

const nativeImgRef = ref<HTMLImageElement | null>(null)
const nuxtImgRef = ref<ComponentPublicInstance | null>(null)

const managedUpload = computed(() => {
  const value = String(props.src || '')
  return value.startsWith('/uploads/') || value.includes('/uploads/')
})

function resolveImageElement(event: Event) {
  if (event.target instanceof HTMLImageElement) {
    return event.target
  }

  const element = managedUpload.value
    ? nativeImgRef.value
    : nuxtImgRef.value?.$el

  return element instanceof HTMLImageElement ? element : null
}

function onImageError(event: Event) {
  applyImageFallback(event, props.fallback, resolveImageElement(event))
}
</script>

<template>
  <img
    v-if="managedUpload"
    ref="nativeImgRef"
    :src="src || ''"
    :alt="alt"
    v-bind="$attrs"
    @error="onImageError"
  >
  <NuxtImg
    v-else
    ref="nuxtImgRef"
    :src="src || ''"
    :alt="alt"
    :preset="preset"
    v-bind="$attrs"
    @error="onImageError"
  />
</template>
