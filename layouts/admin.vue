<script setup lang="ts">
import '~/assets/css/admin.css'
useHead({ titleTemplate: (title) => title ? `${title} · GDCSS Castelões CMS` : 'GDCSS Castelões CMS', link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap' }] })
const sidebarOpen = ref(false)
</script>

<template>
  <div class="cms-shell">
    <CmsSidebar :open="sidebarOpen" @close="sidebarOpen = false" />
    <div class="cms-shell__main">
      <CmsTopbar @menu="sidebarOpen = !sidebarOpen" />
      <main class="cms-content">
        <slot />
      </main>
    </div>
  </div>
</template>
