<script setup>
definePageMeta({
  layout: "landing",
});

const eventos = [
  {
    nome: "41 Anos do G.D.C.S.S. Castelões",
    data: "11 de Abril de 2025",
    descricao:
      "Venha celebrar conosco os 41 anos de história, conquistas e dedicação do nosso clube! Uma festa cheia de momentos inesquecíveis e grandes memórias!",
    imagem: "/eventos/41anos.jpg",
  },
  {
    nome: "São João no Complexo Desportivo de Castelões",
    data: "21 de Junho de 2025",
    descricao:
      "Vem celebrar o tradicional São João connosco! Vai ser uma noite de festa, música, fogos de artifício e muita animação para todos!",
    imagem: "/eventos/saojoao.jpg",
  },
  {
    nome: "Des’Banda em Castelões",
    data: "12 e 13 de Setembro de 2025",
    descricao:
      "Vamos estar presentes na Des’Banda para viver dois dias de muita música, festa e animação em Castelões!",
    imagem: "/eventos/desbanda.jpg",
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>
        <span class="text-gray-900 dark:text-white">Próximos Eventos</span>
      </template>
      <template v-slot:desc>
        <span class="text-slate-600 dark:text-gray-300">
          Não percas as nossas próximas festas e eventos! Vem divertir-te
          connosco!
        </span>
      </template>
    </LandingSectionhead>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-lg mt-12"
    >
      <div
        v-for="evento in eventos"
        :key="evento.nome"
        class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col"
      >
        <img
          :src="evento.imagem"
          :alt="evento.nome"
          class="w-full h-56 object-cover"
        />

        <div class="p-4 flex flex-col flex-grow">
          <h3
            class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 min-h-[3.5rem]"
          >
            {{ evento.nome }}
          </h3>

          <div class="grid grid-rows-[auto_auto] gap-1">
            <p class="text-sm text-gray-500 dark:text-gray-400 min-h-[1.5rem]">
              Data: {{ evento.data }}
            </p>
            <p
              class="text-base text-gray-700 dark:text-gray-300 min-h-[4.5rem] text-justify"
            >
              {{ evento.descricao }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
