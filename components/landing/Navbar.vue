<script setup>
import { ref } from "vue";
import {
  PhInstagramLogo,
  PhFacebookLogo,
  PhList,
  PhX,
} from "@phosphor-icons/vue";
import { useRoute } from "vue-router";

const open = ref(false);
const route = useRoute();

const menuitems = [
  { title: "Sobre nós", path: "/sobre/" },
  { title: "Equipa", path: "/equipa/" },
  { title: "Calendário", path: "/calendario/" },
  { title: "Eventos", path: "/eventos/" },
  { title: "Galeria", path: "/galeria/" },
  { title: "Oportunidades", path: "/oportunidades/" },
];

const isActive = (item) =>
  item.path === "/eventos/"
    ? route.path === "/eventos/" || route.path.startsWith("/eventos/")
    : route.path === item.path;
</script>

<template>
  <LandingContainer>
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center py-4"
      >
        <div class="flex w-full lg:w-auto items-center justify-between">
          <a href="/" class="shrink-0" aria-label="Logo Castelões">
            <NuxtImg
              class="transition-transform duration-300 hover:scale-105 w-14 h-14 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem]"
              src="/img/logowbg.webp"
              alt="Logo GDCSS Castelões"
              width="80"
              height="80"
              sizes="80px"
              preload
              fetchpriority="high"
            />
          </a>

          <div class="flex items-center gap-3 lg:hidden">
            <button
              @click="open = !open"
              class="text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              :aria-expanded="open"
              aria-label="Menu"
            >
              <PhX v-if="open" class="w-6 h-6" />
              <PhList v-else class="w-6 h-6" />
            </button>
          </div>
        </div>

        <nav
          class="w-full lg:w-auto lg:flex lg:items-center"
          :class="open ? 'block' : 'hidden lg:block'"
        >
          <ul
            class="flex flex-col items-center text-center lg:flex-row lg:gap-1 py-4 lg:py-0 border-t border-slate-100 lg:border-0 mt-2 lg:mt-0"
          >
            <li v-for="item in menuitems" :key="item.path">
              <NuxtLink
                :to="item.path"
                @click="open = false"
                :class="[
                  'block lg:px-3 py-2.5 text-fluid-sm font-medium rounded-lg transition-colors duration-200',
                  isActive(item)
                    ? 'text-green-900 bg-green-50 lg:bg-transparent lg:border-b-2 lg:border-green-800 lg:rounded-none'
                    : 'text-slate-700 hover:text-green-900 hover:bg-slate-50 lg:hover:bg-transparent',
                ]"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>

          <div
            class="lg:hidden flex justify-center items-center pb-4 gap-5 w-full"
          >
            <a
              href="https://www.instagram.com/gdcsscasteloes/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-600 hover:text-green-800 transition-colors"
            >
              <PhInstagramLogo class="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/gdcscasteloes/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-600 hover:text-green-800 transition-colors"
            >
              <PhFacebookLogo class="w-6 h-6" />
            </a>
          </div>
        </nav>

        <div class="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="https://www.instagram.com/gdcsscasteloes/"
            target="_blank"
            aria-label="Instagram"
            class="text-slate-600 hover:text-green-800 transition-colors"
          >
            <PhInstagramLogo class="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/gdcscasteloes/"
            target="_blank"
            aria-label="Facebook"
            class="text-slate-600 hover:text-green-800 transition-colors"
          >
            <PhFacebookLogo class="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>
