<script setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        <div class="flex flex-col items-center">
          <span class="text-gray-900 dark:text-white">
            Oportunidades Exclusivas para Sócios
          </span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-red-600"></div>
            <div class="w-1/2 bg-green-600"></div>
          </div>
        </div>
      </template>

      <template #desc>
        <span class="text-slate-600 dark:text-gray-300">
          Garante já o teu kit oficial do clube com desconto especial nas cotas!
          Mostra a tua paixão e apoio com cachecol e camisola exclusivos.
          Escolhe a tua oferta perfeita!
        </span>
      </template>
    </LandingSectionhead>

    <div class="max-w-4xl mx-auto mt-12 px-3 rounded-3xl bg-transparent">
      <div class="w-full sm:px-0">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mx-auto rounded-xl bg-white dark:bg-zinc-900"
        >
          <div
            class="p-6 rounded-xl border-2 border-black dark:border-white text-center text-green-700 dark:text-green-400 transition flex flex-col justify-between hover:shadow-lg hover:scale-[1.03] hover:duration-300"
          >
            <p class="text-2xl font-semibold tracking-wide mb-6">Só Cotas</p>
            <p class="text-4xl font-extrabold tracking-tight">25,00€</p>
          </div>

          <div
            class="p-6 rounded-xl border-2 border-black dark:border-white text-center text-green-700 dark:text-green-400 transition flex flex-col justify-between hover:shadow-lg hover:scale-[1.03] hover:duration-300"
          >
            <p class="text-xl font-semibold tracking-wide mb-6">
              Cotas + Cachecol
            </p>
            <p class="text-4xl font-extrabold tracking-tight">30,00€</p>
          </div>

          <div
            class="p-6 rounded-xl border-2 border-black dark:border-white text-center text-green-700 dark:text-green-400 transition flex flex-col justify-between hover:shadow-lg hover:scale-[1.03] hover:duration-300"
          >
            <p class="text-xl font-semibold tracking-wide mb-6">
              Cotas + Camisola
            </p>
            <p class="text-4xl font-extrabold tracking-tight">40,00€</p>
          </div>

          <div
            class="p-6 rounded-xl border-2 border-black dark:border-white text-center text-green-700 dark:text-green-400 transition flex flex-col justify-between hover:shadow-lg hover:scale-[1.03] hover:duration-300"
          >
            <p class="text-xl font-semibold tracking-wide mb-6">Kit Completo</p>
            <p class="text-4xl font-extrabold tracking-tight">45,00€</p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            Quer garantir seu kit oficial ou tirar dúvidas? Entre em contato com
            a direção!
          </p>
          <NuxtLink
            to="/contacto"
            class="bg-red-800 text-white hover:bg-black hover:text-white border border-red-800 hover:border-white w-full sm:w-auto inline-block text-center px-6 py-3 rounded font-semibold transition"
          >
            Contactar Direção
          </NuxtLink>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
