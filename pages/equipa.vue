<script setup>
import { assembleiaGeral, direcao, conselhoFiscal } from "@/data/equipa";

definePageMeta({ layout: "default" });

const season = "2026/2027";
const fallbackImage = "/equipa/default.jpg";

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

      <section class="w-full">
        <h2 class="mb-6 text-center text-2xl font-bold text-slate-800">
          Equipa Técnica
        </h2>

        <LandingSeasonNotice
          :season="season"
          title="Equipa técnica em preparação"
          description="A equipa técnica da época 2026/2027 será brevemente apresentada. Volte a visitar esta página para conhecer o nosso staff."
        />
      </section>

      <section class="mt-16 w-full">
        <h2 class="mb-6 text-center text-2xl font-bold text-slate-800">
          Plantel
        </h2>

        <LandingSeasonNotice
          :season="season"
          title="Plantel em preparação"
          description="O plantel da época 2026/2027 será brevemente apresentado. Volte a visitar esta página para conhecer os nossos jogadores."
        />
      </section>
    </section>
  </LandingContainer>
</template>