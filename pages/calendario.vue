<script setup>
definePageMeta({
  layout: "default",
});

const season = "2026/2027";
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        <div class="flex flex-col items-center">
          <span class="text-gray-900">Calendário {{ season }}</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-red-600"></div>
            <div class="w-1/2 bg-green-600"></div>
          </div>
        </div>
      </template>
      <template #desc>
        <span class="text-slate-600">
          Consulte aqui o calendário oficial de jogos do clube
        </span>
      </template>
    </LandingSectionhead>

    <div class="max-w-7xl mx-auto px-4 mt-12 mb-16">
      <LandingSeasonNotice
        :season="season"
        title="Calendário em preparação"
        description="O calendário de jogos da época 2026/2027 será disponibilizado em breve. Volte a visitar esta página para acompanhar a nossa temporada."
      />
    </div>
  </LandingContainer>
</template>
