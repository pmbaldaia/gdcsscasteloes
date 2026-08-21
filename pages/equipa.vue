<script setup>
import { useTeamStructure } from "~/modules/team/useTeamStructure";
const { assembleiaGeral, direcao, conselhoFiscal, equipaTecnica, plantel } = await useTeamStructure();
const isEquipaRevealed = (item) => item?.status !== 'draft' && (!item?.publishedAt || new Date(item.publishedAt).getTime() <= Date.now());

import "~/assets/css/galeria.css";

definePageMeta({ layout: "default" });

const season = "2026/2027";
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
  const fallback = event.target.dataset.fallback;

  if (fallback && event.target.src !== fallback) {
    event.target.src = fallback;
  }
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
    <LandingSectionhead>
      <template #title>
        <div class="flex flex-col items-center">
          <span class="text-slate-800">Equipa {{ season }}</span>

          <div class="mt-5 flex h-px w-32 overflow-hidden rounded-sm">
            <div class="w-1/2 bg-green-600"></div>
            <div class="w-1/2 bg-red-600"></div>
          </div>
        </div>
      </template>

      <template #desc>
        <span class="text-slate-600">
          Órgãos sociais, equipa técnica e plantel do G.D.C.S.S. Castelões
        </span>
      </template>
    </LandingSectionhead>

    <section class="mt-12 w-full">
      <div class="mb-12 text-center">
        <span
          class="text-sm font-semibold uppercase tracking-[0.25em] text-green-700"
        >
          Órgãos Sociais
        </span>
      </div>

      <section class="w-full">
        <h2 class="mb-6 text-center text-2xl font-bold text-slate-800">
          Assembleia Geral
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
              <p class="text-xl font-semibold text-slate-900">
                {{ formatarNome(membro.nome) }}
              </p>
              <p class="text-slate-600">
                {{ membro.funcao }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16 w-full">
        <h2 class="mb-6 text-center text-2xl font-bold text-slate-800">
          Direção
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
              <p class="text-xl font-semibold text-slate-900">
                {{ formatarNome(membro.nome) }}
              </p>
              <p class="text-slate-600">
                {{ membro.funcao }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16 w-full">
        <h2 class="mb-6 text-center text-2xl font-bold text-slate-800">
          Conselho Fiscal
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
              <p class="text-xl font-semibold text-slate-900">
                {{ formatarNome(membro.nome) }}
              </p>
              <p class="text-slate-600">
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
          class="text-sm font-semibold uppercase tracking-[0.25em] text-green-700"
        >
          Estrutura Desportiva
        </span>
      </div>

      <section id="equipa-tecnica" class="w-full scroll-mt-28">
        <h2 class="mb-6 text-center text-2xl font-bold text-slate-800">
          Equipa Técnica
        </h2>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div
            v-for="membro in equipaTecnicaVisivel"
            :key="membro.id"
            class="card-surface flex cursor-pointer items-center justify-center overflow-hidden bg-slate-50 p-2 transition-shadow hover:shadow-lg"
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
        <h2 class="mb-6 text-center text-2xl font-bold text-slate-800">
          Plantel
        </h2>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div
            v-for="jogador in plantelVisivel"
            :key="jogador.id"
            class="card-surface flex cursor-pointer items-center justify-center overflow-hidden bg-slate-50 p-2 transition-shadow hover:shadow-lg"
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
      @click.self="closeDialog"
    >
      <div class="dialog-content">
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
        />
      </div>
    </dialog>
  </LandingContainer>
</template>