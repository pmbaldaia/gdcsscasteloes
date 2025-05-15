<template>
  <div
    class="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300 pb-4"
  >
    <LandingNavbar />
    <hr
      class="border-t-2 border-gray-200 dark:border-gray-700 my-4 w-[65%] mx-auto"
    />
    <main class="flex-grow">
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>
