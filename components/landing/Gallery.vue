<template>
  <section class="mt-16">
    <h2 class="text-fluid-3xl font-bold text-center">Galeria de Momentos</h2>
    <div class="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <img
        src="path-to-image.webp"
        alt="Imagem 1"
        class="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <img
        src="path-to-image.webp"
        alt="Imagem 2"
        class="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <img
        src="path-to-image.webp"
        alt="Imagem 3"
        class="w-full h-64 object-cover rounded-lg shadow-lg"
      />
    </div>
    <div class="mt-6 text-center">
      <LandingLink
        size="lg"
        class="bg-primary-900 text-white hover:bg-secondary-800 border border-primary-900 hover:border-secondary-900"
        href="/galeria"
      >
        Ver mais imagens
      </LandingLink>
    </div>
  </section>
</template>
