<script setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <LandingContainer>
    <LandingHero />
    <div id="conteudo-principal">
      <LandingFeatures />
    </div>
    <LandingGames />
    <LandingLogos />
    <LandingCta />
  </LandingContainer>
</template>
