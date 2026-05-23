<script setup>
const features = [
  {
    title: "Treina no Máximo",
    description:
      "Aqui treinas com intensidade e foco. Cada sessão é uma oportunidade para te superares dentro das quatro linhas.",
    icon: "game-icons:soccer-field",
  },
  {
    title: "Faz Parte da História",
    description:
      "Desde 1984 que deixamos marca. Junta-te a esta tradição cheia de conquistas e paixão pelo futebol.",
    icon: "mdi:history",
  },
  {
    title: "Luta por Títulos",
    description:
      "Entramos em campo para ganhar. Participamos em campeonatos com garra e orgulho nas nossas cores.",
    icon: "mdi:trophy",
  },
  {
    title: "Mostra o Teu Talento",
    description:
      "Queremos ajudar-te a crescer como jogador. Focamo-nos na tua evolução técnica, tática e pessoal.",
    icon: "mdi:soccer",
  },
  {
    title: "Liga-te à Comunidade",
    description:
      "Aqui sentes o apoio dentro e fora do campo. Somos mais do que um clube — somos família.",
    icon: "mdi:account-group",
  },
  {
    title: "Joga com o Coração",
    description:
      "Vestir esta camisola é mais do que jogar futebol. É entrega, paixão e respeito por quem a defende.",
    icon: "mdi:heart",
  },
];
</script>

<template>
  <div
    class="mt-16 pt-5 pb-8 md:pt-8 mt-8 px-4 sm:px-4 md:px-8 max-w-screen-xl mx-auto"
  >
    <h2
      class="text-fluid-2xl font-bold lg:tracking-tight text-gray-900"
    >
      Vive o Clube. Dá Tudo em Campo.
    </h2>

    <p class="text-slate-600 mt-2">
      Conhece o que te espera quando vestes esta camisola. Aqui jogas com garra.
    </p>
  </div>

  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16 pt-5 pb-8 md:pt-8 mt-8 px-4 sm:px-4 md:px-8 max-w-screen-xl mx-auto"
  >
    <div
      v-for="(item, index) in features"
      :key="item.title"
      class="flex gap-4 items-start"
    >
      <div
        :class="[
          'mt-1 rounded-full p-2 w-8 h-8 shrink-0',
          index % 2 === 0 ? 'bg-green-800' : 'bg-red-800',
        ]"
      >
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-fluid-lg text-gray-800">
          {{ item.title }}
        </h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
