<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  src?: string | null
  alt?: string
  preset?: string
}>(), {
  src: '',
  alt: '',
})

const managedUpload = computed(() => {
  const value = String(props.src || '')
  return value.startsWith('/uploads/') || value.includes('/uploads/')
})
</script>

<template>
  <img
    v-if="managedUpload"
    :src="src || ''"
    :alt="alt"
    v-bind="$attrs"
  >
  <NuxtImg
    v-else
    :src="src || ''"
    :alt="alt"
    :preset="preset"
    v-bind="$attrs"
  />
</template>
