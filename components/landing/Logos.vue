<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useSponsors } from "~/modules/sponsors/useSponsors";
const { sponsors } = await useSponsors();
const selectedSponsor=ref(null);
const openSponsor=(sponsor)=>{if(sponsor.url){window.open(sponsor.url,'_blank','noopener,noreferrer');return}selectedSponsor.value=sponsor;if(import.meta.client)document.body.style.overflow='hidden'};
const closeZoom=()=>{selectedSponsor.value=null;if(import.meta.client)document.body.style.overflow=''};
const onKeydown=(event)=>{if(event.key==='Escape')closeZoom()};
onMounted(()=>window.addEventListener('keydown',onKeydown));
onUnmounted(()=>{window.removeEventListener('keydown',onKeydown);if(import.meta.client)document.body.style.overflow=''})
</script>

<template>
  <section class="mt-24">
    <h2
      class="text-slate-900 text-fluid-3xl font-bold text-center tracking-tight"
    >
      Patrocínios
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mt-10 px-4">
      <button
        v-for="(sponsor, i) in sponsors"
        :key="i"
        type="button"
        :aria-label="`Ampliar logo ${sponsor.alt}`"
        class="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg"
        @click="openSponsor(sponsor)"
      >
        <NuxtImg
          :src="sponsor.src"
          :alt="sponsor.alt"
          class="object-contain h-[120px] w-full max-w-[160px] mx-auto transition-transform duration-300 hover:scale-110"
          :class="{
            'bg-black rounded-lg': sponsor.alt === 'CFDS',
            'p-2': sponsor.alt === 'CFDS',
          }"
          format="webp"
          sizes="100px sm:120px md:160px"
          densities="1x 2x"
          loading="lazy"
          placeholder="blur"
        />
      </button>
    </div>

    <Teleport to="body">
      <div
        v-if="selectedSponsor"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4"
        @click="closeZoom"
      >
        <button
          type="button"
          aria-label="Fechar imagem"
          class="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-lg font-bold text-white shadow-md transition-colors hover:bg-red-700"
          @click="closeZoom"
        >
          ✕
        </button>
        <img
          :src="selectedSponsor.src"
          :alt="selectedSponsor.alt"
          class="max-h-[88vh] max-w-[95vw] w-auto h-auto object-contain md:max-h-[90vh] md:max-w-[min(95vw,1600px)]"
          :class="{
            'rounded-lg bg-black p-4': selectedSponsor.alt === 'CFDS',
          }"
          @click.stop
        />
      </div>
    </Teleport>
  </section>
</template>
