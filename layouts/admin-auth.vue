<script setup lang="ts">
import '~/assets/css/admin.css'
</script>

<template>
  <main class="auth-shell">
    <div class="auth-theme-toggle"><ThemeToggle /></div>
    <slot />
    <CmsToasts />
  </main>
</template>
