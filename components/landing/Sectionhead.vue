<script setup>
const { align } = defineProps({
  align: {
    type: String,
    default: "center",
  },
});
</script>

<template>
  <div :class="['mt-16', { 'text-center': align === 'center' }]">
    <h1 class="text-fluid-4xl font-bold lg:tracking-tight">
      <slot name="title">Title</slot>
    </h1>
    <p class="text-fluid-lg mt-4 text-slate-600">
      <slot name="desc">Some description goes here</slot>
    </p>
  </div>
</template>
