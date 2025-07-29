<script setup>
definePageMeta({
  layout: "landing",
});

import { ref, onMounted } from "vue";
const showModal = ref(false);

onMounted(() => {
  setTimeout(() => {
    showModal.value = true;
  }, 3000);
});
</script>

<template>
  <div>
    <LandingModal :show="showModal" @close="showModal = false" />

    <LandingContainer>
      <LandingHero />
      <LandingFeatures />
      <LandingLogos />
      <LandingCta />
    </LandingContainer>
  </div>
</template>
