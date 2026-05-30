<script setup>
import {
  assembleiaGeral,
  direcao,
  conselhoFiscal,
} from "@/data/equipa";

definePageMeta({ layout: "default" });

const season = "2026/2027";

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
  return src && src.trim() !== "" ? src : "/equipa/default.jpg";
}
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
          Órgãos sociais do G.D.C.S.S. Castelões
        </span>
      </template>
    </LandingSectionhead>

    <section class="mt-12 w-full">
      <h2 class="text-2xl font-bold text-center text-slate-800 mb-6">
        Assembleia Geral
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="membro in assembleiaGeral"
          :key="membro.nome"
          class="card-surface pb-2 flex flex-col items-center text-center min-h-[300px]"
        >
          <img
            :src="getImagem(membro.img)"
            :alt="formatarNome(membro.nome)"
            data-fallback="/equipa/default.jpg"
            class="w-full h-96 object-cover rounded-t-xl"
            @error="onImgError"
          />
          <div class="flex-1 flex flex-col justify-end mt-4 px-4 pb-4">
            <p class="text-xl font-semibold text-slate-900">
              {{ formatarNome(membro.nome) }}
            </p>
            <p class="text-slate-600">{{ membro.funcao }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-16 w-full">
      <h2 class="text-2xl font-bold text-center text-slate-800 mb-6">
        Direção
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="membro in direcao"
          :key="`${membro.nome}-${membro.funcao}`"
          class="card-surface pb-2 flex flex-col items-center text-center min-h-[300px]"
        >
          <img
            :src="getImagem(membro.img)"
            :alt="formatarNome(membro.nome)"
            data-fallback="/equipa/default.jpg"
            class="w-full h-96 object-cover rounded-t-xl"
            @error="onImgError"
          />
          <div class="flex-1 flex flex-col justify-end mt-4 px-4 pb-4">
            <p class="text-xl font-semibold text-slate-900">
              {{ formatarNome(membro.nome) }}
            </p>
            <p class="text-slate-600">{{ membro.funcao }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-16 mb-16 w-full">
      <h2 class="text-2xl font-bold text-center text-slate-800 mb-6">
        Conselho Fiscal
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(membro, index) in conselhoFiscal"
          :key="membro.nome"
          class="card-surface pb-2 flex flex-col items-center text-center min-h-[300px]"
        >
          <img
            :src="getImagem(membro.img)"
            :alt="formatarNome(membro.nome)"
            data-fallback="/equipa/default.jpg"
            class="w-full h-96 object-cover rounded-t-xl"
            :style="
              index === 0
                ? 'object-position: center top;'
                : index === 1
                  ? 'object-position: center 30%;'
                  : 'object-position: center 45%;'
            "
            @error="onImgError"
          />
          <div class="flex-1 flex flex-col justify-end mt-4 px-4 pb-4">
            <p class="text-xl font-semibold text-slate-900">
              {{ formatarNome(membro.nome) }}
            </p>
            <p class="text-slate-600">{{ membro.funcao }}</p>
          </div>
        </div>
      </div>
    </section>
  </LandingContainer>
</template>
