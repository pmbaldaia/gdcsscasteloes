<script setup>
defineProps({
  season: {
    type: String,
    default: "2026/2027",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="card-surface border-l-4 border-l-green-800 px-6 py-8 sm:px-10 sm:py-10 max-w-2xl mx-auto text-center"
    role="status"
  >
    <p
      class="text-fluid-sm font-semibold uppercase tracking-wider text-green-800 mb-3"
    >
      Época {{ season }}
    </p>
    <h2 class="text-fluid-2xl font-bold text-slate-900 mb-4">
      {{ title }}
    </h2>
    <p class="text-fluid-base text-slate-600 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
