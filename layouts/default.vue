<script setup>
const route = useRoute()
const isHome = computed(() => route.path === '/' || route.path === '')
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <LandingNavbar />

    <main
      class="flex-grow pb-10 sm:pb-12"
      :class="isHome ? 'site-main--home' : 'pt-20 sm:pt-24'"
    >
      <div class="site-shell">
        <slot />
      </div>
    </main>

    <LandingFooter />
  </div>
</template>
