<script setup>
const sponsors = [
  { src: "/patrocinios/carvalhaparque.png", alt: "Carvalha Parque" },
  { src: "/patrocinios/fontevelha.png", alt: "Fonte Velha" },
  { src: "/patrocinios/construcao.png", alt: "Construção" },
  { src: "/patrocinios/sofas.png", alt: "Sofas" },
];
</script>

<template>
  <section class="mt-24">
    <h2
      class="text-black dark:text-white text-3xl md:text-4xl font-bold text-center"
    >
      Patrocínios
    </h2>
    <div
      class="flex flex-wrap gap-8 md:gap-20 items-center justify-center mt-10"
    >
      <img
        v-for="(sponsor, i) in sponsors"
        :key="i"
        :src="sponsor.src"
        :alt="sponsor.alt"
        class="h-[120px] max-w-[160px] object-contain"
      />

      <div
        class="h-[120px] max-w-[160px] flex flex-col justify-center items-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-center px-6 shadow-md cursor-default select-none"
      >
        <span class="text-5xl mb-1 font-extrabold leading-none">+</span>
        <span class="text-base leading-tight pb-6">
          Mais patrocínios<br />em breve
        </span>
      </div>
    </div>
  </section>
</template>
