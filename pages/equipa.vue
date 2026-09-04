<script setup>
import { applyImageFallback } from "~/utils/imageFallback";
import { useTeamStructure } from "~/modules/team/useTeamStructure";
const { assembleiaGeral, direcao, conselhoFiscal, equipaTecnica, plantel } = await useTeamStructure();
const isEquipaRevealed = (item) => item?.status !== 'draft' && (!item?.publishedAt || new Date(item.publishedAt).getTime() <= Date.now());

import "~/assets/css/galeria.css";

definePageMeta({ layout: "default" });

const { value: cmsValue } = await useManagedPageContent('equipa');
const fallbackImage = "/equipa/default.webp";
const selectedImage = ref(null);
const dialogRef = ref(null);
const equipaTecnicaVisivel = computed(() =>
  equipaTecnica.value.filter((membro) => isEquipaRevealed(membro)),
);
const plantelVisivel = computed(() =>
  plantel.value.filter((jogador) => isEquipaRevealed(jogador)),
);

async function openImage(src) {
  selectedImage.value = src;
  await nextTick();
  dialogRef.value?.showModal();
}

function closeDialog() {
  dialogRef.value?.close();
  selectedImage.value = null;
}

function formatarNome(nome) {
  const partes = nome.trim().split(" ");
  if (partes.length <= 2) return nome;
  return `${partes[0]} ${partes[partes.length - 1]}`;
}

function onImgError(event) {
  applyImageFallback(event);
}

function getImagem(src) {
  return src && src.trim() !== "" ? src : fallbackImage;
}

function getConselhoFiscalPosition(index) {
  if (index === 0) return "object-position: center top;";
  if (index === 1) return "object-position: center 30%;";
  return "object-position: center 45%;";
}
</script>

<template>
  <LandingContainer>
    <CmsManagedPageHeader page-slug="equipa" fallback-title="Equipa 2026/2027" fallback-description="Órgãos sociais, equipa técnica e plantel do G.D.C.S.S. Castelões" />

    <section class="mt-12 w-full">
      <div class="mb-12 text-center">
        <span
          class="text-sm font-semibold uppercase tracking-[0.25em] text-primary-700"
        >
          {{ cmsValue('social-title','title','Órgãos Sociais').value }}
        </span>
      </div>

      <section class="w-full">
        <h2 class="mb-6 text-center text-2xl font-bold text-neutral-900">
          {{ cmsValue('assembly-title','title','Assembleia Geral').value }}
        </h2>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div
            v-for="membro in assembleiaGeral"
            :key="membro.nome"
            class="card-surface flex min-h-[300px] flex-col items-center pb-2 text-center"
          >
            <img
              :src="getImagem(membro.img)"
              :alt="formatarNome(membro.nome)"
              :data-fallback="fallbackImage"
              class="h-96 w-full rounded-t-xl object-cover"
              @error="onImgError"
            />

            <div class="mt-4 flex flex-1 flex-col justify-end px-4 pb-4">
              <p class="text-xl font-semibold text-neutral-900">
                {{ formatarNome(membro.nome) }}
              </p>
              <p class="text-neutral-600">
                {{ membro.funcao }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16 w-full">
        <h2 class="mb-6 text-center text-2xl font-bold text-neutral-900">
          {{ cmsValue('board-title','title','Direção').value }}
        </h2>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div
            v-for="membro in direcao"
            :key="`${membro.nome}-${membro.funcao}`"
            class="card-surface flex min-h-[300px] flex-col items-center pb-2 text-center"
          >
            <img
              :src="getImagem(membro.img)"
              :alt="formatarNome(membro.nome)"
              :data-fallback="fallbackImage"
              class="h-96 w-full rounded-t-xl object-cover"
              @error="onImgError"
            />

            <div class="mt-4 flex flex-1 flex-col justify-end px-4 pb-4">
              <p class="text-xl font-semibold text-neutral-900">
                {{ formatarNome(membro.nome) }}
              </p>
              <p class="text-neutral-600">
                {{ membro.funcao }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16 w-full">
        <h2 class="mb-6 text-center text-2xl font-bold text-neutral-900">
          {{ cmsValue('fiscal-title','title','Conselho Fiscal').value }}
        </h2>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div
            v-for="(membro, index) in conselhoFiscal"
            :key="membro.nome"
            class="card-surface flex min-h-[300px] flex-col items-center pb-2 text-center"
          >
            <img
              :src="getImagem(membro.img)"
              :alt="formatarNome(membro.nome)"
              :data-fallback="fallbackImage"
              class="h-96 w-full rounded-t-xl object-cover"
              :style="getConselhoFiscalPosition(index)"
              @error="onImgError"
            />

            <div class="mt-4 flex flex-1 flex-col justify-end px-4 pb-4">
              <p class="text-xl font-semibold text-neutral-900">
                {{ formatarNome(membro.nome) }}
              </p>
              <p class="text-neutral-600">
                {{ membro.funcao }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="mt-20 mb-16 w-full">
      <div class="mb-12 text-center">
        <span
          class="text-sm font-semibold uppercase tracking-[0.25em] text-primary-700"
        >
          {{ cmsValue('sport-title','title','Estrutura Desportiva').value }}
        </span>
      </div>

      <section id="equipa-tecnica" class="w-full scroll-mt-28">
        <h2 class="mb-6 text-center text-2xl font-bold text-neutral-900">
          {{ cmsValue('staff-title','title','Equipa Técnica').value }}
        </h2>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div
            v-for="membro in equipaTecnicaVisivel"
            :key="membro.id"
            class="card-surface flex cursor-pointer items-center justify-center overflow-hidden bg-neutral-50 p-2 transition-shadow hover:shadow-lg"
            role="button"
            tabindex="0"
            @click="openImage(getImagem(membro.img))"
            @keydown.enter="openImage(getImagem(membro.img))"
          >
            <img
              :src="getImagem(membro.img)"
              alt="Membro da equipa técnica"
              :data-fallback="fallbackImage"
              class="h-auto w-full object-contain"
              @error="onImgError"
            />
          </div>
        </div>
      </section>

      <section id="plantel" class="mt-16 w-full scroll-mt-28">
        <h2 class="mb-6 text-center text-2xl font-bold text-neutral-900">
          {{ cmsValue('squad-title','title','Plantel').value }}
        </h2>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div
            v-for="jogador in plantelVisivel"
            :key="jogador.id"
            class="card-surface flex cursor-pointer items-center justify-center overflow-hidden bg-neutral-50 p-2 transition-shadow hover:shadow-lg"
            role="button"
            tabindex="0"
            @click="openImage(getImagem(jogador.img))"
            @keydown.enter="openImage(getImagem(jogador.img))"
          >
            <img
              :src="getImagem(jogador.img)"
              alt="Jogador do plantel"
              :data-fallback="fallbackImage"
              class="h-auto w-full object-contain"
              @error="onImgError"
            />
          </div>
        </div>
      </section>
    </section>

    <dialog
      v-if="selectedImage"
      ref="dialogRef"
      class="dialog-zoom"
      @cancel.prevent="closeDialog"
      @click.self="closeDialog"
    >
      <div class="dialog-content" @click.self="closeDialog">
        <button
          type="button"
          aria-label="Fechar imagem"
          class="close-btn"
          @click="closeDialog"
        >
          ✕
        </button>
        <img
          :src="selectedImage"
          alt="Imagem ampliada"
          class="zoomed-image"
          @click.stop
        />
      </div>
    </dialog>
  </LandingContainer>
</template>