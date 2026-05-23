<script setup>
definePageMeta({ layout: "default" });

const season = "2026/2027";
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        <div class="flex flex-col items-center">
          <span class="text-slate-800">Equipa {{ season }}</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-green-600"></div>
            <div class="w-1/2 bg-red-600"></div>
          </div>
        </div>
      </template>
      <template #desc>
        <span class="text-slate-600">
          Plantel e órgãos sociais do G.D.C.S.S. Castelões
        </span>
      </template>
    </LandingSectionhead>

    <div class="mt-12 mb-16">
      <LandingSeasonNotice
        :season="season"
        title="Informação em atualização"
        description="O plantel e os órgãos sociais referentes à época 2026/2027 serão publicados em breve nesta página. Agradecemos a sua compreensão e o apoio contínuo ao clube."
      />
    </div>
  </LandingContainer>
</template>
