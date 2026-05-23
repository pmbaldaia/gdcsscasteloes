<template>
  <div class="min-h-screen flex flex-col">
    <LandingNavbar />
    <main
      class="flex-grow pt-20 sm:pt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pb-8"
    >
      <div class="max-w-screen-xl w-full mx-auto">
        <NuxtPage />
      </div>
    </main>

    <LandingFooter />
  </div>
</template>
