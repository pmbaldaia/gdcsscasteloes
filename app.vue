<script setup lang="ts">
import { onMounted } from "vue";
import { applyTheme } from "~/src//utils/theme";

onMounted(() => {
  applyTheme((localStorage.getItem("theme") as "light" | "dark") || "light");
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
