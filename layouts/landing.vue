<template>
  <div
    class="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300 pb-4"
  >
    <LandingNavbar />
    <main class="flex-grow pt-24 px-8">
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>
