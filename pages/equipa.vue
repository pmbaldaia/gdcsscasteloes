<script setup>
definePageMeta({ layout: "landing" });

import {
  assembleiaGeral,
  direcao,
  conselhoFiscal,
  plantel as fullPlantel,
} from "@/data/equipa";

function formatarNome(nome) {
  const partes = nome.trim().split(" ");
  if (partes.length <= 2) return nome;
  return `${partes[0]} ${partes[partes.length - 1]}`;
}

function getImagem(src) {
  return src && src.trim() !== "" ? src : "/equipa/default.webp";
}

const dataBase = new Date("2025-07-29T21:30:00");
const agora = new Date();

const umDiaMs = 1000 * 60 * 60 * 24;
let diasPassados = 0;
let dataAtual = new Date(dataBase);

while (dataAtual <= agora) {
  if (dataAtual.getDay() !== 0) {
    diasPassados++;
  }
  dataAtual = new Date(dataAtual.getTime() + umDiaMs);
}

const jogadorIndex = diasPassados - 1;
const plantel = fullPlantel.slice(0, jogadorIndex + 1);
</script>

<template>
  <LandingContainer>
    <!-- Cabeçalho Plantel -->
    <LandingSectionhead>
      <template #title>
        <div class="flex flex-col items-center">
          <span class="text-slate-800 dark:text-white">Plantel 2025/2026</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-green-600"></div>
            <div class="w-1/2 bg-red-600"></div>
          </div>
        </div>
      </template>
      <template #desc>
        <span class="text-slate-600 dark:text-gray-300">
          Conheça o plantel para a época 2025/2026
        </span>
      </template>
    </LandingSectionhead>

    <!-- Plantel -->
    <div class="mt-16 w-full">
      <div
        v-if="plantel.length > 0"
        class="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div
          v-for="jogador in plantel"
          :key="jogador.nome"
          class="bg-white dark:bg-slate-800 py-6 rounded-xl shadow flex flex-col items-center text-center h-full min-h-[350px]"
        >
          <NuxtImg
            :src="getImagem(jogador.img)"
            :alt="formatarNome(jogador.nome)"
            placeholder="blur"
            class="object-contain rounded-t-xl mx-auto"
            style="max-width: 320px; height: auto"
          />

          <div class="flex-1 flex flex-col justify-end mt-6">
            <p class="text-2xl font-semibold text-slate-900 dark:text-white">
              {{ formatarNome(jogador.nome) }}
            </p>
            <p class="text-slate-600 dark:text-gray-300">
              {{ jogador.posicao }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-else
        class="text-center py-12 bg-slate-100 dark:bg-slate-700 rounded-xl text-slate-600 dark:text-gray-300"
      >
        <p class="text-lg">O plantel da época ainda não está disponível.</p>
      </div>
    </div>

    <!-- Órgãos Sociais -->
    <LandingSectionhead>
      <template #title>
        <div class="flex flex-col items-center">
          <span class="text-slate-800 dark:text-white">Órgãos Sociais</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-green-600"></div>
            <div class="w-1/2 bg-red-600"></div>
          </div>
        </div>
      </template>
      <template #desc>
        <span class="text-slate-600 dark:text-gray-300">
          Conheça os responsáveis da época 2025/2026
        </span>
      </template>
    </LandingSectionhead>

    <!-- Assembleia Geral -->
    <div class="mt-12 w-full">
      <h2
        class="text-2xl font-bold text-center text-slate-800 dark:text-white mb-6"
      >
        Assembleia Geral
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="membro in assembleiaGeral"
          :key="membro.nome"
          class="bg-white dark:bg-slate-800 pb-2 rounded-xl shadow flex flex-col items-center text-center h-full min-h-[300px]"
        >
          <NuxtImg
            :src="membro.img || '/equipa/default.webp'"
            :alt="formatarNome(membro.nome)"
            format="auto"
            placeholder="blur"
            class="w-full h-96 object-cover rounded-t-xl"
          />
          <div class="flex-1 flex flex-col justify-end mt-4">
            <p class="text-xl font-semibold text-slate-900 dark:text-white">
              {{ formatarNome(membro.nome) }}
            </p>
            <p class="text-slate-600 dark:text-gray-300">{{ membro.funcao }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Direção -->
    <div class="mt-16 w-full">
      <h2
        class="text-2xl font-bold text-center text-slate-800 dark:text-white mb-6"
      >
        Direção
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="membro in direcao"
          :key="membro.nome + membro.funcao"
          class="bg-white dark:bg-slate-800 pb-2 rounded-xl shadow flex flex-col items-center text-center h-full min-h-[300px]"
        >
          <NuxtImg
            :src="membro.img || '/equipa/default.webp'"
            :alt="formatarNome(membro.nome)"
            format="auto"
            placeholder="blur"
            class="w-full h-96 object-cover rounded-t-xl"
          />
          <div class="flex-1 flex flex-col justify-end mt-4">
            <p class="text-xl font-semibold text-slate-900 dark:text-white">
              {{ formatarNome(membro.nome) }}
            </p>
            <p class="text-slate-600 dark:text-gray-300">{{ membro.funcao }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Conselho Fiscal -->
    <div class="mt-16 w-full">
      <h2
        class="text-2xl font-bold text-center text-slate-800 dark:text-white mb-6"
      >
        Conselho Fiscal
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(membro, index) in conselhoFiscal"
          :key="membro.nome"
          class="bg-white dark:bg-slate-800 pb-2 rounded-xl shadow flex flex-col items-center text-center h-full min-h-[300px]"
        >
          <NuxtImg
            :src="getImagem(membro.img)"
            :alt="formatarNome(membro.nome)"
            format="auto"
            placeholder="blur"
            class="w-full h-96 object-cover rounded-t-xl"
            :style="
              index === 0
                ? 'object-position: center top;'
                : index === 1
                ? 'object-position: center 30%;'
                : 'object-position: center 45%;'
            "
          />
          <div class="flex-1 flex flex-col justify-end mt-4">
            <p class="text-xl font-semibold text-slate-900 dark:text-white">
              {{ formatarNome(membro.nome) }}
            </p>
            <p class="text-slate-600 dark:text-gray-300">{{ membro.funcao }}</p>
          </div>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
